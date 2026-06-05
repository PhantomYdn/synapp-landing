<template>
  <div class="glass-card" :class="{ 'glass-card--hoverable': hoverable, 'glass-card--active': active }">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ hoverable?: boolean; active?: boolean }>(),
  { hoverable: false, active: false }
)
</script>

<style scoped>
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: var(--glass-border);
  box-shadow: var(--glass-shadow);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);
}

.glass-card--hoverable:hover {
  border-color: var(--color-border-strong);
  box-shadow: 0 16px 56px rgba(0, 0, 0, 0.36), 0 0 0 1px rgba(15, 165, 233, 0.06);
  transform: translateY(-2px);
}

.glass-card--active {
  border-color: rgba(15, 165, 233, 0.28);
  box-shadow: 0 0 0 1px rgba(15, 165, 233, 0.12), var(--shadow-glow-blue);
}
</style>
