export interface ContactFormPayload {
  name: string
  email: string
  company: string
  role?: string
  teamSize?: string
  message: string
  // Honeypot field — should be empty on legitimate submissions
  _hp?: string
}

export interface ContactFormResult {
  success: boolean
  message: string
}

/** Shape returned by GET /api/v1/captcha (self-hosted PoW captcha, see
 * claude_code_pow_captcha_migration_prompt.md). */
interface CaptchaChallenge {
  salt: string
  difficulty: number
  expiresAt: number // unix seconds
  signature: string
}

/** Solved PoW fields posted back alongside the form body. Field names must
 * match captcha.Solution's json tags on the Go backend. */
interface PowSolution {
  powSalt: string
  powDifficulty: number
  powExpiresAt: number
  powSignature: string
  powNonce: string
}

/** Shape the backend actually returns on a successful submission
 * (SubmissionController.CreateSubmission): {"status":"ok","id":"..."}. We
 * check for this explicitly rather than trusting response.ok alone, since
 * a dev proxy / SPA fallback can return a 200 with an unrelated HTML page
 * when the real backend is unreachable. */
interface SubmissionResponse {
  status?: string
  id?: string
  error?: string
}

const API_BASE = (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? ''
const CAPTCHA_ENDPOINT = `${API_BASE}/api/v1/captcha`
const SUBMISSION_ENDPOINT = `${API_BASE}/api/v1/submissions`
const REQUEST_TIMEOUT_MS = 10_000

/** fetch() with a hard timeout, so an unreachable/hanging backend fails
 * fast instead of leaving the user staring at a spinner. */
async function fetchWithTimeout(url: string, init: RequestInit = {}): Promise<Response> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
  try {
    return await fetch(url, { ...init, signal: controller.signal })
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new Error('The server took too long to respond. Please try again.')
    }
    // fetch() throws a TypeError for network failures (connection refused,
    // DNS failure, offline, CORS block, etc.) — this is the case that
    // fires when the Go backend simply isn't running.
    throw new Error('Could not reach the server. Please check that it is running and try again.')
  } finally {
    clearTimeout(timer)
  }
}

/** Parses a Response as JSON only if it actually claims to be JSON.
 * Guards against dev-server/proxy fallbacks that return 200 OK with an
 * HTML page (e.g. a Vite SPA history fallback) when nothing is really
 * listening on the API route — without this check that HTML would either
 * throw deep inside JSON.parse with a confusing error, or in the worst
 * case be silently misread as a truthy-ish object. */
async function parseJsonResponse<T>(res: Response): Promise<T> {
  const contentType = res.headers.get('content-type') ?? ''
  if (!contentType.includes('application/json')) {
    throw new Error('Received an unexpected response from the server. Is the backend running?')
  }
  try {
    return (await res.json()) as T
  } catch {
    throw new Error('Received an invalid response from the server.')
  }
}

async function fetchCaptchaChallenge(): Promise<CaptchaChallenge> {
  const res = await fetchWithTimeout(CAPTCHA_ENDPOINT, { method: 'GET' })
  if (!res.ok) {
    throw new Error(`Could not load captcha challenge (HTTP ${res.status}).`)
  }
  const challenge = await parseJsonResponse<CaptchaChallenge>(res)
  if (!challenge.salt || !challenge.signature || !challenge.difficulty || !challenge.expiresAt) {
    throw new Error('Captcha challenge response was missing required fields.')
  }
  return challenge
}

function leadingZeroBits(bytes: Uint8Array): number {
  let n = 0
  for (const b of bytes) {
    if (b === 0) {
      n += 8
      continue
    }
    for (let mask = 0x80; mask > 0; mask >>= 1) {
      if ((b & mask) !== 0) return n
      n++
    }
  }
  return n
}

/** Inline Web Worker source: brute-forces SHA-256(salt + nonce) using the
 * browser's built-in crypto.subtle, off the main thread. Built from a Blob
 * so no extra .js asset or bundler config is needed. */
const POW_WORKER_SOURCE = `
self.onmessage = async (e) => {
  const { salt, difficulty } = e.data
  const encoder = new TextEncoder()
  let nonce = 0
  for (;;) {
    const digest = await crypto.subtle.digest('SHA-256', encoder.encode(salt + nonce))
    const bytes = new Uint8Array(digest)
    let bits = 0
    let done = false
    for (const b of bytes) {
      if (b === 0) { bits += 8; continue }
      for (let mask = 0x80; mask > 0; mask >>= 1) {
        if ((b & mask) !== 0) { done = true; break }
        bits++
      }
      break
    }
    if (bits >= difficulty) {
      self.postMessage({ nonce: String(nonce) })
      return
    }
    nonce++
  }
}
`

