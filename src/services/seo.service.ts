import { SITE_URL, SITE_NAME, SOCIAL_IMAGE } from '../site'

export interface PageMeta {
  path: string
  noindex?: boolean
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterCard?: string
}

const BASE_TITLE = 'SynApp'
const BASE_OG_IMAGE = SOCIAL_IMAGE
const TWITTER_CARD = 'summary_large_image'

export const pageMetas: Record<string, PageMeta> = {
  home: {
    path: '/',
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
    path: '/features/',
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
    path: '/pricing/',
    title: `Pricing — ${BASE_TITLE}`,
    description:
      'Simple, transparent pricing for every scale. From Basic to Enterprise — pick the SynApp plan that fits your team.',
    ogTitle: 'SynApp Pricing — Simple & Transparent',
    ogDescription:
      'Compare SynApp plans for your team. Enterprise pricing is available for custom deployments.',
    ogImage: BASE_OG_IMAGE,
    twitterCard: TWITTER_CARD,
  },
  contact: {
    path: '/contact/',
    title: `Contact & Demo — ${BASE_TITLE}`,
    description:
      'Book a personalized SynApp demo or reach out to our team. We respond within one business day.',
    ogTitle: 'Book a SynApp Demo',
    ogDescription:
      'See SynApp in action. Talk to our team about your Telegram setup and how we can help.',
    ogImage: BASE_OG_IMAGE,
    twitterCard: TWITTER_CARD,
  },
  notFound: {
    path: '/404.html',
    noindex: true,
    title: 'Page not found — SynApp',
    description: 'This page does not exist. Visit the SynApp homepage or documentation.'
  },
  privacy: {
    path: '/privacy-policy/',
    title: `Privacy Policy — ${BASE_TITLE}`,
    description: 'SynApp privacy policy — how we collect, use, and protect your data.',
    ogTitle: 'Privacy Policy — SynApp',
    ogDescription: 'SynApp privacy policy.',
    ogImage: BASE_OG_IMAGE,
    twitterCard: TWITTER_CARD,
  },
}

export function metaTags(meta: PageMeta): Record<string, string> {
  return {
    description: meta.description,
    'og:type': 'website',
    'og:site_name': SITE_NAME,
    'og:locale': 'en_US',
    'og:title': meta.ogTitle || meta.title,
    'og:description': meta.ogDescription || meta.description,
    'og:url': new URL(meta.path, SITE_URL).href,
    'og:image': meta.ogImage || SOCIAL_IMAGE,
    'og:image:alt': 'SynApp — Telegram management platform',
    'og:image:width': '1200',
    'og:image:height': '446',
    'twitter:card': meta.twitterCard || TWITTER_CARD,
    'twitter:title': meta.ogTitle || meta.title,
    'twitter:description': meta.ogDescription || meta.description,
    'twitter:image': meta.ogImage || SOCIAL_IMAGE,
    'twitter:image:alt': 'SynApp — Telegram management platform',
    robots: meta.noindex ? 'noindex, follow' : 'index, follow'
  }
}

export function structuredData(meta: PageMeta) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: SOCIAL_IMAGE,
        sameAs: ['https://x.com/SynAppX', 'https://www.linkedin.com/company/synappus/']
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        publisher: { '@id': `${SITE_URL}/#organization` }
      },
      {
        '@type': 'WebPage',
        name: meta.title,
        description: meta.description,
        url: new URL(meta.path, SITE_URL).href,
        isPartOf: { '@id': `${SITE_URL}/#website` }
      }
    ]
  }
}

export function applyPageMeta(meta: PageMeta): void {
  document.title = meta.title
  for (const [key, content] of Object.entries(metaTags(meta))) {
    const attribute = key.startsWith('og:') ? 'property' : 'name'
    let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attribute, key)
      document.head.appendChild(element)
    }
    element.content = content
  }

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (meta.noindex) {
    canonical?.remove()
  } else {
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = new URL(meta.path, SITE_URL).href
  }

  let schema = document.head.querySelector<HTMLScriptElement>('#page-schema')
  if (meta.noindex) {
    schema?.remove()
  } else {
    if (!schema) {
      schema = document.createElement('script')
      schema.id = 'page-schema'
      schema.type = 'application/ld+json'
      document.head.appendChild(schema)
    }
    schema.textContent = JSON.stringify(structuredData(meta))
  }
}
