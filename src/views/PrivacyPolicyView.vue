<template>
  <div class="privacy-view">
    <div class="privacy-hero">
      <div class="container container--narrow">
        <div class="pill reveal">Legal</div>
        <h1 class="privacy-title reveal reveal--delay-1">Privacy Policy</h1>
        <p class="privacy-date reveal reveal--delay-2">Last updated: January 2025</p>
      </div>
    </div>

    <section class="privacy-body section--sm" aria-label="Privacy policy content">
      <div class="container container--narrow">
        <div class="privacy-content reveal">

          <div class="privacy-notice">
            <strong>Note:</strong> This is a placeholder privacy policy. The final legal text will be provided before production launch. If you have questions about data handling, please <RouterLink to="/contact">contact us</RouterLink>.
          </div>

          <h2>1. Introduction</h2>
          <p>
            SynApp ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and visit our website.
          </p>
          <p>
            Please read this policy carefully. If you disagree with its terms, please discontinue use of our site and services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Account registration information (name, email address, company name)</li>
            <li>Communications you send us via contact forms or email</li>
            <li>Information about your Telegram workspace (chats, users, as authorized by you)</li>
            <li>Payment information (processed securely by our payment provider)</li>
          </ul>
          <p>
            We may also collect certain information automatically when you use our services, such as IP address, browser type, pages visited, and interaction data.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and maintain our platform</li>
            <li>Process transactions and send related information</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send administrative communications about your account</li>
            <li>Improve and develop our services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our platform, subject to appropriate data processing agreements. We may also disclose your information when required by law.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your information. This includes encryption in transit (TLS), access controls, and regular security reviews. However, no electronic transmission or storage method is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your information for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting us. Certain information may be retained for legal compliance purposes.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have rights including:</p>
          <ul>
            <li>The right to access your personal data</li>
            <li>The right to correct inaccurate data</li>
            <li>The right to request deletion of your data</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>
          <p>To exercise any of these rights, please contact us using the information below.</p>

          <h2>8. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. Essential cookies required for the platform to function cannot be disabled.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
          </p>

          <h2>10. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated revision date. Continued use of our services after changes constitutes your acceptance of the revised policy.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us through our <RouterLink to="/contact">contact page</RouterLink>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import { useRevealOnScroll } from '@/composables/useRevealOnScroll'

usePageMeta('privacy')
useRevealOnScroll()
</script>

<style scoped>
.privacy-hero {
  padding-top: clamp(6rem, 14vw, 10rem);
  padding-bottom: clamp(2rem, 5vw, 4rem);
}

.privacy-title {
  font-size: var(--text-4xl);
  letter-spacing: -0.04em;
  margin-block: var(--space-4);
}

.privacy-date {
  font-size: var(--text-sm);
  color: var(--color-text-faint);
}

.privacy-body {
  padding-bottom: clamp(5rem, 12vw, 9rem);
}

.privacy-content {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.privacy-notice {
  padding: var(--space-5) var(--space-6);
  background: rgba(15, 165, 233, 0.06);
  border: 1px solid rgba(15, 165, 233, 0.18);
  border-radius: var(--radius-lg);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-10);
  line-height: 1.6;
}

.privacy-notice a {
  color: var(--color-accent-blue);
  font-weight: 500;
}

.privacy-content :deep(h2),
.privacy-content h2 {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: -0.02em;
  margin-top: var(--space-10);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
}

.privacy-content p {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.75;
  margin-bottom: var(--space-4);
}

.privacy-content ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
  padding-left: var(--space-2);
}

.privacy-content ul li {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.65;
  padding-left: var(--space-5);
  position: relative;
}

.privacy-content ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-accent-blue);
}

.privacy-content a {
  color: var(--color-accent-blue);
  font-weight: 500;
  text-decoration: none;
}

.privacy-content a:hover {
  color: var(--color-white);
}
</style>
