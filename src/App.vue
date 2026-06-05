<template>
  <div class="app-wrapper">
    <SiteHeader />
    <main class="main-content">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import { useCursorEffect } from '@/composables/useCursorEffect'

useCursorEffect()
</script>

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

/* Custom cursor styles — global because cursor is appended to body */
.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: var(--color-accent-blue);
  border-radius: 50%;
  pointer-events: none;
  z-index: var(--z-cursor);
  transition: background 200ms ease, transform 100ms ease;
  will-change: transform;
}

.cursor-dot--pink {
  background: var(--color-accent-pink);
}

.cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(15, 165, 233, 0.1) 0%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 0;
  will-change: transform;
  transition: background 400ms ease;
}

.cursor-glow--pink {
  background: radial-gradient(
    circle at center,
    rgba(236, 71, 153, 0.1) 0%,
    transparent 70%
  );
}
</style>
