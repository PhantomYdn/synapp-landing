<template>
  <div class="section-intro" :class="{ 'section-intro--center': center }">
    <div v-if="badge" class="pill reveal" :class="{ 'pill--pink': badgeVariant === 'pink' }">{{ badge }}</div>
    <h2 class="section-intro__title reveal reveal--delay-1">
      <slot name="title">{{ title }}</slot>
    </h2>
    <p v-if="sub || $slots.sub" class="section-intro__sub reveal reveal--delay-2">
      <slot name="sub">{{ sub }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    badge?: string
    badgeVariant?: 'blue' | 'pink'
    title?: string
    sub?: string
    center?: boolean
  }>(),
  { badgeVariant: 'blue', center: false }
)
</script>

<style scoped>
.section-intro {
  margin-bottom: clamp(2rem, 4vw, 3rem);
  max-width: 640px;
}

.section-intro--center {
  text-align: center;
  margin-inline: auto;
}

.pill {
  margin-bottom: var(--space-5);
}

.section-intro__title {
  font-size: var(--text-4xl);
  margin-bottom: var(--space-4);
  letter-spacing: -0.03em;
}

.section-intro__sub {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: 1.65;
  max-width: 52ch;
}

.section-intro--center .section-intro__sub {
  margin-inline: auto;
}
</style>
