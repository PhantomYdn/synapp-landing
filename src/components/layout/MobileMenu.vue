<template>
  <Transition name="mobile-menu">
    <div v-if="open" class="mobile-menu" :id="id" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <nav class="mobile-menu__nav" aria-label="Mobile navigation">
        <RouterLink to="/features" class="mobile-nav-link" @click="emit('close')">Features</RouterLink>
        <RouterLink to="/pricing" class="mobile-nav-link" @click="emit('close')">Pricing</RouterLink>
        <a href="/docs/" class="mobile-nav-link" @click="emit('close')">Docs</a>
        <RouterLink to="/contact" class="mobile-nav-link" @click="emit('close')">Contact</RouterLink>
        <div class="mobile-menu__divider"></div>
        <RouterLink to="/contact" class="mobile-cta" @click="emit('close')">Book a Demo</RouterLink>
      </nav>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps<{ open: boolean; id: string }>()
const emit = defineEmits<{ close: [] }>()

// Lock body scroll when open
watch(() => props.open, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  inset: 0;
  top: 65px;
  background: rgba(8, 11, 23, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: calc(var(--z-sticky) - 1);
  padding: var(--space-6) var(--container-pad);
  border-top: 1px solid var(--color-border);
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
}

.mobile-menu__nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.mobile-nav-link {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-text-muted);
  text-decoration: none;
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--color-border);
  transition: color var(--transition-fast);
  letter-spacing: -0.02em;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  color: var(--color-white);
}

.mobile-menu__divider {
  margin-block: var(--space-4);
}

.mobile-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent-blue);
  color: #fff;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-base);
  text-decoration: none;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-md);
  transition: background var(--transition-fast);
}

.mobile-cta:hover {
  background: #0c94d1;
}

/* Transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
