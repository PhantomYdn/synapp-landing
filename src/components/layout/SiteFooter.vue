<template>
    <footer class="site-footer">
        <div class="container site-footer__inner">
            <div class="site-footer__brand">
                <RouterLink to="/" class="footer-logo" aria-label="SynApp home">
                    <img src="/long_white.svg" alt="SynApp Logo" class="logo-icon" aria-hidden="true"/>
                </RouterLink>
                <p class="footer-tagline">{{ t('footer.tagline') }}</p>

                <div class="footer-social" role="group" aria-label="SynApp on social media">
                    <a
                        v-for="link in socialLinks"
                        :key="link.id"
                        :href="link.href"
                        class="footer-social__link"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="link.label"
                        :title="link.label"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path :d="link.path"/>
                        </svg>
                    </a>
                </div>
            </div>

            <nav class="site-footer__nav" aria-label="Footer navigation">
                <RouterLink to="/" class="footer-link">{{ t('footer.home') }}</RouterLink>
                <RouterLink to="/features" class="footer-link">{{ t('footer.features') }}</RouterLink>
                <RouterLink to="/pricing" class="footer-link">{{ t('footer.pricing') }}</RouterLink>
                <a href="/docs/" class="footer-link">{{ t('footer.docs') }}</a>
                <RouterLink to="/contact" class="footer-link">{{ t('footer.contact') }}</RouterLink>
                <RouterLink to="/privacy-policy" class="footer-link">{{ t('footer.privacy') }}</RouterLink>
            </nav>
        </div>

        <div class="container site-footer__bottom">
            <p class="footer-copy">{{ t('footer.copyright', { year: currentYear }) }}</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear()

const socialLinks = [
    {
        id: 'x',
        label: 'SynApp on X',
        href: 'https://x.com/SynAppX',
        path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'
    },
    {
        id: 'linkedin',
        label: 'SynApp on LinkedIn',
        href: 'https://www.linkedin.com/company/synappus/',
        path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    }
]
</script>

<style scoped>
.site-footer {
    background: var(--color-surface);
    border-top: 1px solid var(--color-border);
    padding-top: var(--space-12);
}

.site-footer__inner {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
}

@media (min-width: 768px) {
    .site-footer__inner {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
}

.site-footer__brand {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    text-decoration: none;
}

.footer-logo__icon {
    width: 28px;
    height: 28px;
}

.footer-logo__wordmark {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.0625rem;
    color: var(--color-white);
    letter-spacing: -0.02em;
}

.footer-tagline {
    font-size: var(--text-sm);
    color: var(--color-text-faint);
    max-width: 24ch;
}

.footer-social {
    display: flex;
    gap: var(--space-3);
    margin-top: var(--space-2);
}

.footer-social__link {
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-faint);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
}

.footer-social__link svg {
    width: 16px;
    height: 16px;
}

.footer-social__link:hover {
    color: var(--color-white);
    border-color: rgba(15, 165, 233, 0.5);
    background: rgba(15, 165, 233, 0.1);
}

.footer-social__link:focus-visible {
    outline: 2px solid var(--color-accent-blue);
    outline-offset: 2px;
}

.site-footer__nav {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2) var(--space-6);
}

@media (min-width: 768px) {
    .site-footer__nav {
        flex-direction: column;
        gap: var(--space-3);
        align-items: flex-end;
    }
}

.footer-link {
    font-size: var(--text-sm);
    color: var(--color-text-faint);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.footer-link:hover {
    color: var(--color-white);
}

.site-footer__bottom {
    margin-top: var(--space-8);
    padding-block: var(--space-5);
    border-top: 1px solid var(--color-border);
}

.footer-copy {
    font-size: var(--text-xs);
    color: var(--color-text-faint);
}
</style>