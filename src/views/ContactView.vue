<template>
  <div class="contact-view">
    <PageHero
      badge="Get in Touch"
      :title="t('contact.hero_title')"
      :sub="t('contact.hero_sub')"
    />

    <section class="section contact-main" aria-label="Contact form and information">
      <div class="container">
        <div class="contact-layout">
          <!-- Form -->
          <div class="contact-form-wrap reveal">
            <ContactFormCard />
          </div>

          <!-- Trust sidebar -->
          <aside class="contact-sidebar" aria-label="What to expect">
            <div class="trust-block reveal reveal--delay-1">
              <h2 class="trust-block__title">{{ t('contact.trust_title') }}</h2>
              <ul class="trust-list" aria-label="What you can expect">
                <li class="trust-item">
                  <div class="trust-item__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2zM6 10l3 3 5-5"/>
                    </svg>
                  </div>
                  <span>{{ t('contact.trust_1') }}</span>
                </li>
                <li class="trust-item">
                  <div class="trust-item__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2zM6 10l3 3 5-5"/>
                    </svg>
                  </div>
                  <span>{{ t('contact.trust_2') }}</span>
                </li>
                <li class="trust-item">
                  <div class="trust-item__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2zM6 10l3 3 5-5"/>
                    </svg>
                  </div>
                  <span>{{ t('contact.trust_3') }}</span>
                </li>
              </ul>
            </div>

            <div class="response-note reveal reveal--delay-2">
              <div class="response-note__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <strong class="response-note__label">Response time</strong>
                <p class="response-note__text">We reply within one business day. For urgent inquiries, mention it in your message.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHero from '@/components/ui/PageHero.vue'
import ContactFormCard from '@/components/contact/ContactFormCard.vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { useRevealOnScroll } from '@/composables/useRevealOnScroll'

const { t } = useI18n()
usePageMeta('contact')
useRevealOnScroll()
</script>

<style scoped>
.contact-main {
  padding-bottom: clamp(5rem, 12vw, 9rem);
}

.contact-layout {
  display: grid;
  gap: clamp(2.5rem, 5vw, 4rem);
  align-items: start;
}

@media (min-width: 1024px) {
  .contact-layout {
    grid-template-columns: 1fr 380px;
  }
}

/* Sidebar */
.trust-block {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.trust-block__title {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: -0.02em;
}

.trust-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.trust-item {
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
}

.trust-item__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-accent-blue);
  margin-top: 1px;
}

.trust-item__icon svg {
  width: 20px;
  height: 20px;
}

/* Response note */
.response-note {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
  padding: var(--space-5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: rgba(16, 23, 43, 0.3);
}

.response-note__icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 165, 233, 0.08);
  border: 1px solid rgba(15, 165, 233, 0.15);
  border-radius: var(--radius-md);
  color: var(--color-accent-blue);
}

.response-note__icon svg {
  width: 18px;
  height: 18px;
}

.response-note__label {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: var(--space-1);
}

.response-note__text {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
}
</style>
