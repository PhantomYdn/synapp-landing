<template>
  <span class="app-badge" :class="`app-badge--${variant}`">
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ variant?: 'blue' | 'pink' | 'neutral' }>(),
  { variant: 'blue' }
)
</script>

<style scoped>
.app-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 600;
  font-family: var(--font-heading);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.app-badge--blue {
  background: rgba(15, 165, 233, 0.12);
  color: var(--color-accent-blue);
  border: 1px solid rgba(15, 165, 233, 0.22);
}

.app-badge--pink {
  background: rgba(236, 71, 153, 0.12);
  color: var(--color-accent-pink);
  border: 1px solid rgba(236, 71, 153, 0.22);
}

.app-badge--neutral {
  background: var(--color-surface-2);
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
}
</style>
