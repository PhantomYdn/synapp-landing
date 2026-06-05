<template>
  <section class="section features-teaser" aria-labelledby="features-teaser-heading">
    <div class="container">
      <AppSectionIntro
        badge="Core Capabilities"
        title="Built for Real Telegram Operations"
        sub="The tools you've been missing — purpose-built for teams managing Telegram at scale."
        center
        id="features-teaser-heading"
      />

      <div class="features-grid">
        <FeatureCard
          v-for="(feature, i) in homepageFeatures"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
          :delay="(i % 3) + 1"
        />
      </div>

      <div class="features-teaser__cta reveal">
        <RouterLink to="/features" class="cta-btn">
          See All Features
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppSectionIntro from '@/components/ui/AppSectionIntro.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'
import { homepageFeatures } from '@/data/features'
</script>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-bottom: var(--space-12);
}

@media (min-width: 640px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.features-teaser__cta {
  text-align: center;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: 600;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: transparent;
  transition: all var(--transition-base);
}

.cta-btn svg {
  width: 14px;
  height: 14px;
  transition: transform var(--transition-fast);
}

.cta-btn:hover {
  color: var(--color-white);
  border-color: var(--color-border-strong);
  transform: translateY(-1px);
}

.cta-btn:hover svg {
  transform: translateX(3px);
}
</style>
