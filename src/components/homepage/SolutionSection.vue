<template>
  <section class="section solution-section" aria-labelledby="solution-heading">
    <div class="container">
      <div class="solution-layout">
        <div class="solution-content">
          <AppSectionIntro
            badge="The Solution"
            title="One Platform. Total Control."
            sub="SynApp replaces scattered Telegram admin work with a structured operations platform. Every chat, every user, every action — managed from one place."
            id="solution-heading"
          />

          <ul class="solution-list" aria-label="Key solution benefits">
            <li v-for="point in points" :key="point.title" class="solution-point reveal">
              <div class="solution-point__check" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 8l3.5 3.5L13 4.5"/>
                </svg>
              </div>
              <div>
                <strong class="solution-point__title">{{ point.title }}</strong>
                <p class="solution-point__desc">{{ point.description }}</p>
              </div>
            </li>
          </ul>

          <div class="solution-cta reveal reveal--delay-4">
            <RouterLink to="/features" class="solution-link">
              See all features
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </RouterLink>
          </div>
        </div>

        <div class="solution-media reveal reveal--delay-2">
          <ScreenshotPlaceholder label="Solution overview — SynApp dashboard" ratio="4/3" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppSectionIntro from '@/components/ui/AppSectionIntro.vue'
import ScreenshotPlaceholder from '@/components/ui/ScreenshotPlaceholder.vue'

const points = [
  { title: 'One control center', description: 'All your chats and users in a single unified interface.' },
  { title: 'Operations at scale', description: 'Bulk actions that would take hours now take seconds.' },
  { title: 'Less manual work', description: 'Automation rules handle repetitive governance automatically.' },
  { title: 'Full visibility', description: 'See exactly who is in what chat and why — at any time.' },
]
</script>

<style scoped>
.solution-section {
  position: relative;
}

.solution-layout {
  display: grid;
  gap: clamp(3rem, 6vw, 5rem);
  align-items: center;
}

@media (min-width: 1024px) {
  .solution-layout {
    grid-template-columns: 1fr 1fr;
  }
}

.solution-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.solution-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.solution-point {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
}

.solution-point__check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(15, 165, 233, 0.12);
  border: 1px solid rgba(15, 165, 233, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent-blue);
  flex-shrink: 0;
  margin-top: 2px;
}

.solution-point__check svg {
  width: 10px;
  height: 10px;
}

.solution-point__title {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: var(--space-1);
  letter-spacing: -0.01em;
}

.solution-point__desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
}

.solution-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-accent-blue);
  font-weight: 600;
  font-size: var(--text-sm);
  text-decoration: none;
  transition: gap var(--transition-fast), color var(--transition-fast);
}

.solution-link svg {
  width: 14px;
  height: 14px;
  transition: transform var(--transition-fast);
}

.solution-link:hover {
  color: var(--color-white);
}

.solution-link:hover svg {
  transform: translateX(3px);
}
</style>
