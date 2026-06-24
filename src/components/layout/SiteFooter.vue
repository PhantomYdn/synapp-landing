<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__brand">
        <RouterLink to="/" class="footer-logo" aria-label="SynApp home">
            <img src="/long_white.svg" alt="SynApp Logo" class="logo-icon" aria-hidden="true"/>
        </RouterLink>
        <p class="footer-tagline">{{ t('footer.tagline') }}</p>
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
