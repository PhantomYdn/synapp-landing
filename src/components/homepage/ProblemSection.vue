<template>
  <section class="section problem-section" aria-labelledby="problem-heading">
    <div class="container">
      <AppSectionIntro
        badge="The Problem"
        badge-variant="pink"
        id="problem-heading"
        title="Telegram Doesn't Scale Natively"
        sub="When you're managing dozens of chats and thousands of users, the gaps become operational liabilities."
        center
      />

      <div class="problem-grid">
        <div
          v-for="(pain, i) in painPoints"
          :key="pain.title"
          class="pain-card reveal"
          :class="`reveal--delay-${(i % 3) + 1}`"
        >
          <div class="pain-card__icon" aria-hidden="true" v-html="pain.icon"></div>
          <h3 class="pain-card__title">{{ pain.title }}</h3>
          <p class="pain-card__desc">{{ pain.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppSectionIntro from '@/components/ui/AppSectionIntro.vue'

const painPoints = [
  {
    title: 'Manual User Management',
    description: 'Kicking, muting, or reviewing users one by one across multiple groups. Hours of work for what should take minutes.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  },
  {
    title: 'No Access Governance',
    description: 'No way to track who has access to what, who invited them, or when they joined. Access control is a guessing game.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  },
  {
    title: 'Orphaned Access',
    description: 'People who should have been removed months ago are still in your chats. There\'s no clean way to audit it.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/></svg>`,
  },
  {
    title: 'Moderator Overload',
    description: 'Your team is buried in repetitive moderation tasks that eat into productive hours every single day.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/></svg>`,
  },
  {
    title: 'Poor Visibility',
    description: 'No dashboard. No reporting. No way to know the current state of your Telegram ecosystem without manually checking each group.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
  },
  {
    title: 'Inconsistent Communication',
    description: 'Sending announcements to multiple groups means copy-pasting manually or relying on each moderator to forward messages correctly.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/></svg>`,
  },
]
</script>

<style scoped>
.problem-section {
  background: linear-gradient(180deg, transparent 0%, rgba(20, 29, 53, 0.3) 50%, transparent 100%);
}

.problem-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .problem-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .problem-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pain-card {
  padding: var(--space-6);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: rgba(16, 23, 43, 0.4);
  transition: border-color var(--transition-base), background var(--transition-base);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.pain-card:hover {
  border-color: var(--color-border-strong);
  background: rgba(20, 29, 53, 0.6);
}

.pain-card__icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(236, 71, 153, 0.08);
  border: 1px solid rgba(236, 71, 153, 0.15);
  border-radius: var(--radius-md);
  color: var(--color-accent-pink);
  flex-shrink: 0;
}

.pain-card__icon :deep(svg) {
  width: 20px;
  height: 20px;
}

.pain-card__title {
  font-size: var(--text-md);
  font-weight: 600;
  color: var(--color-white);
  letter-spacing: -0.01em;
}

.pain-card__desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.65;
}
</style>
