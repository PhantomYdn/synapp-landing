export interface PageMeta {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterCard?: string
}

const BASE_TITLE = 'SynApp'
const BASE_OG_IMAGE = '/og-image.png'
const TWITTER_CARD = 'summary_large_image'

export const pageMetas: Record<string, PageMeta> = {
  home: {
    title: 'SynApp — Telegram Management at Scale',
    description:
      'SynApp is the enterprise Telegram management platform for teams that need to control chats, users, permissions, and automation from one dashboard.',
    ogTitle: 'SynApp — Telegram Management at Scale',
    ogDescription:
      'Control every Telegram chat, user, and operation from one platform. Built for businesses, community teams, and Web3 operators.',
    ogImage: BASE_OG_IMAGE,
    twitterCard: TWITTER_CARD,
  },
  features: {
    title: `Features — ${BASE_TITLE}`,
    description:
      'Explore SynApp\'s full feature set: chat management, user directory, bulk operations, tagging, messaging, automation rules, invitations, and admin controls.',
    ogTitle: 'Everything You Need to Run Telegram at Scale',
    ogDescription:
      'A deep look at SynApp\'s feature set — from bulk user operations to automation rules and chat governance.',
    ogImage: BASE_OG_IMAGE,
    twitterCard: TWITTER_CARD,
  },
  pricing: {
    title: `Pricing — ${BASE_TITLE}`,
    description:
      'Simple, transparent pricing for every scale. From Basic to Enterprise — pick the SynApp plan that fits your team.',
    ogTitle: 'SynApp Pricing — Simple & Transparent',
    ogDescription:
      'Plans starting at $20/mo. No hidden fees. Enterprise pricing available for custom deployments.',
    ogImage: BASE_OG_IMAGE,
    twitterCard: TWITTER_CARD,
  },
  contact: {
    title: `Contact & Demo — ${BASE_TITLE}`,
    description:
      'Book a personalized SynApp demo or reach out to our team. We respond within one business day.',
    ogTitle: 'Book a SynApp Demo',
    ogDescription:
      'See SynApp in action. Talk to our team about your Telegram setup and how we can help.',
    ogImage: BASE_OG_IMAGE,
    twitterCard: TWITTER_CARD,
  },
  privacy: {
    title: `Privacy Policy — ${BASE_TITLE}`,
    description: 'SynApp privacy policy — how we collect, use, and protect your data.',
    ogTitle: 'Privacy Policy — SynApp',
    ogDescription: 'SynApp privacy policy.',
    ogImage: BASE_OG_IMAGE,
    twitterCard: TWITTER_CARD,
  },
}

export function applyPageMeta(meta: PageMeta): void {
  // Title
  document.title = meta.title

  // Helper to set or create a meta tag
  function setMeta(selector: string, attr: string, value: string) {
    let el = document.querySelector<HTMLMetaElement>(selector)
    if (!el) {
      el = document.createElement('meta')
      document.head.appendChild(el)
    }
    el.setAttribute(attr, value)
  }

  // Description
  setMeta('meta[name="description"]', 'content', meta.description)
  setMeta('meta[name="description"]', 'name', 'description')

  // OG
  if (meta.ogTitle) {
    setMeta('meta[property="og:title"]', 'property', 'og:title')
    setMeta('meta[property="og:title"]', 'content', meta.ogTitle)
  }
  if (meta.ogDescription) {
    setMeta('meta[property="og:description"]', 'property', 'og:description')
    setMeta('meta[property="og:description"]', 'content', meta.ogDescription)
  }
  if (meta.ogImage) {
    setMeta('meta[property="og:image"]', 'property', 'og:image')
    setMeta('meta[property="og:image"]', 'content', meta.ogImage)
  }

  // Twitter
  if (meta.twitterCard) {
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card')
    setMeta('meta[name="twitter:card"]', 'content', meta.twitterCard)
  }
  if (meta.ogTitle) {
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title')
    setMeta('meta[name="twitter:title"]', 'content', meta.ogTitle)
  }
  if (meta.ogDescription) {
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description')
    setMeta('meta[name="twitter:description"]', 'content', meta.ogDescription)
  }
}
