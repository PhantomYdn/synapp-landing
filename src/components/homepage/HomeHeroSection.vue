<template>
    <section class="hero" aria-labelledby="hero-heading">
        <!-- Background elements -->
        <div class="hero__bg" aria-hidden="true">
            <div class="hero__orb hero__orb--blue"></div>
            <div class="hero__orb hero__orb--pink"></div>
            <div class="hero__grid"></div>
        </div>

        <div class="container hero__inner">
            <div class="hero__content">
                <div class="pill reveal">
                    <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
                        <circle cx="4" cy="4" r="4" fill="#0FA5E9"/>
                    </svg>
                    {{ t('home.hero.badge') }}
                </div>

                <h1 id="hero-heading" class="hero__headline reveal reveal--delay-1">
                    Control<br />
                    Every&nbsp;Chat<br />
                    Every&nbsp;User<br />
                    <span class="gradient-text">At&nbsp;Scale!</span>
                </h1>

                <p class="hero__sub reveal reveal--delay-2">{{ t('home.hero.sub') }}</p>

                <div class="hero__actions reveal reveal--delay-3">
                    <RouterLink to="/contact" class="hero-btn hero-btn--primary">
                        {{ t('home.hero.cta_primary') }}
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4"/>
                        </svg>
                    </RouterLink>
                    <RouterLink to="/features" class="hero-btn hero-btn--ghost">
                        {{ t('home.hero.cta_secondary') }}
                    </RouterLink>
                </div>

                <div class="hero__trust reveal reveal--delay-4">
                    <span class="trust-dot" aria-hidden="true"></span>
                    <span class="trust-text">Enterprise-ready · No free tier · Book a demo to get started</span>
                </div>
            </div>

            <div class="hero__media reveal reveal--delay-2">
                <div class="hero-video">
                    <iframe
                        class="hero-video__frame"
                        src="https://www.youtube-nocookie.com/embed/ZgkF4rOarx0"
                        title="SynApp product demo"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.hero {
    position: relative;
    padding-top: clamp(6rem, 16vw, 11rem);
    padding-bottom: clamp(4rem, 10vw, 8rem);
    overflow: hidden;
}

/* Background */
.hero__bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
}

.hero__grid {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 100%);
}

.hero__orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
}

.hero__orb--blue {
    width: 700px;
    height: 700px;
    top: -300px;
    left: -100px;
    background: rgba(15, 165, 233, 0.12);
    animation: pulseGlow 6s ease-in-out infinite;
}

.hero__orb--pink {
    width: 500px;
    height: 500px;
    top: -200px;
    right: -80px;
    background: rgba(236, 71, 153, 0.09);
    animation: pulseGlow 8s ease-in-out infinite reverse;
}

/* Layout */
.hero__inner {
    position: relative;
    z-index: 1;
    display: grid;
    gap: clamp(3rem, 6vw, 5rem);
    align-items: center;
}

@media (min-width: 1024px) {
    .hero__inner {
        grid-template-columns: 1fr 1fr;
    }
}

.hero__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
}

.hero__headline {
    font-size: var(--text-5xl);
    letter-spacing: -0.03em;
    line-height: 0.98;
    font-weight: 700;
    padding-right: 0.08em;
}

.hero__sub {
    font-size: var(--text-lg);
    color: var(--color-text-muted);
    line-height: 1.65;
    max-width: 46ch;
}

.hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    align-items: center;
}

/* Buttons */
.hero-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-body);
    font-weight: 600;
    font-size: var(--text-base);
    text-decoration: none;
    padding: 0.875rem 1.75rem;
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
    white-space: nowrap;
}

.hero-btn svg {
    width: 16px;
    height: 16px;
    transition: transform var(--transition-fast);
}

.hero-btn--primary {
    background: var(--color-accent-blue);
    color: #fff;
}

.hero-btn--primary:hover {
    background: #0c94d1;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(15, 165, 233, 0.45);
}

.hero-btn--primary:hover svg {
    transform: translateX(3px);
}

.hero-btn--ghost {
    color: var(--color-text-muted);
    border: 1px solid var(--color-border);
    background: transparent;
}

.hero-btn--ghost:hover {
    color: var(--color-white);
    border-color: var(--color-border-strong);
    transform: translateY(-1px);
}

/* Trust line */
.hero__trust {
    display: flex;
    align-items: center;
    gap: var(--space-3);
}

.trust-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--color-accent-blue);
    flex-shrink: 0;
    box-shadow: 0 0 8px rgba(15, 165, 233, 0.6);
}

.trust-text {
    font-size: var(--text-xs);
    color: var(--color-text-faint);
    letter-spacing: 0.01em;
}

/* Media */
.hero__media {
    width: 100%;
}

.hero-video {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: var(--radius-xl);
    overflow: hidden;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border: 1px solid var(--color-border);
    box-shadow:
        0 0 0 1px rgba(15, 165, 233, 0.06),
        0 24px 64px -16px rgba(0, 0, 0, 0.55),
        0 0 80px -20px rgba(15, 165, 233, 0.25);
    transition: border-color var(--transition-base), box-shadow var(--transition-base);
}

.hero-video:hover {
    border-color: var(--color-border-strong);
    box-shadow:
        0 0 0 1px rgba(15, 165, 233, 0.1),
        0 24px 64px -16px rgba(0, 0, 0, 0.6),
        0 0 100px -16px rgba(15, 165, 233, 0.35);
}

.hero-video__frame {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

@keyframes pulseGlow {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
}
</style>