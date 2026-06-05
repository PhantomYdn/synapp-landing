<template>
  <div class="screenshot-placeholder" :style="{ aspectRatio: ratio }">
    <img
      v-if="src"
      :src="src"
      :alt="label"
      loading="lazy"
      class="screenshot-img"
    />
    <div v-else class="screenshot-placeholder__inner">
      <svg class="screenshot-placeholder__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span class="screenshot-placeholder__label">{{ label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    src?: string | null
    ratio?: string
  }>(),
  { src: null, ratio: '16/9' }
)
</script>

<style scoped>
.screenshot-placeholder {
  width: 100%;
  background: var(--color-surface);
  border: 1px dashed var(--color-border-strong);
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
}

.screenshot-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.screenshot-placeholder__inner {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-6);
}

.screenshot-placeholder__icon {
  width: 32px;
  height: 32px;
  color: var(--color-text-faint);
}

.screenshot-placeholder__label {
  font-size: var(--text-xs);
  color: var(--color-text-faint);
  text-align: center;
  font-family: var(--font-body);
  letter-spacing: 0.02em;
  max-width: 24ch;
}
</style>
