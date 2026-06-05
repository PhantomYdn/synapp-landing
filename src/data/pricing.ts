export interface PricingFeature {
  label: string
  basic: boolean | string
  business: boolean | string
  businessPlus: boolean | string
  businessPremium: boolean | string
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
    price: '$20',
    priceNote: 'per month',
    description: 'Get started with essential Telegram management for small teams.',
    highlighted: false,
    ctaLabel: 'Get Started',
    ctaLink: '/contact',
    features: [
      'Up to 5 Telegram chats',
      'User directory & search',
      'Basic tagging (up to 10 tags)',
      'Manual messaging tools',
      'Standard support',
      'Web dashboard access',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    price: '$50',
    priceNote: 'per month',
    description: 'Stronger operational tools for growing teams and communities.',
    highlighted: false,
    ctaLabel: 'Get Started',
    ctaLink: '/contact',
    features: [
      'Up to 25 Telegram chats',
      'Bulk user operations',
      'Advanced tagging & filtering',
      'Broadcast messaging',
      'Invitation management',
      'Automation rules (up to 10)',
      'Priority support',
    ],
  },
  {
    id: 'business-plus',
    name: 'Business Plus',
    price: '$300',
    priceNote: 'per month',
    description: 'SSO, advanced org features, and higher operational scale.',
    badge: 'Popular',
    badgeVariant: 'blue',
    highlighted: true,
    ctaLabel: 'Get Started',
    ctaLink: '/contact',
    features: [
      'Up to 100 Telegram chats',
      'SSO / SAML integration',
      'Unlimited tags & segments',
      'Advanced automation rules',
      'Role-based admin management',
      'Audit logs',
      'API access',
      'Priority support + onboarding',
    ],
  },
  {
    id: 'business-premium',
    name: 'Business Premium',
    price: '$500',
    priceNote: 'per month',
    description: 'Higher-end business tier with expanded limits and dedicated support.',
    badge: 'Premium',
    badgeVariant: 'pink',
    highlighted: false,
    ctaLabel: 'Get Started',
    ctaLink: '/contact',
    features: [
      'Unlimited Telegram chats',
      'Everything in Business Plus',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee',
      'Advanced analytics',
      'Custom automation workflows',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: null,
    priceNote: 'Custom pricing',
    description: 'Custom setup, advanced security, and tailored solutions for large organizations.',
    highlighted: false,
    ctaLabel: 'Contact Sales',
    ctaLink: '/contact',
    features: [
      'Everything in Business Premium',
      'Custom deployment options',
      'Advanced security controls',
      'Custom data retention',
      'Enterprise SSO & compliance',
      'Dedicated infrastructure',
      'White-glove onboarding',
      'Custom SLA',
    ],
  },
]

export const comparisonFeatures: PricingFeature[] = [
  { label: 'Telegram chats', basic: '5', business: '25', businessPlus: '100', businessPremium: 'Unlimited', enterprise: 'Unlimited' },
  { label: 'User management', basic: true, business: true, businessPlus: true, businessPremium: true, enterprise: true },
  { label: 'Bulk operations', basic: false, business: true, businessPlus: true, businessPremium: true, enterprise: true },
  { label: 'Tagging & filtering', basic: 'Basic', business: 'Advanced', businessPlus: 'Unlimited', businessPremium: 'Unlimited', enterprise: 'Unlimited' },
  { label: 'Broadcast messaging', basic: false, business: true, businessPlus: true, businessPremium: true, enterprise: true },
  { label: 'Automation rules', basic: false, business: '10 rules', businessPlus: 'Unlimited', businessPremium: 'Custom', enterprise: 'Custom' },
  { label: 'SSO / SAML', basic: false, business: false, businessPlus: true, businessPremium: true, enterprise: true },
  { label: 'API access', basic: false, business: false, businessPlus: true, businessPremium: true, enterprise: true },
  { label: 'Audit logs', basic: false, business: false, businessPlus: true, businessPremium: true, enterprise: true },
  { label: 'Dedicated account manager', basic: false, business: false, businessPlus: false, businessPremium: true, enterprise: true },
  { label: 'SLA guarantee', basic: false, business: false, businessPlus: false, businessPremium: true, enterprise: true },
  { label: 'Custom integrations', basic: false, business: false, businessPlus: false, businessPremium: true, enterprise: true },
  { label: 'Support', basic: 'Standard', business: 'Priority', businessPlus: 'Priority + onboarding', businessPremium: 'Dedicated', enterprise: 'White-glove' },
]

export const pricingFaqs = [
  {
    question: 'Is there a free trial?',
    answer: 'We offer a guided demo and an onboarding session to help you evaluate SynApp before committing. Reach out via the contact page to get started.',
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes. You can upgrade or change your plan at any time. Downgrades take effect at the end of the current billing period.',
  },
  {
    question: 'What counts as a Telegram chat?',
    answer: 'A Telegram chat is any group, supergroup, or channel connected to your SynApp workspace. Direct message threads are not counted.',
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
