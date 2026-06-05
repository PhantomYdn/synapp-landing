<template>
  <section class="section how-it-works" aria-labelledby="how-heading">
    <div class="container">
      <AppSectionIntro
        badge="How It Works"
        title="Up and Running in Minutes"
        sub="Getting started with SynApp is straightforward. No complex integration. No developer required."
        center
        id="how-heading"
      />

      <div class="steps">
        <div v-for="(step, index) in steps" :key="step.title" class="step reveal" :class="`reveal--delay-${index + 1}`">
          <div class="step__number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</div>
          <div class="step__connector" v-if="index < steps.length - 1" aria-hidden="true"></div>
          <div class="step__icon" aria-hidden="true" v-html="step.icon"></div>
          <h3 class="step__title">{{ step.title }}</h3>
          <p class="step__desc">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppSectionIntro from '@/components/ui/AppSectionIntro.vue'

const steps = [
  {
    title: 'Connect SynApp',
    description: 'Link SynApp to your Telegram account using our guided onboarding. Takes less than 10 minutes.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  },
  {
    title: 'Import Chats & Users',
    description: 'SynApp automatically imports your connected chats, groups, and user data into a unified directory.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>`,
  },
  {
    title: 'Organize with Tags & Filters',
    description: 'Tag users and chats, create segments, and set up filters that reflect how your operation actually works.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  },
  {
    title: 'Operate at Scale',
    description: 'Run bulk operations, set automation rules, send broadcasts, and manage access — all from one dashboard.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
]
</script>

<style scoped>
.steps {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  position: relative;
}

@media (min-width: 768px) {
  .steps {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);
  }
}

@media (min-width: 1024px) {
  .steps {
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }
}

.step {
  position: relative;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

@media (min-width: 1024px) {
  .step {
    padding: var(--space-6) var(--space-8);
    border-right: 1px solid var(--color-border);
  }

  .step:last-child {
    border-right: none;
  }
}

.step__number {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: 700;
  color: rgba(255,255,255,0.05);
  letter-spacing: -0.04em;
  line-height: 1;
  position: absolute;
  top: var(--space-4);
  right: var(--space-6);
}

.step__connector {
  display: none;
}

.step__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 165, 233, 0.08);
  border: 1px solid rgba(15, 165, 233, 0.16);
  border-radius: var(--radius-md);
  color: var(--color-accent-blue);
}

.step__icon :deep(svg) {
  width: 22px;
  height: 22px;
}

.step__title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-white);
  letter-spacing: -0.02em;
}

.step__desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.65;
}
</style>
