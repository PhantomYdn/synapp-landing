/**
 * Asset configuration.
 * Centralizes asset URLs so they can be swapped without touching components.
 */

export const assetConfig = {
  // Logo
  logo: '/src/assets/logo/synapp-logo.svg',

  // OG image (in /public)
  ogImage: '/og-image.png',

  // Demo video
  // Set videoUrl to a YouTube embed URL when the demo is ready.
  // e.g. 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
  videoUrl: null as string | null,
  videoThumbnail: null as string | null,

  // Screenshots
  // Replace these null values with real image paths once assets are ready.
  screenshots: {
    chatTable: null as string | null,
    chatDetail: null as string | null,
    userDirectory: null as string | null,
    userProfile: null as string | null,
    bulkOperations: null as string | null,
    rules: null as string | null,
    invitations: null as string | null,
    adminRoles: null as string | null,
    solutionOverview: null as string | null,
  },
}
