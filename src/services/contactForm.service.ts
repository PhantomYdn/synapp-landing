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

/**
 * Submit the contact form.
 *
 * V1: Stubbed — logs the payload and simulates a successful submission.
 * Replace the body of this function with a real endpoint call when ready.
 * Possible integrations: Formspree, Netlify Forms, a custom API, HubSpot, etc.
 */
export async function submitContactForm(
  payload: ContactFormPayload
): Promise<ContactFormResult> {
  // Honeypot check — reject if bot filled hidden field
  if (payload._hp && payload._hp.trim().length > 0) {
    // Silently succeed from the bot's perspective
    return { success: true, message: 'Thank you.' }
  }

  // --- STUB START ---
  // Remove this block and replace with your real endpoint:
  //
  // const response = await fetch('https://your-endpoint.com/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // })
  // if (!response.ok) throw new Error('Submission failed')
  // return { success: true, message: 'Your message has been received.' }

  console.log('[contactForm.service] Form submission (stub):', payload)

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 900))

  // Uncomment to test error handling:
  // throw new Error('Simulated network error')

  return {
    success: true,
    message: 'Your message has been received. We\'ll get back to you within one business day.',
  }
  // --- STUB END ---
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
