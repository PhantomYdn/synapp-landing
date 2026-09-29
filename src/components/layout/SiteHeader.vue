<template>
    <header class="site-header" :class="{ 'site-header--scrolled': isScrolled || menuOpen }">
        <div class="container site-header__inner">
            <RouterLink to="/" class="site-header__logo" aria-label="SynApp — Home">
                <img src="/full_white.svg" alt="SynApp Logo" class="logo-icon" aria-hidden="true"/>
            </RouterLink>

            <nav class="site-header__nav" aria-label="Primary navigation">
                <RouterLink to="/features" class="nav-link">{{ t('nav.features') }}</RouterLink>
                <RouterLink to="/pricing" class="nav-link">{{ t('nav.pricing') }}</RouterLink>
                <a href="/docs/" class="nav-link">{{ t('nav.docs') }}</a>
                <RouterLink to="/contact" class="nav-link">{{ t('nav.contact') }}</RouterLink>
            </nav>

            <div class="site-header__actions">
                <RouterLink to="/contact" class="btn btn--primary btn--sm">
                    {{ t('nav.cta') }}
                </RouterLink>

                <button
                    class="mobile-toggle"
                    :aria-expanded="menuOpen"
                    aria-controls="mobile-menu"
                    aria-label="Toggle navigation menu"
                    @click="menuOpen = !menuOpen"
                >
          <span class="hamburger" :class="{ 'hamburger--open': menuOpen }">
            <span></span><span></span><span></span>
          </span>
                </button>
            </div>
        </div>

        <MobileMenu :open="menuOpen" id="mobile-menu" @close="menuOpen = false"/>
    </header>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'
import {useI18n} from 'vue-i18n'
import MobileMenu from './MobileMenu.vue'

const {t} = useI18n()
const menuOpen = ref(false)
const isScrolled = ref(false)

function handleScroll() {
    isScrolled.value = window.scrollY > 24
}

onMounted(() => window.addEventListener('scroll', handleScroll, {passive: true}))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: calc(var(--z-overlay) + 10);
    padding-block: 1rem;
    transition: background var(--transition-base), border-color var(--transition-base), backdrop-filter var(--transition-base);
    border-bottom: 1px solid transparent;
}

.site-header--scrolled {
    background: rgba(8, 11, 23, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom-color: var(--color-border);
}

.site-header__inner {
    display: flex;
    align-items: center;
    gap: var(--space-8);
}

.site-header__logo {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    text-decoration: none;
    flex-shrink: 0;
    position: relative;
    z-index: calc(var(--z-overlay) + 1);
}

.logo-icon {
    width: clamp(140px, 42vw, 270px); /* small -> big depending on viewport */
    height: auto;                     /* keep SVG aspect ratio */
    display: block;
}

.site-header__nav {
    display: none;
    align-items: center;
    gap: var(--space-6);
    margin-left: auto;
}

@media (min-width: 768px) {
    .site-header__nav {
        display: flex;
    }
}

.nav-link {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--color-text-muted);
    text-decoration: none;
    transition: color var(--transition-fast);
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--color-accent-blue);
    transform: scaleX(0);
    transition: transform var(--transition-fast);
    transform-origin: left;
}

.nav-link:hover,
.nav-link.router-link-active {
    color: var(--color-white);
}

.nav-link.router-link-active::after {
    transform: scaleX(1);
}

.site-header__actions {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    margin-left: auto;
    position: relative;
    z-index: calc(var(--z-overlay) + 1);
}

@media (min-width: 768px) {
    .site-header__actions {
        margin-left: 0;
    }
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    font-family: var(--font-body);
    font-weight: 600;
    text-decoration: none;
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
    white-space: nowrap;
    cursor: pointer;
    border: none;
}

.btn--primary {
    background: var(--color-accent-blue);
    color: #fff;
    padding: 0.625rem 1.25rem;
    font-size: var(--text-sm);
}

.btn--primary:hover {
    background: #0c94d1;
    transform: translateY(-1px);
    box-shadow: 0 4px 20px rgba(15, 165, 233, 0.35);
}

.btn--sm {
    padding: 0.5rem 1rem;
    font-size: var(--text-sm);
}

/* Hamburger */
.mobile-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: all var(--transition-fast);
    position: relative;
    z-index: calc(var(--z-overlay) + 1);
}

.mobile-toggle:hover {
    border-color: var(--color-border-strong);
}

@media (min-width: 768px) {
    .mobile-toggle {
        display: none;
    }
}

.hamburger {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 18px;
}

.hamburger span {
    display: block;
    height: 1.5px;
    background: var(--color-white);
    border-radius: 2px;
    transition: all var(--transition-base);
    transform-origin: center;
}

.hamburger--open span:nth-child(1) {
    transform: translateY(5.5px) rotate(45deg);
    background: var(--color-white) !important;
}

.hamburger--open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
}

.hamburger--open span:nth-child(3) {
    transform: translateY(-5.5px) rotate(-45deg);
    background: var(--color-white) !important;
}
.site-header__inner {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    min-width: 0; /* allow children to shrink instead of overflowing */
}

.site-header__logo,
.site-header__actions {
    min-width: 0;
}

.logo-icon {
    width: clamp(120px, 38vw, 270px);
    height: auto;
    display: block;
}

.site-header__actions {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    margin-left: auto;
    position: relative;
    z-index: calc(var(--z-overlay) + 1);
    flex-shrink: 0; /* keep button + toggle together, don't let them collapse oddly */
}

/* Tighten things up on small phones */
@media (max-width: 420px) {
    .site-header__inner {
        gap: var(--space-3); /* smaller gap between logo and actions */
    }

    .logo-icon {
        width: clamp(100px, 32vw, 160px);
    }

    .site-header__actions {
        gap: var(--space-2); /* smaller gap between CTA button and hamburger */
    }

    .btn--sm {
        padding: 0.4rem 0.75rem;
        font-size: 0.75rem; /* or var(--text-xs) if you have it */
    }

    .mobile-toggle {
        width: 32px;
        height: 32px;
    }
}
</style>
