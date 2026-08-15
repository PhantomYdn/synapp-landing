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
    description: 'Every chat the bot manages, in one table with bulk actions — then drill into any single chat for full control.',
    features: [
      {
        id: 'chats-table',
        title: 'Chats Table',
        description: 'Browse and bulk-manage every chat the bot is in. Select rows to add or remove tags, add or remove members, broadcast a message, or export the data — all applied to every selected chat at once.',
        detail: 'Search by name and filter by tag to narrow a large chat list before acting on it; your column layout is remembered.',
        screenshotLabel: 'Chats page — table with row selection, toolbar actions, and tag filter',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
      },
      {
        id: 'chat-details',
        title: 'Chat Details',
        description: 'Deep-dive into a single chat: a members table scoped to that chat, an internal note visible only to admins, the chat\'s public Telegram description, and full permission management for the bot and Telegram admins.',
        detail: 'The bot can only demote admins it has previously promoted, and can only grant permissions equal to or less than its own current set.',
        screenshotLabel: 'Chat details page — info card, member table, Bot Rights and Chat Admins dialogs',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
      },
    ],
  },
  {
    id: 'user-management',
    title: 'User & Access Management',
    description: 'One directory for every person SynApp knows — organize users in bulk, or open a single profile for the full picture.',
    features: [
      {
        id: 'users-table',
        title: 'Users Table',
        description: 'Tag or untag users in bulk, add or remove them from chats, message them directly, or pre-create a user record before they\'ve ever interacted with the bot — so they\'re linked automatically the moment they join.',
        detail: 'Deleting a user removes them from SynApp and from every chat they belonged to, in one action.',
        screenshotLabel: 'Users page — table, toolbar actions, and Add user dialog',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      },
      {
        id: 'user-details',
        title: 'User Details',
        description: 'A read-at-a-glance profile for one person: identity, Telegram username and ID, tags, every chat they belong to, and their current status.',
        detail: 'Confirm exactly who you\'re acting on before making any bulk or destructive change.',
        screenshotLabel: 'User details page — identity, tags, and chat memberships',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
      },
      {
        id: 'admins',
        title: 'Admin Access',
        description: 'Grant or revoke access to the SynApp admin console itself. Admins added here gain full management access on their next login.',
        detail: 'The super admin configured at deployment can\'t be removed from this page.',
        screenshotLabel: 'Admins page — list and Add admin dialog',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      },
    ],
  },
  {
    id: 'tags-automation',
    title: 'Tags & Automation',
    description: 'Tags are the glue between manual organization and automation — apply them once, then let filters and rules do the rest.',
    features: [
      {
        id: 'tags',
        title: 'Tags',
        description: 'Create, edit, and delete the labels used across chats and users, with a live count of how widely each tag is used so you can see what\'s active and what\'s dead weight.',
        detail: 'Deleting a tag removes it from everything it was attached to, and disables any rule relying solely on it.',
        screenshotLabel: 'Tags page — list with per-tag usage counts',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
      },
      {
        id: 'rules',
        title: 'Automation Rules',
        description: 'Build "when this trigger happens, apply this action to entities carrying these tags" logic, matched with an AND/OR condition. Preview exactly which chats or users a rule would affect before you save it.',
        detail: 'Toggle a rule off to pause it for testing without losing its configuration — no need to delete and rebuild.',
        screenshotLabel: 'Rules page — Add rule dialog with trigger, action, and tag-matching settings',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      },
    ],
  },
  {
    id: 'messaging',
    title: 'Messaging & Broadcasts',
    description: 'Send a Markdown-formatted message to a filtered set of chats or users — verified before it goes out.',
    features: [
      {
        id: 'broadcasts',
        title: 'Broadcast Messaging',
        description: 'Compose a message with the Telegram Markdown editor and an optional image, then send it to every selected chat or user at once. Test send delivers it to yourself first, so you can check the formatting before it reaches anyone else.',
        detail: 'Filter chats by tag first, so a broadcast reaches exactly the group you intended — nothing more.',
        screenshotLabel: 'Send message dialog — Markdown editor with Test send option',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.52 16.92z"/></svg>`,
      },
    ],
  },
  {
    id: 'invitations',
    title: 'Onboarding & Invitations',
    description: 'A single dashboard for every pending chat invitation, so no prospective member is lost.',
    features: [
      {
        id: 'invitations',
        title: 'Invitations Dashboard',
        description: 'Adding a user to a chat they haven\'t joined yet creates a tracked invitation here. Resend a nudge to slow responders, or revoke an invite to cancel it outright.',
        detail: 'As soon as someone starts the bot in Telegram, SynApp auto-resolves and links their pre-created record — no manual matching required.',
        screenshotLabel: 'Invitations page — pending invites with Resend and Revoke actions',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
      },
    ],
  },
  {
    id: 'data-sync',
    title: 'Data Sync & Background Tasks',
    description: 'Long-running jobs that keep SynApp\'s data reconciled with Telegram, run and monitored from one page.',
    features: [
      {
        id: 'tasks',
        title: 'Tasks',
        description: 'Run rescans for chats, users, and chat admins, recalculate membership totals, reapply system tags, or run the Check users presence wizard to verify who actually belongs where.',
        detail: 'Jobs run in the background — close the dialog and check back on the task\'s status whenever you like.',
        screenshotLabel: 'Tasks page — job list and Check users presence wizard',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>`,
      },
    ],
  },
  {
    id: 'monitoring-security',
    title: 'Monitoring & Enterprise Security',
    description: 'Keep tabs on application health, and plug SynApp into your company\'s identity stack.',
    features: [
      {
        id: 'error-logs',
        title: 'Error Logs',
        description: 'Filter and search errors by time range, open any error for full detail, mark individual or selected errors resolved, and import or export error data for sharing.',
        detail: 'Delete resolved errors to clean up once you\'re done — this action can\'t be undone.',
        screenshotLabel: 'Error Logs page — statistics and filterable error table',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
      },
      {
        id: 'sso-scim',
        title: 'SSO & SCIM',
        description: 'Enable SAML single sign-on and auto-configure it from an identity-provider metadata URL, or enter the IdP details manually. Turn on SCIM provisioning so your identity provider creates users automatically.',
        detail: 'The bot\'s /validate command uses your tag configuration to identify team members and flag blacklisted users on the spot, right inside Telegram.',
        screenshotLabel: 'Settings page — SAML SSO configuration and SCIM provisioning',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
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