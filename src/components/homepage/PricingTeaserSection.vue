<template>
    <section class="section pricing-teaser" aria-labelledby="pricing-teaser-heading">
        <div class="container">
            <AppSectionIntro
                badge="Pricing"
                title="Transparent Pricing, No Surprises"
                sub="Plans built for every stage of growth. No free tier — but a clear path from entry to enterprise."
                center
                id="pricing-teaser-heading"
            />

            <div class="teaser-strip">
                <div
                    v-for="(plan, i) in pricingPlans"
                    :key="plan.id"
                    class="teaser-plan reveal"
                    :class="[`reveal--delay-${i + 1}`, { 'teaser-plan--highlight': plan.highlighted }]"
                >
                    <span class="teaser-plan__name">{{ plan.name }}</span>
                    <span class="teaser-plan__price">{{ plan.price ?? 'Custom' }}</span>
                    <span class="teaser-plan__note">
            {{ plan.priceNote }}<template v-if="plan.badge"> · {{ plan.badge }}</template>
          </span>
                </div>
            </div>

            <div class="teaser-cta reveal">
                <RouterLink to="/pricing" class="teaser-btn teaser-btn--primary">
                    See Full Pricing
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                         stroke-linejoin="round" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4"/>
                    </svg>
                </RouterLink>
                <RouterLink to="/contact" class="teaser-btn teaser-btn--ghost">
                    Talk to Sales
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import AppSectionIntro from '@/components/ui/AppSectionIntro.vue'
import {pricingPlans} from '@/data/pricing'
</script>

<style scoped>
.pricing-teaser {
    background: linear-gradient(180deg, transparent 0%, rgba(16, 23, 43, 0.4) 50%, transparent 100%);
}

.teaser-strip {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-3);
    margin-bottom: var(--space-10);
}

@media (min-width: 1024px) {
    .teaser-strip {
        grid-template-columns: repeat(4, 1fr);
    }
}

.teaser-plan {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-5) var(--space-4);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background: rgba(16, 23, 43, 0.4);
    text-align: center;
    transition: border-color var(--transition-base), transform var(--transition-base);
}

.teaser-plan:hover {
    border-color: var(--color-border-strong);
    transform: translateY(-2px);
}

.teaser-plan--highlight {
    border-color: rgba(15, 165, 233, 0.3);
    background: rgba(15, 165, 233, 0.04);
    box-shadow: 0 0 0 1px rgba(15, 165, 233, 0.08);
}

.teaser-plan__name {
    font-family: var(--font-heading);
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--color-text-muted);
    letter-spacing: -0.01em;
}

.teaser-plan__price {
    font-family: var(--font-heading);
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--color-white);
    letter-spacing: -0.04em;
    line-height: 1;
}

.teaser-plan--highlight .teaser-plan__price {
    color: var(--color-accent-blue);
}

.teaser-plan__note {
    font-size: var(--text-xs);
    color: var(--color-text-faint);
}

.teaser-cta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    justify-content: center;
    align-items: center;
}

.teaser-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-body);
    font-weight: 600;
    font-size: var(--text-sm);
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
}

.teaser-btn svg {
    width: 14px;
    height: 14px;
    transition: transform var(--transition-fast);
}

.teaser-btn--primary {
    background: var(--color-accent-blue);
    color: #fff;
    border: none;
}

.teaser-btn--primary:hover {
    background: #0c94d1;
    transform: translateY(-1px);
    box-shadow: 0 6px 24px rgba(15, 165, 233, 0.4);
}

.teaser-btn--primary:hover svg {
    transform: translateX(3px);
}

.teaser-btn--ghost {
    color: var(--color-text-muted);
    border: 1px solid var(--color-border);
    background: transparent;
}

.teaser-btn--ghost:hover {
    color: var(--color-white);
    border-color: var(--color-border-strong);
}
</style>