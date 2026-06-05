<template>
  <section class="page-hero">
    <div class="page-hero__orb page-hero__orb--blue glow-orb glow-orb--blue" aria-hidden="true"></div>
    <div class="page-hero__orb page-hero__orb--pink glow-orb glow-orb--pink" aria-hidden="true"></div>
    <div class="container page-hero__inner">
      <div class="pill reveal" :class="{ 'pill--pink': badgeVariant === 'pink' }">{{ badge }}</div>
      <h1 class="page-hero__title reveal reveal--delay-1">{{ title }}</h1>
      <p v-if="sub" class="page-hero__sub reveal reveal--delay-2">{{ sub }}</p>
      <div v-if="$slots.actions" class="page-hero__actions reveal reveal--delay-3">
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    badge: string
    badgeVariant?: 'blue' | 'pink'
    title: string
    sub?: string
  }>(),
  { badgeVariant: 'blue' }
)
</script>

<style scoped>
.page-hero {
  position: relative;
  padding-top: clamp(6rem, 15vw, 10rem);
  padding-bottom: clamp(3rem, 8vw, 6rem);
  overflow: hidden;
  text-align: center;
}

.page-hero__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
}

.page-hero__title {
  font-size: var(--text-5xl);
  letter-spacing: -0.04em;
  line-height: 1.05;
  max-width: 18ch;
}

.page-hero__sub {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  max-width: 54ch;
  line-height: 1.65;
}

.page-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  justify-content: center;
  margin-top: var(--space-2);
}

.page-hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

.page-hero__orb--blue {
  width: 600px;
  height: 600px;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 165, 233, 0.1);
}

.page-hero__orb--pink {
  width: 400px;
  height: 400px;
  top: -100px;
  right: 10%;
  background: rgba(236, 71, 153, 0.07);
}
</style>