async function solveOnMainThread(salt: string, difficulty: number): Promise<string> {
  const encoder = new TextEncoder()
  let nonce = 0
  for (;;) {
    const digest = await crypto.subtle.digest('SHA-256', encoder.encode(salt + nonce))
    if (leadingZeroBits(new Uint8Array(digest)) >= difficulty) {
      return String(nonce)
    }
    nonce++
  }
}

/** Runs the PoW solve loop inside a Blob-based Web Worker so it doesn't
 * block the UI thread. Falls back to solving on the main thread if Workers
 * are unavailable. */
function solveInWorker(salt: string, difficulty: number): Promise<string> {
  if (typeof Worker === 'undefined') {
    return solveOnMainThread(salt, difficulty)
  }

  return new Promise((resolve, reject) => {
    const blobUrl = URL.createObjectURL(
      new Blob([POW_WORKER_SOURCE], { type: 'application/javascript' })
    )
    const worker = new Worker(blobUrl)

    const cleanup = () => {
      worker.terminate()
      URL.revokeObjectURL(blobUrl)
    }

    worker.onmessage = (e: MessageEvent<{ nonce: string }>) => {
      cleanup()
      resolve(e.data.nonce)
    }
    worker.onerror = (_) => {
      cleanup()
      reject(new Error('Captcha solver failed to run in the browser.'))
    }
    worker.postMessage({ salt, difficulty })
  })
}

/** Fetches (if needed) and solves a PoW captcha challenge, transparently
 * re-fetching once if the challenge expires before/after solving. */
async function solveCaptcha(): Promise<PowSolution> {
  let challenge = await fetchCaptchaChallenge()
  let nonce = await solveInWorker(challenge.salt, challenge.difficulty)

  if (Date.now() / 1000 > challenge.expiresAt) {
    challenge = await fetchCaptchaChallenge()
    nonce = await solveInWorker(challenge.salt, challenge.difficulty)
  }

  return {
    powSalt: challenge.salt,
    powDifficulty: challenge.difficulty,
    powExpiresAt: challenge.expiresAt,
    powSignature: challenge.signature,
    powNonce: nonce,
  }
}

/**
 * Submit the contact form.
 *
 * Solves a self-hosted proof-of-work captcha challenge (Anubis/Cap.js
 * style — see claude_code_pow_captcha_migration_prompt.md), then POSTs the
 * form fields together with the solved PoW fields to the Go backend's
 * POST /api/v1/submissions route.
 *
 * success is only ever true when the backend responded with HTTP 2xx, a
 * genuine application/json body, AND that body's `status` field is "ok"
 * with a submission `id` present. Any network failure, timeout, non-2xx
 * status, non-JSON response, or malformed success body resolves with
 * success: false and a descriptive message — never a false positive.
 */
export async function submitContactForm(
  payload: ContactFormPayload
): Promise<ContactFormResult> {
  // Honeypot check — reject if bot filled hidden field
  if (payload._hp && payload._hp.trim().length > 0) {
    // Silently succeed from the bot's perspective
    return { success: true, message: 'Thank you.' }
  }

  try {
    const solution = await solveCaptcha()
    const { _hp, ...formFields } = payload

    const response = await fetchWithTimeout(SUBMISSION_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formFields, ...solution }),
    })

    const body = await parseJsonResponse<SubmissionResponse>(response)

    if (!response.ok) {
      throw new Error(body.error ?? `Submission failed (HTTP ${response.status}).`)
    }

    if (body.status !== 'ok' || !body.id) {
      throw new Error('The server responded but did not confirm the submission was saved.')
    }

    return {
      success: true,
      message: "Your message has been received. We'll get back to you within one business day.",
    }
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : 'Something went wrong. Please try again.',
    }
  }
}

export function validateContactForm(payload: ContactFormPayload): Record<string, string> {
  const errors: Record<string, string> = {}

  if (!payload.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!payload.email.trim()) {
    errors.email = 'Please enter your work email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!payload.company.trim()) {
    errors.company = 'Please enter your company name.'
  }

  if (!payload.message.trim()) {
    errors.message = 'Please enter a message.'
  } else if (payload.message.trim().length < 10) {
    errors.message = 'Message is too short.'
  }

  return errors
}
