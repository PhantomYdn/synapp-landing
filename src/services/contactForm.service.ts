/**
 * Contact form submission via Google Apps Script.
 *
 * Ported from the previous (static) version of synapp.us: the form posts a
 * JSON body to a Google Apps Script web app, which appends a row to a Google
 * Sheet. No backend of our own is needed, which is what lets the site run on
 * GitHub Pages. The Apps Script source and setup steps live in
 * google-apps-script/ at the repo root.
 */

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

/** Web app URL of the deployed Apps Script (Deploy > Manage deployments).
 * Override per environment with VITE_GOOGLE_SCRIPT_URL in a .env file; the
 * default is the deployment used by the previous version of the site. */
const DEFAULT_GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbw2gtqahYVBVNZpUezoqO0ua358hjwrlAQ1K019_ilai5ubxNw11QmBQSAHaMTZ9xhV/exec'

const GOOGLE_SCRIPT_URL =
  (import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined)?.trim() || DEFAULT_GOOGLE_SCRIPT_URL

const REQUEST_TIMEOUT_MS = 15_000

/**
 * Submit the contact form to the Google Apps Script endpoint.
 *
 * The request is sent with `mode: 'no-cors'` because Apps Script web apps
 * answer through a redirect that does not carry CORS headers, so the browser
 * would otherwise block the response. The trade-off (same as in the legacy
 * site) is that the response is opaque: we cannot read the script's JSON
 * reply, so the submission is treated as successful whenever the request
 * itself goes through. Network failures and timeouts are thrown so the form
 * can show its error state.
 */
export async function submitContactForm(
  payload: ContactFormPayload
): Promise<ContactFormResult> {
  // Honeypot check — reject if bot filled hidden field
  if (payload._hp && payload._hp.trim().length > 0) {
    // Silently succeed from the bot's perspective
    return { success: true, message: 'Thank you.' }
  }

  const { _hp, ...fields } = payload

  const body = {
    name: fields.name.trim(),
    email: fields.email.trim(),
    company: fields.company.trim(),
    role: fields.role?.trim() ?? '',
    teamSize: fields.teamSize?.trim() ?? '',
    message: fields.message.trim(),
    // Extra context for the sheet; harmless if the script ignores it.
    page: typeof window !== 'undefined' ? window.location.href : '',
    language: typeof navigator !== 'undefined' ? navigator.language : '',
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      // text/plain keeps the request "simple" (no CORS preflight, which Apps
      // Script cannot answer). The script still receives the raw JSON string
      // in e.postData.contents and parses it itself.
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(body),
      signal: controller.signal,
    })
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new Error('The server took too long to respond. Please try again.')
    }
    throw new Error('Could not reach the server. Please check your connection and try again.')
  } finally {
    clearTimeout(timer)
  }

  return {
    success: true,
    message: "Your message has been received. We'll get back to you within one business day.",
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
