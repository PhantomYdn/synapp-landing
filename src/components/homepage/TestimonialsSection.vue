<template>
  <section class="section testimonials" aria-labelledby="testimonials-heading">
    <div class="container">
      <AppSectionIntro
        badge="Early Feedback"
        title="What Operators Are Saying"
        center
        id="testimonials-heading"
      />

      <div class="testimonials-grid">
        <blockquote
          v-for="(item, i) in testimonials"
          :key="i"
          class="testimonial-card reveal"
          :class="`reveal--delay-${i + 1}`"
        >
          <div class="testimonial-card__quote-mark" aria-hidden="true">"</div>
          <p class="testimonial-card__text">{{ item.quote }}</p>
          <footer class="testimonial-card__footer">
            <div class="testimonial-card__avatar" aria-hidden="true">{{ item.initials }}</div>
            <div class="testimonial-card__meta">
              <cite class="testimonial-card__author">{{ item.author }}</cite>
              <span class="testimonial-card__role">{{ item.role }}</span>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppSectionIntro from '@/components/ui/AppSectionIntro.vue'
import { testimonials } from '@/data/testimonials'
</script>

<style scoped>
.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
  margin-bottom: var(--space-8);
}

@media (min-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.testimonial-card {
  position: relative;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  transition: border-color var(--transition-base), transform var(--transition-base);
}

.testimonial-card:hover {
  border-color: var(--color-border-strong);
  transform: translateY(-3px);
}

.testimonial-card__quote-mark {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  line-height: 0.8;
  color: rgba(15, 165, 233, 0.3);
  font-weight: 700;
  flex-shrink: 0;
}

.testimonial-card__text {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.75;
  flex: 1;
  font-style: normal;
}

.testimonial-card__footer {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-5);
}

.testimonial-card__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent-blue) 0%, var(--color-accent-pink) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: var(--text-xs);
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

.testimonial-card__meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.testimonial-card__author {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-white);
  font-style: normal;
}

.testimonial-card__role {
  font-size: var(--text-xs);
  color: var(--color-text-faint);
}

.testimonials-note {
  text-align: center;
  font-size: var(--text-xs);
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--space-3) var(--space-5);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-md);
  display: inline-block;
  margin-inline: auto;
  display: flex;
  justify-content: center;
}
</style>
