<template>
    <div class="pricing-view">
        <PageHero
            badge="Pricing"
            :title="t('pricing.hero_title')"
            :sub="t('pricing.hero_sub')"
        />

        <section class="section pricing-cards-section" aria-labelledby="pricing-plans-heading">
            <div class="container container--wide">
                <h2 id="pricing-plans-heading" class="sr-only">Pricing Plans</h2>
                <p class="billing-note reveal">{{ t('pricing.billed_monthly') }}</p>

                <div class="pricing-grid" :style="{ '--plan-count': pricingPlans.length }">
                    <PricingCard
                        v-for="(plan, i) in pricingPlans"
                        :key="plan.id"
                        v-bind="plan"
                        :delay="(i % 3) + 1"
                    />
                </div>
            </div>
        </section>

        <!-- Comparison table -->
        <section class="section comparison-section" aria-labelledby="comparison-heading">
            <div class="container">
                <AppSectionIntro
                    badge="Feature Comparison"
                    title="What's Included in Each Plan"
                    center
                    id="comparison-heading"
                />

                <div class="table-scroll reveal">
                    <table class="comparison-table" aria-label="Feature comparison across plans">
                        <thead>
                        <tr>
                            <th scope="col" class="feature-col">Feature</th>
                            <th scope="col">Basic</th>
                            <th scope="col">Business</th>
                            <th scope="col" class="col--highlight">Business Plus</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="feature in comparisonFeatures" :key="feature.label">
                            <td class="feature-col feature-name">{{ feature.label }}</td>
                            <td>
                                <ComparisonCell :value="feature.basic"/>
                            </td>
                            <td>
                                <ComparisonCell :value="feature.business"/>
                            </td>
                            <td>
                                <ComparisonCell :value="feature.enterprise"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Billing FAQ -->
        <section class="section faq-section" aria-labelledby="billing-faq-heading">
            <div class="container container--narrow">
                <AppSectionIntro
                    badge="Questions"
                    title="Pricing FAQ"
                    center
                    id="billing-faq-heading"
                />
                <FaqAccordion :items="pricingFaqs"/>
            </div>
        </section>

        <!-- Enterprise CTA -->
        <section class="section enterprise-cta-section" aria-labelledby="enterprise-cta-heading">
            <div class="container">
                <div class="enterprise-cta reveal">
                    <div class="enterprise-cta__orb enterprise-cta__orb--blue" aria-hidden="true"></div>
                    <div class="enterprise-cta__orb enterprise-cta__orb--pink" aria-hidden="true"></div>
                    <div class="enterprise-cta__content">
                        <h2 id="enterprise-cta-heading" class="enterprise-cta__title">{{
                                t('pricing.enterprise_title')
                            }}</h2>
                        <p class="enterprise-cta__sub">{{ t('pricing.enterprise_sub') }}</p>
                        <RouterLink to="/contact/" class="enterprise-btn">
                            {{ t('pricing.enterprise_cta') }}
                            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"
                                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M3 8h10M9 4l4 4-4 4"/>
                            </svg>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import {defineComponent, h} from 'vue'
import {useI18n} from 'vue-i18n'
import PageHero from '@/components/ui/PageHero.vue'
import AppSectionIntro from '@/components/ui/AppSectionIntro.vue'
import PricingCard from '@/components/ui/PricingCard.vue'
import FaqAccordion from '@/components/ui/FaqAccordion.vue'
import {pricingPlans, comparisonFeatures, pricingFaqs} from '@/data/pricing'
import {usePageMeta} from '@/composables/usePageMeta'
import {useRevealOnScroll} from '@/composables/useRevealOnScroll'

const {t} = useI18n()
usePageMeta('pricing')
useRevealOnScroll()

// Inline comparison cell component
const ComparisonCell = defineComponent({
    props: {value: {type: [Boolean, String], required: true}},
    setup(props) {
        return () => {
            if (props.value === true) {
                return h('span', {class: 'cell-check', 'aria-label': 'Included'},
                    h('svg', {
                            viewBox: '0 0 16 16',
                            fill: 'none',
                            stroke: 'currentColor',
                            'stroke-width': '2',
                            'stroke-linecap': 'round',
                            'stroke-linejoin': 'round',
                            'aria-hidden': 'true'
                        },
                        h('path', {d: 'M3 8l3.5 3.5L13 4.5'})
                    )
                )
            }
            if (props.value === false) {
                return h('span', {class: 'cell-dash', 'aria-label': 'Not included'}, '—')
            }
            return h('span', {class: 'cell-text'}, props.value as string)
        }
    }
})
</script>

