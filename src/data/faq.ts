export interface FaqItem {
  question: string
  answer: string
}

export const homepageFaqs: FaqItem[] = [
  {
    question: 'What is SynApp and who is it for?',
    answer: 'SynApp is a Telegram management platform built for businesses, community operators, and teams that manage large numbers of users and chats. If you\'re spending hours on manual moderation, access control, or trying to maintain consistency across multiple Telegram groups — SynApp is designed for you.',
  },
  {
    question: 'How does SynApp connect to Telegram?',
    answer: 'SynApp connects via the Telegram Bot API and, where needed, the MTProto API. Setup is guided and typically takes under 30 minutes. Once connected, your chats and users are imported automatically.',
  },
  {
    question: 'Does SynApp replace Telegram?',
    answer: 'No. SynApp is a control layer that sits above Telegram. Your users and chats remain on Telegram — SynApp just gives you dramatically better tools to manage them.',
  },
  {
    question: 'Is SynApp safe and compliant?',
    answer: 'SynApp is built with enterprise-grade security practices. Data is handled in accordance with standard privacy regulations. Enterprise plans include additional compliance options and custom data retention settings.',
  },
  {
    question: 'What if I manage chats with thousands of users?',
    answer: 'That\'s exactly the use case SynApp is built for. Bulk operations, automation rules, and tag-based filtering are designed specifically for high-volume Telegram environments.',
  },
  {
    question: 'Can I try SynApp before buying?',
    answer: 'Yes. We offer personalized demos for teams that want to see SynApp in action before committing. Book a demo through the contact page and our team will set up a session for you.',
  },
]
