export interface Feature {
  id: string
  title: string
  description: string
  detail: string
  screenshotLabel: string
  icon: string
}

export interface FeatureGroup {
  id: string
  title: string
  description: string
  features: Feature[]
}

export const featureGroups: FeatureGroup[] = [
  {
    id: 'chat-management',
    title: 'Chat Management',
    description: 'Connect and control all your Telegram groups, supergroups, and channels from one interface.',
    features: [
      {
        id: 'chat-table',
        title: 'Chat Overview Table',
        description: 'See all connected chats in one sortable, filterable table. Member counts, activity status, tags, and admin assignments — all visible at a glance.',
        detail: 'Search, sort, and filter across all your Telegram chats without switching between apps.',
        screenshotLabel: 'Chat table overview screenshot',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
      },
      {
        id: 'chat-details',
        title: 'Chat Detail View',
        description: 'Drill into any chat to see members, recent admin actions, tags applied, active rules, and pending invitations.',
        detail: 'Everything about a specific chat in one place — no Telegram interface required.',
        screenshotLabel: 'Chat detail view screenshot',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
      },
    ],
  },
  {
    id: 'user-management',
    title: 'User Management',
    description: 'Manage users across all your chats from a unified directory. No more jumping between groups.',
    features: [
      {
        id: 'user-directory',
        title: 'Unified User Directory',
        description: 'Every user across every connected chat in one searchable database. Find anyone, see their memberships, and act on their access instantly.',
        detail: 'The user directory is the operational core of SynApp — the missing layer above Telegram.',
        screenshotLabel: 'User directory screenshot',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      },
      {
        id: 'bulk-operations',
        title: 'Bulk Operations',
        description: 'Kick, mute, restrict, or move multiple users across multiple chats in a single operation. What used to take hours now takes seconds.',
        detail: 'Select users by tag, filter criteria, or manual selection — then apply actions in bulk.',
        screenshotLabel: 'Bulk operations screenshot',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      },
      {
        id: 'user-profile',
        title: 'User Profile View',
        description: 'See a user\'s full history — which chats they belong to, when they joined, what tags they carry, and any past admin actions taken on them.',
        detail: 'Full context before making any decision about a user.',
        screenshotLabel: 'User profile screen screenshot',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
      },
    ],
  },
  {
    id: 'tagging-system',
    title: 'Tagging System',
    description: 'Apply tags to users and chats to create meaningful segments. Filter, target, and operate on what actually matters.',
    features: [
      {
        id: 'user-tags',
        title: 'User Tagging',
        description: 'Apply custom tags to any user — "VIP", "Blocked", "Lead", "Staff", "Risk". Tags survive across chats and make bulk targeting precise.',
        detail: 'Tags are the backbone of everything — messaging, automation, filtering, and access decisions.',
        screenshotLabel: 'User tagging interface screenshot',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
      },
      {
        id: 'chat-tags',
        title: 'Chat Tagging',
        description: 'Tag chats by purpose, region, or status. Instantly filter your chat list to what you need.',
        detail: 'When you have 50+ chats, tags are how you stay organized.',
        screenshotLabel: 'Chat tagging screenshot',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
      },
    ],
  },
  {
    id: 'messaging',
    title: 'Messaging & Broadcasts',
    description: 'Send structured messages to targeted segments of users or across multiple chats at once.',
    features: [
      {
        id: 'broadcasts',
        title: 'Broadcast Messaging',
        description: 'Send announcements, updates, or alerts to all users, specific chats, or targeted tag segments simultaneously.',
        detail: 'Write once, reach many — without copy-pasting into each group manually.',
        screenshotLabel: 'Broadcast messaging screenshot',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.52 16.92z"/></svg>`,
      },
    ],
  },
  {
    id: 'rules-automation',
    title: 'Rules & Automation',
    description: 'Set up triggers and automated actions so your governance runs even when you\'re not watching.',
    features: [
      {
        id: 'rules',
        title: 'Automation Rules',
        description: 'Define "if this, then that" logic for your Telegram operations. Auto-tag users, restrict access, send messages, or flag activity — automatically.',
        detail: 'Rules reduce your team\'s manual load and enforce consistent governance across all chats.',
        screenshotLabel: 'Rules page screenshot',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      },
    ],
  },
  {
    id: 'invitations',
    title: 'Invitations',
    description: 'Control who gets into your chats through a managed invitation system instead of open links.',
    features: [
      {
        id: 'invite-management',
        title: 'Invitation Management',
        description: 'Create, revoke, and track invite links across all your chats from one dashboard. Control expiry, usage limits, and which chats each link grants access to.',
        detail: 'Know exactly how every user entered your ecosystem — and cut off bad actors cleanly.',
        screenshotLabel: 'Invitations dashboard screenshot',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
      },
    ],
  },
  {
    id: 'admin-management',
    title: 'Admin Management',
    description: 'Control who on your team can do what inside SynApp — and across your Telegram chats.',
    features: [
      {
        id: 'role-based-access',
        title: 'Role-Based Access',
        description: 'Assign different permission levels to team members. Not everyone needs the power to run bulk operations or modify automation rules.',
        detail: 'SynApp is built for teams, not just solo operators.',
        screenshotLabel: 'Admin roles management screenshot',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      },
    ],
  },
]

export const homepageFeatures = [
  {
    title: 'Bulk Operations',
    description: 'Act on dozens of users across multiple chats in seconds. Kick, mute, restrict — at scale.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  },
  {
    title: 'Tagging & Filtering',
    description: 'Tag users and chats to create segments you can act on instantly. No manual scanning.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  },
  {
    title: 'Broadcast Messaging',
    description: 'Send targeted messages to specific tags or all chats at once. Write once, send everywhere.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.52 16.92z"/></svg>`,
  },
  {
    title: 'Automation Rules',
    description: 'Set trigger-based rules to enforce governance automatically — even when your team is offline.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
  {
    title: 'User & Chat Visibility',
    description: 'See every user, every chat, every action in one unified dashboard. Nothing is hidden.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  },
  {
    title: 'Admin Control',
    description: 'Role-based access for your team. Invite collaborators with exactly the right permissions.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
]
