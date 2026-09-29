export interface PricingFeature {
  label: string
  basic: boolean | string
  business: boolean | string
  businessPro: boolean | string
  enterprise: boolean | string
}

export interface PricingPlan {
  id: string
  name: string
  price: string | null
  priceNote: string
  description: string
  badge?: string
  badgeVariant?: 'blue' | 'pink'
  highlighted: boolean
  ctaLabel: string
  ctaLink: string
  features: string[]
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$200',
    priceNote: '',
    description: 'Perfect for small teams getting started.',
    highlighted: false,
    ctaLabel: 'Get Started',
    ctaLink: '/contact',
    features: [
      'Up to 50 groups/channels',
      'Group & Channel Manager',
      'Cloud-hosted (SaaS)',
      '14-day free trial',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    price: '$700',
    priceNote: '',
    description: 'Most popular for growing teams.',
    badge: 'Most Popular',
    badgeVariant: 'blue',
    highlighted: true,
    ctaLabel: 'Start 7-Day Trial',
    ctaLink: '/contact',
    features: [
      'Up to 100 groups/channels',
      'Group & Channel Manager',
      'Cloud-hosted (SaaS)',
      'Single Sign-On (SSO)',
      '7-day free trial',
    ],
  },
  {
    id: 'business-pro',
    name: 'Business Pro',
    price: '$950',
    priceNote: '',
    description: 'For teams needing full identity + CRM traceability.',
    highlighted: false,
    ctaLabel: 'Start Trial or Talk to Sales',
    ctaLink: '/contact',
    features: [
      'Up to 200 groups/channels (Unlimited on custom plans)',
      'Group & Channel Manager',
      'Cloud-hosted (SaaS)',
      'Single Sign-On (SSO)',
      'CRM Integration (HubSpot / Salesforce)',
      '14-day free trial',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: null,
    priceNote: '',
    description: 'Full control for large organizations & regulated environments.',
    highlighted: false,
    ctaLabel: 'Contact Sales',
    ctaLink: '/contact',
    features: [
      'Unlimited groups/channels',
      'Group & Channel Manager',
      'SaaS or On-Premise deployment',
      'Single Sign-On (SSO)',
      'CRM Integration',
      'Statistics & Analytics',
      'AI Insights',
      'Dedicated support & compliance assistance (ISO 27001 / SOC 2 alignment)',
    ],
  },
]

export const comparisonFeatures: PricingFeature[] = [
  { label: 'Groups/Channels', basic: '50', business: '100', businessPro: '200 (Unlimited on custom)', enterprise: 'Unlimited' },
  { label: 'Group & Channel Manager', basic: true, business: true, businessPro: true, enterprise: true },
  { label: 'Deployment', basic: 'Cloud-hosted (SaaS)', business: 'Cloud-hosted (SaaS)', businessPro: 'Cloud-hosted (SaaS)', enterprise: 'SaaS or On-Premise' },
  { label: 'Single Sign-On (SSO)', basic: false, business: true, businessPro: true, enterprise: true },
  { label: 'CRM Integration', basic: false, business: false, businessPro: 'HubSpot / Salesforce', enterprise: true },
  { label: 'Statistics & Analytics', basic: false, business: false, businessPro: false, enterprise: true },
  { label: 'AI Insights', basic: false, business: false, businessPro: false, enterprise: true },
  { label: 'Free trial', basic: '14-day', business: '7-day', businessPro: '14-day', enterprise: 'Contact sales' },
  { label: 'Support', basic: 'Standard', business: 'Priority', businessPro: 'Priority', enterprise: 'Dedicated support & compliance assistance (ISO 27001 / SOC 2)' },
]

export const pricingFaqs = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes. Basic and Business Pro include a 14-day free trial, and Business includes a 7-day free trial. Enterprise plans are custom — contact our sales team to get started.',
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes. You can upgrade or change your plan at any time. Downgrades take effect at the end of the current billing period.',
  },
  {
    question: 'What counts as a group or channel?',
    answer: 'A group or channel is any Telegram group, supergroup, or channel connected to your SynApp workspace. Direct message threads are not counted.',
  },
  {
    question: 'Do you support annual billing?',
    answer: 'Annual billing is available and includes a discount. Contact our team for details and annual pricing.',
  },
  {
    question: 'How does Enterprise pricing work?',
    answer: 'Enterprise pricing is fully custom based on your scale, security needs, deployment preferences, and support requirements. Contact our sales team for a tailored quote.',
  },
]