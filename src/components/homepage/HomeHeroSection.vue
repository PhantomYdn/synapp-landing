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
                <div class="pill hero__badge reveal">
                    <span class="hero__badge-dot" aria-hidden="true"></span>
                    <span class="hero__badge-text">The first enterprise Telegram management platform</span>
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
                <div class="hero__media-stack">
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

                    <div class="hero-social" role="group" aria-label="SynApp on social media">
                        <a
                            v-for="link in socialLinks"
                            :key="link.id"
                            :href="link.href"
                            :class="`hero-social__link hero-social__link--${link.id}`"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path :d="link.path"/>
                            </svg>
                            <span>{{ link.label }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const socialLinks = [
    {
        id: 'x',
        label: 'Follow on X',
        href: 'https://x.com/SynAppX',
        path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'
    },
    {
        id: 'linkedin',
        label: 'Follow on LinkedIn',
        href: 'https://www.linkedin.com/company/synappus/',
        path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    }
]
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

/* Badge (corporate blue -> pink) */
.hero__badge {
    position: relative;
    align-self: flex-start;
    width: fit-content;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    gap: var(--space-3);
    padding: 0.7rem 1.4rem;
    border: 0;
    border-radius: 999px;
    font-family: var(--font-heading);
    font-size: clamp(0.9rem, 1.3vw, 1.0625rem);
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: 0.005em;
    color: var(--color-white);
    background: linear-gradient(90deg, rgba(15, 165, 233, 0.16), rgba(236, 71, 153, 0.11));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow:
        0 0 36px -10px rgba(15, 165, 233, 0.5),
        0 0 36px -14px rgba(236, 71, 153, 0.4);
}

/* Gradient border */
.hero__badge::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(90deg, rgba(15, 165, 233, 0.85), rgba(236, 71, 153, 0.7));
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask-composite: exclude;
    pointer-events: none;
}

.hero__badge-dot {
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--color-accent-blue);
    box-shadow: 0 0 12px rgba(15, 165, 233, 0.9);
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

.hero__media-stack {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
}

/* Lift the video a bit on desktop (increase the value to lift it more) */
@media (min-width: 1024px) {
    .hero__media-stack {
        top: calc(-1 * var(--space-6));
    }
}

/* Social links under the video */
.hero-social {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-4);
}

.hero-social__link {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: 0.8rem 1.4rem;
    font-size: var(--text-base);
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero-social__link svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
}

.hero-social__link:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
}

/* Brand-colored buttons with a matching glow */
.hero-social__link--x {
    background: #000;
    border-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0 0 28px -4px rgba(255, 255, 255, 0.45), 0 0 64px -10px rgba(255, 255, 255, 0.25);
}

.hero-social__link--linkedin {
    background: #0a66c2;
    border-color: #3b8ee0;
    box-shadow: 0 0 28px -4px rgba(10, 102, 194, 0.95), 0 0 64px -10px rgba(10, 102, 194, 0.65);
}

/* Normal hover animation */
.hero-social .hero-social__link:hover {
    transform: translateY(-2px);
}

.hero-social__link--x:hover {
    box-shadow: 0 0 32px -6px rgba(255, 255, 255, 0.55), 0 0 72px -14px rgba(255, 255, 255, 0.35);
}

.hero-social__link--linkedin:hover {
    box-shadow: 0 0 32px -6px rgba(10, 102, 194, 1), 0 0 72px -14px rgba(10, 102, 194, 0.75);
}

@media (prefers-reduced-motion: reduce) {
    .hero-social .hero-social__link:hover {
        transform: none;
    }
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