import { defineConfig } from 'vitepress'

// Docs are served under https://<site>/docs/ alongside the main Vue landing site.
// The static output is emitted into the main app's dist/docs so nginx serves both.
export default defineConfig({
  title: 'SynApp Docs',
  description: 'Documentation for SynApp — manage your Telegram groups and channels from one console.',
  lang: 'en-US',

  base: '/docs/',
  outDir: '../dist/docs',

  cleanUrls: false,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],

  themeConfig: {
    logo: '/full_white.svg',

    nav: [
      { text: 'User Guide', link: '/user_guide' },
      { text: 'Use Cases', link: '/use_cases' },
      { text: '← Back to site', link: 'https://static.diodlab.xyz' },
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [{ text: 'Introduction', link: '/' }],
      },
      {
        text: 'User Guide',
        link: '/user_guide',
        collapsed: false,
        items: [
          { text: 'Core concepts', link: '/user_guide#core-concepts' },
          { text: 'Signing in', link: '/user_guide#signing-in' },
          { text: 'The interface at a glance', link: '/user_guide#the-interface-at-a-glance' },
          { text: 'Page overview', link: '/user_guide#page-overview' },
          { text: 'Chats', link: '/user_guide#chats' },
          { text: 'Chat details', link: '/user_guide#chat-details' },
          { text: 'Users', link: '/user_guide#users' },
          { text: 'User details', link: '/user_guide#user-details' },
          { text: 'Admins', link: '/user_guide#admins' },
          { text: 'Rules', link: '/user_guide#rules' },
          { text: 'Tags', link: '/user_guide#tags' },
          { text: 'Invitations', link: '/user_guide#invitations' },
          { text: 'Tasks', link: '/user_guide#tasks' },
          { text: 'Error logs', link: '/user_guide#error-logs' },
          { text: 'Settings', link: '/user_guide#settings' },
          { text: 'Working with tables', link: '/user_guide#working-with-tables-shared-features' },
        ],
      },
      {
        text: 'Use Cases & Walkthroughs',
        link: '/use_cases',
        collapsed: false,
        items: [
          { text: 'Onboarding a new chat', link: '/use_cases#1-onboarding-a-new-chat-into-synapp' },
          { text: 'Mass-inviting a team', link: '/use_cases#2-mass-inviting-a-new-team-to-their-chats' },
          { text: 'Broadcasting safely', link: '/use_cases#3-broadcasting-an-announcement-to-many-chats-safely' },
          { text: 'Offboarding an employee', link: '/use_cases#4-offboarding-a-departing-employee' },
          { text: 'Automating with rules', link: '/use_cases#5-automating-access-with-tags-and-rules' },
          { text: 'Auditing chat membership', link: '/use_cases#6-auditing-who-is-actually-in-your-chats' },
          { text: 'Validating from Telegram', link: '/use_cases#7-validating-team-membership-from-inside-telegram' },
        ],
      },
    ],

    socialLinks: [],

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
    },
  },
})