<style scoped>
.pricing-cards-section {
    padding-top: 0;
}

.billing-note {
    text-align: center;
    font-size: var(--text-sm);
    color: var(--color-text-faint);
    margin: 0 0 var(--space-8);
    line-height: 1.2;
}

/* Pricing grid
   --plan-count is set from the number of plans in the template, so the grid
   always has exactly as many columns as cards (no empty column pushing the
   cards off-center). */
.pricing-grid {
    --plan-count: 4;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-5);
    width: 100%;
    margin-inline: auto;
    justify-content: center;
}

@media (min-width: 640px) {
    .pricing-grid {
        grid-template-columns: repeat(2, minmax(0, 360px));
        justify-content: center;
    }
}

@media (min-width: 1200px) {
    .pricing-grid {
        grid-template-columns: repeat(var(--plan-count), minmax(0, 260px));
        max-width: calc(var(--plan-count) * 260px + (var(--plan-count) - 1) * var(--space-5));
        justify-content: center;
    }
}

/* Comparison table */
.table-scroll {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border);
}

.comparison-table {
    width: 100%;
    min-width: 740px;
    border-collapse: collapse;
    font-size: var(--text-sm);
}

.comparison-table thead {
    background: var(--color-surface);
}

.comparison-table th {
    padding: var(--space-4) var(--space-5);
    text-align: center;
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: var(--text-sm);
    color: var(--color-white);
    border-bottom: 1px solid var(--color-border);
    white-space: nowrap;
}

.comparison-table th.feature-col {
    text-align: left;
    color: var(--color-text-faint);
}

.comparison-table td {
    padding: var(--space-4) var(--space-5);
    text-align: center;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text-muted);
    vertical-align: middle;
}

.comparison-table tr:last-child td {
    border-bottom: none;
}

.comparison-table tr:nth-child(even) {
    background: rgba(16, 23, 43, 0.4);
}

.comparison-table tr:hover {
    background: rgba(20, 29, 53, 0.6);
}

.feature-col {
    text-align: left !important;
}

.feature-name {
    color: var(--color-white) !important;
    font-weight: 500;
}

.col--highlight {
    background: rgba(15, 165, 233, 0.04);
}

:deep(.cell-check) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(15, 165, 233, 0.12);
    color: var(--color-accent-blue);
}

:deep(.cell-check svg) {
    width: 11px;
    height: 11px;
}

:deep(.cell-dash) {
    color: var(--color-text-faint);
}

:deep(.cell-text) {
    font-size: var(--text-xs);
    color: var(--color-text-muted);
}

/* Enterprise CTA */
.enterprise-cta {
    position: relative;
    overflow: hidden;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: clamp(var(--space-8), 6vw, var(--space-16));
    text-align: center;
}

.enterprise-cta__orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
}

.enterprise-cta__orb--blue {
    width: 400px;
    height: 400px;
    top: -200px;
    left: -100px;
    background: rgba(15, 165, 233, 0.12);
}

.enterprise-cta__orb--pink {
    width: 300px;
    height: 300px;
    bottom: -150px;
    right: -50px;
    background: rgba(236, 71, 153, 0.1);
}

.enterprise-cta__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-5);
}

.enterprise-cta__title {
    font-size: var(--text-3xl);
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--color-white);
}

.enterprise-cta__sub {
    font-size: var(--text-lg);
    color: var(--color-text-muted);
    max-width: 50ch;
    line-height: 1.65;
}

.enterprise-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    background: var(--color-accent-blue);
    color: #fff;
    font-weight: 600;
    font-size: var(--text-base);
    text-decoration: none;
    padding: 0.875rem 2rem;
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
    margin-top: var(--space-2);
}

.enterprise-btn svg {
    width: 16px;
    height: 16px;
    transition: transform var(--transition-fast);
}

.enterprise-btn:hover {
    background: #0c94d1;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(15, 165, 233, 0.45);
}

.enterprise-btn:hover svg {
    transform: translateX(3px);
}
</style>