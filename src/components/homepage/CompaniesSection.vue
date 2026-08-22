<template>
    <section class="section companies-section" aria-labelledby="companies-heading">
        <div class="container">
            <AppSectionIntro
                badge="Trusted By"
                title="Companies That Trust Us"
                center
                id="companies-heading"
            />

            <div class="companies-carousel reveal" role="group" aria-label="Companies that use our platform">
                <div class="companies-carousel__fade companies-carousel__fade--left" aria-hidden="true"></div>
                <div class="companies-carousel__fade companies-carousel__fade--right" aria-hidden="true"></div>

                <div class="companies-track">
                    <!-- Track is duplicated once so the loop is seamless (translateX(-50%)) -->
                    <div class="companies-track__group" aria-hidden="false">
                        <div v-for="company in companies" :key="`a-${company.name}`" class="company-logo">
                            <img
                                v-if="company.logo"
                                :src="company.logo"
                                :alt="company.name"
                                loading="lazy"
                                @error="onLogoError"
                            />
                            <span v-else class="company-logo__wordmark">{{ company.name }}</span>
                        </div>
                    </div>
                    <div class="companies-track__group" aria-hidden="true">
                        <div v-for="company in companies" :key="`b-${company.name}`" class="company-logo">
                            <img
                                v-if="company.logo"
                                :src="company.logo"
                                :alt="'logo'"
                                loading="lazy"
                                @error="onLogoError"
                            />
                            <span v-else class="company-logo__wordmark">{{ company.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import AppSectionIntro from '@/components/ui/AppSectionIntro.vue'

interface Company {
    name: string
    logo?: string
}

const companies: Company[] = [
    { name: 'AST Groups', logo: '/images/logos/ast-groups.png' },
    { name: '1inch', logo: '/images/logos/1inch.png' },
]

function onLogoError(event: Event) {
    const img = event.target as HTMLImageElement
    const wrapper = img.parentElement
    if (!wrapper) return
    const name = img.alt || ''
    img.remove()
    if (name) {
        const span = document.createElement('span')
        span.className = 'company-logo__wordmark'
        span.textContent = name
        wrapper.appendChild(span)
    }
}
</script>

<style scoped>
.companies-carousel {
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(
        to right,
        transparent 0,
        #000 var(--space-8),
        #000 calc(100% - var(--space-8)),
        transparent 100%
    );
    -webkit-mask-image: linear-gradient(
        to right,
        transparent 0,
        #000 var(--space-8),
        #000 calc(100% - var(--space-8)),
        transparent 100%
    );
}

.companies-carousel__fade {
    position: absolute;
    top: 0;
    bottom: 0;
    width: clamp(2rem, 8vw, 6rem);
    z-index: 2;
    pointer-events: none;
}

.companies-carousel__fade--left {
    left: 0;
    background: linear-gradient(to right, var(--color-bg, #0a0a0f) 0%, transparent 100%);
}

.companies-carousel__fade--right {
    right: 0;
    background: linear-gradient(to left, var(--color-bg, #0a0a0f) 0%, transparent 100%);
}

.companies-track {
    display: flex;
    width: max-content;
    animation: companies-scroll 28s linear infinite;
}

.companies-carousel:hover .companies-track {
    animation-play-state: paused;
}

.companies-track__group {
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

@keyframes companies-scroll {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}

.company-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;
    padding: 0 var(--space-8);
    flex-shrink: 0;
}

.company-logo img {
    max-height: 32px;
    max-width: 140px;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: grayscale(1) brightness(1.8) opacity(0.55);
    transition: filter var(--transition-base), transform var(--transition-base);
}

.company-logo:hover img {
    filter: grayscale(0) brightness(1) opacity(1);
    transform: translateY(-2px);
}

.company-logo__wordmark {
    font-family: var(--font-heading);
    font-size: var(--text-lg);
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--color-text-faint);
    white-space: nowrap;
    transition: color var(--transition-base), transform var(--transition-base);
}

.company-logo:hover .company-logo__wordmark {
    color: var(--color-white);
    transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
    .companies-track {
        animation: none;
        flex-wrap: wrap;
        justify-content: center;
    }

    .companies-track__group[aria-hidden='true'] {
        display: none;
    }
}
</style>