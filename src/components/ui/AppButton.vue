<template>
  <component
    :is="tag"
    class="app-btn"
    :class="[`app-btn--${variant}`, `app-btn--${size}`, { 'app-btn--full': full }]"
    v-bind="attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost' | 'pink'
    size?: 'sm' | 'md' | 'lg'
    full?: boolean
    href?: string
    to?: string
  }>(),
  {
    variant: 'primary',
    size: 'md',
    full: false,
  }
)

const rawAttrs = useAttrs()

const tag = computed(() => {
  if (props.to) return 'RouterLink'
  if (props.href) return 'a'
  return 'button'
})

const attrs = computed(() => {
  const base: Record<string, unknown> = { ...rawAttrs }
  if (props.to) base.to = props.to
  if (props.href) base.href = props.href
  return base
})
</script>

<style scoped>
.app-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

/* Sizes */
.app-btn--sm { padding: 0.5rem 1.125rem; font-size: var(--text-sm); }
.app-btn--md { padding: 0.75rem 1.5rem; font-size: var(--text-base); }
.app-btn--lg { padding: 0.9375rem 2rem; font-size: var(--text-md); }

.app-btn--full { width: 100%; }

/* Variants */
.app-btn--primary {
  background: var(--color-accent-blue);
  color: #fff;
}
.app-btn--primary:hover {
  background: #0c94d1;
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(15, 165, 233, 0.4);
}

.app-btn--pink {
  background: var(--color-accent-pink);
  color: #fff;
}
.app-btn--pink:hover {
  background: #d63d88;
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(236, 71, 153, 0.4);
}

.app-btn--secondary {
  background: var(--color-surface-2);
  color: var(--color-white);
  border: 1px solid var(--color-border-strong);
}
.app-btn--secondary:hover {
  background: rgba(20, 29, 53, 0.9);
  border-color: rgba(255,255,255,0.22);
  transform: translateY(-1px);
}

.app-btn--ghost {
  background: transparent;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
}
.app-btn--ghost:hover {
  color: var(--color-white);
  border-color: var(--color-border-strong);
}

.app-btn:active {
  transform: translateY(0);
}
</style>
