export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  initials: string
}

// NOTE: These are placeholder testimonials. Replace with real customer quotes before production launch.
export const testimonials: Testimonial[] = [
  {
    quote: 'Managing 40+ Telegram groups manually was unsustainable. SynApp gave us a single place to control everything. Bulk operations alone cut our moderation time by hours each week.',
    author: 'Placeholder — Community Lead',
    role: 'Head of Community',
    company: 'Placeholder Company',
    initials: 'CL',
  },
  {
    quote: 'The tagging system changed how we think about user management. We can now segment, target, and act on specific user groups across all our chats instantly.',
    author: 'Placeholder — Operations Manager',
    role: 'Operations Manager',
    company: 'Placeholder Company',
    initials: 'OM',
  },
  {
    quote: 'Setting up automation rules to handle routine governance tasks meant our team could focus on what actually matters. SynApp handles the rest.',
    author: 'Placeholder — Platform Lead',
    role: 'Platform Lead',
    company: 'Placeholder Company',
    initials: 'PL',
  },
]
