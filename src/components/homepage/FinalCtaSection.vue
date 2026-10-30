<template>
  <section class="final-cta" aria-labelledby="final-cta-heading">
    <div class="final-cta__bg" aria-hidden="true">
      <div class="final-cta__orb final-cta__orb--blue"></div>
      <div class="final-cta__orb final-cta__orb--pink"></div>
    </div>
    <div class="container final-cta__inner">
      <div class="final-cta__content reveal">
        <span class="pill">Ready to take control?</span>
        <h2 id="final-cta-heading" class="final-cta__title reveal reveal--delay-1">
          Your Telegram Operations,<br />
          <span class="gradient-text">Under Control.</span>
        </h2>
        <p class="final-cta__sub reveal reveal--delay-2">
          Book a demo and see exactly how SynApp would work for your setup. No pressure — just a clear look at what's possible.
        </p>
        <div class="final-cta__actions reveal reveal--delay-3">
          <RouterLink to="/contact/" class="final-btn final-btn--primary">
            Book a Demo
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </RouterLink>
          <RouterLink to="/pricing/" class="final-btn final-btn--ghost">
            View Pricing
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.final-cta {
  position: relative;
  padding-block: clamp(5rem, 12vw, 9rem);
  overflow: hidden;
  border-top: 1px solid var(--color-border);
}

.final-cta__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.final-cta__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
}

.final-cta__orb--blue {
  width: 600px;
  height: 600px;
  bottom: -200px;
  left: 50%;
  transform: translateX(-60%);
  background: rgba(15, 165, 233, 0.12);
}

.final-cta__orb--pink {
  width: 400px;
  height: 400px;
  top: -100px;
  right: 10%;
  background: rgba(236, 71, 153, 0.09);
}

.final-cta__inner {
  position: relative;
  z-index: 1;
  text-align: center;
}

.final-cta__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
}

.final-cta__title {
  font-size: var(--text-5xl);
  letter-spacing: -0.04em;
  line-height: 1.08;
  max-width: 16ch;
}

.final-cta__sub {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  max-width: 50ch;
  line-height: 1.65;
}

.final-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  justify-content: center;
  margin-top: var(--space-2);
}

.final-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-base);
  text-decoration: none;
  padding: 0.9375rem 2rem;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.final-btn svg {
  width: 16px;
  height: 16px;
  transition: transform var(--transition-fast);
}

.final-btn--primary {
  background: var(--color-accent-blue);
  color: #fff;
  border: none;
}

.final-btn--primary:hover {
  background: #0c94d1;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(15,165,233,0.45);
}

.final-btn--primary:hover svg {
  transform: translateX(3px);
}

.final-btn--ghost {
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  background: transparent;
}

.final-btn--ghost:hover {
  color: var(--color-white);
  border-color: var(--color-border-strong);
  transform: translateY(-1px);
}
</style>
