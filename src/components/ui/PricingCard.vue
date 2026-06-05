<template>
  <div
    class="pricing-card reveal"
    :class="{ 'pricing-card--highlighted': highlighted, [`reveal--delay-${delay}`]: true }"
  >
    <div v-if="badge" class="pricing-card__badge">
      <AppBadge :variant="badgeVariant || 'blue'">{{ badge }}</AppBadge>
    </div>

    <div class="pricing-card__header">
      <h3 class="pricing-card__name">{{ name }}</h3>
      <div class="pricing-card__price-row">
        <span v-if="price" class="pricing-card__price">{{ price }}</span>
        <span v-else class="pricing-card__price pricing-card__price--custom">Custom</span>
        <span class="pricing-card__period">{{ priceNote }}</span>
      </div>
      <p class="pricing-card__desc">{{ description }}</p>
    </div>

    <ul class="pricing-card__features" aria-label="Plan features">
      <li v-for="feature in features" :key="feature" class="pricing-card__feature">
        <svg class="feature-check" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="7.25" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
          <path d="M5 8l2.5 2.5L11 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {{ feature }}
      </li>
    </ul>

    <RouterLink :to="ctaLink" class="pricing-card__cta" :class="{ 'pricing-card__cta--primary': highlighted }">
      {{ ctaLabel }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import AppBadge from './AppBadge.vue'

withDefaults(
  defineProps<{
    name: string
    price: string | null
    priceNote: string
    description: string
    features: string[]
    badge?: string
    badgeVariant?: 'blue' | 'pink'
    highlighted: boolean
    ctaLabel: string
    ctaLink: string
    delay?: number
  }>(),
  { delay: 1 }
)
</script>

<style scoped>
.pricing-card {
  position: relative;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);
}

.pricing-card:hover {
  border-color: var(--color-border-strong);
  transform: translateY(-3px);
}

.pricing-card--highlighted {
  border-color: rgba(15, 165, 233, 0.35);
  box-shadow: 0 0 0 1px rgba(15, 165, 233, 0.12), 0 24px 64px rgba(0,0,0,0.4), var(--shadow-glow-blue);
}

.pricing-card--highlighted:hover {
  border-color: rgba(15, 165, 233, 0.5);
}

.pricing-card__badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
}

.pricing-card__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.pricing-card__name {
  font-size: var(--text-xl);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-white);
}

.pricing-card__price-row {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
}

.pricing-card__price {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: -0.04em;
  line-height: 1;
}

.pricing-card__price--custom {
  font-size: var(--text-3xl);
  color: var(--color-accent-blue);
}

.pricing-card__period {
  font-size: var(--text-sm);
  color: var(--color-text-faint);
}

.pricing-card__desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
}

.pricing-card__features {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex: 1;
}

.pricing-card__feature {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.5;
}

.feature-check {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-accent-blue);
}

.pricing-card--highlighted .feature-check {
  color: var(--color-accent-blue);
}

.pricing-card__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: var(--text-sm);
  text-decoration: none;
  transition: all var(--transition-base);
  border: 1px solid var(--color-border-strong);
  color: var(--color-white);
  background: var(--color-surface-2);
}

.pricing-card__cta:hover {
  border-color: rgba(255,255,255,0.22);
  background: rgba(20,29,53,0.9);
  transform: translateY(-1px);
}

.pricing-card__cta--primary {
  background: var(--color-accent-blue);
  border-color: transparent;
  color: #fff;
}

.pricing-card__cta--primary:hover {
  background: #0c94d1;
  border-color: transparent;
  box-shadow: 0 6px 24px rgba(15,165,233,0.4);
}
</style>
