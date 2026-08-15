<template>
    <div class="features-view">
        <PageHero
            badge="Full Feature Set"
            :title="t('features.hero_title')"
            :sub="t('features.hero_sub')"
        />

        <section class="section features-main" aria-label="Features">
            <div class="container">
                <!-- Feature groups -->
                <div
                    v-for="(group, gi) in featureGroups"
                    :key="group.id"
                    class="feature-group"
                    :class="{ 'feature-group--alt': gi % 2 !== 0 }"
                    :id="group.id"
                >
                    <div class="feature-group__header reveal">
                        <div class="feature-group__badge pill">{{ group.title }}</div>
                        <p class="feature-group__desc">{{ group.description }}</p>
                    </div>

                    <div class="feature-group__items">
                        <div
                            v-for="(feature, fi) in group.features"
                            :key="feature.id"
                            class="feature-item reveal"
                            :class="`reveal--delay-${(fi % 3) + 1}`"
                        >
                            <div class="feature-item__layout" :class="{ 'feature-item__layout--reverse': fi % 2 !== 0 }">
                                <div class="feature-item__content">
                                    <div class="feature-item__icon" aria-hidden="true" v-html="feature.icon"></div>
                                    <h3 class="feature-item__title">{{ feature.title }}</h3>
                                    <p class="feature-item__desc">{{ feature.description }}</p>
                                    <p class="feature-item__detail">{{ feature.detail }}</p>
                                </div>
                                <div class="feature-item__media">
                                    <ScreenshotPlaceholder :label="feature.screenshotLabel" ratio="13/9" :src="baseScreenShotPath + feature.id + '.png'" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mid-page CTA -->
                <div class="features-mid-cta reveal">
                    <div class="features-mid-cta__inner glass">
                        <div class="features-mid-cta__content">
                            <h3 class="features-mid-cta__title">Ready to see it in action?</h3>
                            <p class="features-mid-cta__sub">Book a personalized demo and see how SynApp fits your specific setup.</p>
                        </div>
                        <div class="features-mid-cta__actions">
                            <RouterLink to="/contact" class="mid-cta-btn mid-cta-btn--primary">Book a Demo</RouterLink>
                            <RouterLink to="/pricing" class="mid-cta-btn mid-cta-btn--ghost">See Pricing</RouterLink>
                        </div>
                    </div>
                </div>

                <!-- Roadmap note -->
                <div class="roadmap-note reveal">
                    <div class="roadmap-note__inner">
                        <span class="pill pill--pink">Coming Soon</span>
                        <p class="roadmap-note__text">
                            SynApp is actively developed. Additional capabilities including advanced analytics, custom webhook triggers, and deeper API access are on the roadmap. <RouterLink to="/contact">Reach out</RouterLink> if you have a specific requirement.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Final CTA -->
        <FinalCtaSection />
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHero from '@/components/ui/PageHero.vue'
import ScreenshotPlaceholder from '@/components/ui/ScreenshotPlaceholder.vue'
import FinalCtaSection from '@/components/homepage/FinalCtaSection.vue'
import { featureGroups } from '@/data/features'
import { usePageMeta } from '@/composables/usePageMeta'
import { useRevealOnScroll } from '@/composables/useRevealOnScroll'

const { t } = useI18n()
const baseScreenShotPath = './features/'
usePageMeta('features')
useRevealOnScroll()
</script>

<style scoped>
.feature-group {
    padding-block: clamp(3rem, 7vw, 6rem);
    border-bottom: 1px solid var(--color-border);
}

.feature-group:last-of-type {
    border-bottom: none;
}

.feature-group--alt {
    background: rgba(16, 23, 43, 0.3);
    margin-inline: calc(-1 * var(--container-pad));
    padding-inline: var(--container-pad);
}

.feature-group__header {
    margin-bottom: clamp(2rem, 5vw, 4rem);
}

.feature-group__badge {
    margin-bottom: var(--space-4);
    display: inline-flex;
}

.feature-group__desc {
    font-size: var(--text-lg);
    color: var(--color-text-muted);
    max-width: 60ch;
    line-height: 1.65;
}

.feature-group__items {
    display: flex;
    flex-direction: column;
    gap: clamp(3rem, 7vw, 5rem);
}

.feature-item__layout {
    display: grid;
    gap: clamp(2rem, 5vw, 4rem);
    align-items: center;
}

@media (min-width: 1024px) {
    .feature-item__layout {
        grid-template-columns: 0.5fr 1.5fr;
    }

    .feature-item__layout--reverse {
        direction: rtl;
    }

    .feature-item__layout--reverse > * {
        direction: ltr;
    }
}

.feature-item__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
}

.feature-item__icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(15, 165, 233, 0.1);
    border: 1px solid rgba(15, 165, 233, 0.18);
    border-radius: var(--radius-md);
    color: var(--color-accent-blue);
}

.feature-item__icon :deep(svg) {
    width: 22px;
    height: 22px;
}

.feature-item__title {
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--color-white);
    letter-spacing: -0.03em;
}

.feature-item__desc {
    font-size: var(--text-base);
    color: var(--color-text-muted);
    line-height: 1.7;
}

.feature-item__detail {
    font-size: var(--text-sm);
    color: var(--color-text-faint);
    line-height: 1.65;
    padding-top: var(--space-2);
    border-top: 1px solid var(--color-border);
}

/* Mid-page CTA */
.features-mid-cta {
    margin-block: clamp(3rem, 7vw, 6rem);
}

.features-mid-cta__inner {
    border-radius: var(--radius-xl);
    padding: clamp(var(--space-8), 5vw, var(--space-12));
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    align-items: flex-start;
}

@media (min-width: 768px) {
    .features-mid-cta__inner {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
}

.features-mid-cta__title {
    font-size: var(--text-2xl);
    font-weight: 700;
    letter-spacing: -0.03em;
    margin-bottom: var(--space-2);
}

.features-mid-cta__sub {
    font-size: var(--text-base);
    color: var(--color-text-muted);
    max-width: 48ch;
}

.features-mid-cta__actions {
    display: flex;
    gap: var(--space-3);
    flex-shrink: 0;
    flex-wrap: wrap;
}

.mid-cta-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-md);
    font-weight: 600;
    font-size: var(--text-sm);
    text-decoration: none;
    transition: all var(--transition-base);
    white-space: nowrap;
}

.mid-cta-btn--primary {
    background: var(--color-accent-blue);
    color: #fff;
    border: none;
}

.mid-cta-btn--primary:hover {
    background: #0c94d1;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(15,165,233,0.4);
}

.mid-cta-btn--ghost {
    color: var(--color-text-muted);
    border: 1px solid var(--color-border);
    background: transparent;
}

.mid-cta-btn--ghost:hover {
    color: var(--color-white);
    border-color: var(--color-border-strong);
}

/* Roadmap note */
.roadmap-note {
    margin-bottom: clamp(2rem, 5vw, 4rem);
}

.roadmap-note__inner {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    padding: var(--space-6);
    border: 1px dashed rgba(236, 71, 153, 0.2);
    border-radius: var(--radius-lg);
    background: rgba(236, 71, 153, 0.04);
}

@media (min-width: 768px) {
    .roadmap-note__inner {
        flex-direction: row;
        align-items: flex-start;
    }
}

.roadmap-note__text {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    line-height: 1.65;
}

.roadmap-note__text a {
    color: var(--color-accent-blue);
    font-weight: 500;
}
</style>