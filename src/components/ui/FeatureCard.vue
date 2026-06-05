<template>
  <div class="feature-card reveal" :class="[`reveal--delay-${delay}`]">
    <div class="feature-card__icon" v-html="icon" aria-hidden="true"></div>
    <div class="feature-card__body">
      <h3 class="feature-card__title">{{ title }}</h3>
      <p class="feature-card__desc">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description: string
    icon: string
    delay?: number
  }>(),
  { delay: 1 }
)
</script>

<style scoped>
.feature-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  transition: border-color var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base);
  cursor: default;
}

.feature-card:hover {
  border-color: var(--color-border-strong);
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(15,165,233,0.07);
}

.feature-card__icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 165, 233, 0.1);
  border: 1px solid rgba(15, 165, 233, 0.18);
  border-radius: var(--radius-md);
  color: var(--color-accent-blue);
  flex-shrink: 0;
}

.feature-card__icon :deep(svg) {
  width: 22px;
  height: 22px;
}

.feature-card__title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-white);
  letter-spacing: -0.02em;
}

.feature-card__desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.65;
}
</style>
