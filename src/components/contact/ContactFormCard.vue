<template>
  <div class="contact-form-card glass">
    <!-- Success state -->
    <Transition name="fade">
      <div v-if="submitted" class="form-success" role="alert" aria-live="polite">
        <div class="form-success__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h3 class="form-success__title">{{ t('contact.success_title') }}</h3>
        <p class="form-success__sub">{{ t('contact.success_sub') }}</p>
      </div>
    </Transition>

    <!-- Form state -->
    <Transition name="fade">
      <div v-if="!submitted" class="form-wrapper">
        <h2 class="form-title">{{ t('contact.form_title') }}</h2>

        <form @submit.prevent="handleSubmit" novalidate aria-label="Contact form">
          <!-- Honeypot (hidden from real users) -->
          <input
            type="text"
            name="_hp"
            v-model="form._hp"
            tabindex="-1"
            autocomplete="off"
            aria-hidden="true"
            class="sr-only"
          />

          <div class="form-row">
            <div class="form-group" :class="{ 'form-group--error': errors.name }">
              <label for="contact-name" class="form-label">{{ t('contact.field_name') }} <span aria-hidden="true" class="required">*</span></label>
              <input
                id="contact-name"
                type="text"
                v-model="form.name"
                class="form-input"
                autocomplete="name"
                :aria-describedby="errors.name ? 'name-error' : undefined"
                :aria-invalid="!!errors.name"
                @blur="touchField('name')"
              />
              <p v-if="errors.name" class="form-error" id="name-error" role="alert">{{ errors.name }}</p>
            </div>

            <div class="form-group" :class="{ 'form-group--error': errors.email }">
              <label for="contact-email" class="form-label">{{ t('contact.field_email') }} <span aria-hidden="true" class="required">*</span></label>
              <input
                id="contact-email"
                type="email"
                v-model="form.email"
                class="form-input"
                autocomplete="email"
                :aria-describedby="errors.email ? 'email-error' : undefined"
                :aria-invalid="!!errors.email"
                @blur="touchField('email')"
              />
              <p v-if="errors.email" class="form-error" id="email-error" role="alert">{{ errors.email }}</p>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group" :class="{ 'form-group--error': errors.company }">
              <label for="contact-company" class="form-label">{{ t('contact.field_company') }} <span aria-hidden="true" class="required">*</span></label>
              <input
                id="contact-company"
                type="text"
                v-model="form.company"
                class="form-input"
                autocomplete="organization"
                :aria-describedby="errors.company ? 'company-error' : undefined"
                :aria-invalid="!!errors.company"
                @blur="touchField('company')"
              />
              <p v-if="errors.company" class="form-error" id="company-error" role="alert">{{ errors.company }}</p>
            </div>

            <div class="form-group">
              <label for="contact-role" class="form-label">{{ t('contact.field_role') }}</label>
              <input
                id="contact-role"
                type="text"
                v-model="form.role"
                class="form-input"
                autocomplete="organization-title"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="contact-team-size" class="form-label">{{ t('contact.field_team_size') }}</label>
            <input
              id="contact-team-size"
              type="text"
              v-model="form.teamSize"
              class="form-input"
              placeholder="e.g. 20 chats, 5000 users"
            />
          </div>

          <div class="form-group" :class="{ 'form-group--error': errors.message }">
            <label for="contact-message" class="form-label">{{ t('contact.field_message') }} <span aria-hidden="true" class="required">*</span></label>
            <textarea
              id="contact-message"
              v-model="form.message"
              class="form-input form-textarea"
              rows="5"
              :aria-describedby="errors.message ? 'message-error' : undefined"
              :aria-invalid="!!errors.message"
              @blur="touchField('message')"
            ></textarea>
            <p v-if="errors.message" class="form-error" id="message-error" role="alert">{{ errors.message }}</p>
          </div>

          <p v-if="submitError" class="form-submit-error" role="alert">{{ submitError }}</p>

          <button
            type="submit"
            class="form-submit"
            :disabled="loading"
            :aria-busy="loading"
          >
            <svg v-if="loading" class="form-spinner" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.2"/>
              <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <span>{{ loading ? 'Sending…' : t('contact.submit') }}</span>
          </button>
        </form>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { submitContactForm, validateContactForm } from '@/services/contactForm.service'

const { t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  company: '',
  role: '',
  teamSize: '',
  message: '',
  _hp: '',
})

const errors = reactive<Record<string, string>>({})
const touched = reactive<Record<string, boolean>>({})
const loading = ref(false)
const submitted = ref(false)
const submitError = ref('')

function touchField(field: string) {
  touched[field] = true
  validateField(field)
}

function validateField(field: string) {
  const result = validateContactForm(form)
  if (result[field]) {
    errors[field] = result[field]
  } else {
    delete errors[field]
  }
}

async function handleSubmit() {
  // Mark all fields as touched
  ;['name', 'email', 'company', 'message'].forEach((f) => {
    touched[f] = true
  })

  // Validate all fields
  const validationErrors = validateContactForm(form)
  Object.keys(validationErrors).forEach((key) => {
    errors[key] = validationErrors[key]
  })

  if (Object.keys(validationErrors).length > 0) return

  loading.value = true
  submitError.value = ''

  try {
    await submitContactForm(form)
    submitted.value = true
  } catch (err) {
    submitError.value = 'Something went wrong. Please try again or email us directly.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-form-card {
  border-radius: var(--radius-xl);
  padding: clamp(var(--space-6), 5vw, var(--space-10));
  position: relative;
  min-height: 400px;
}

.form-title {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: var(--space-8);
  letter-spacing: -0.03em;
}

.form-wrapper {
  width: 100%;
}

/* Form layout */
.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
}

@media (min-width: 640px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
}

.form-group:last-child {
  margin-bottom: 0;
}

.form-label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-muted);
}

.required {
  color: var(--color-accent-pink);
  margin-left: 2px;
}

.form-input {
  width: 100%;
  background: rgba(8, 11, 23, 0.6);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  padding: 0.75rem 1rem;
  color: var(--color-white);
  font-size: var(--text-base);
  font-family: var(--font-body);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  outline: none;
}

.form-input::placeholder {
  color: var(--color-text-faint);
}

.form-input:focus {
  border-color: rgba(15, 165, 233, 0.5);
  box-shadow: 0 0 0 3px rgba(15, 165, 233, 0.12);
}

.form-group--error .form-input {
  border-color: rgba(236, 71, 153, 0.5);
}

.form-group--error .form-input:focus {
  box-shadow: 0 0 0 3px rgba(236, 71, 153, 0.12);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-error {
  font-size: var(--text-xs);
  color: var(--color-accent-pink);
  margin: 0;
}

.form-submit-error {
  font-size: var(--text-sm);
  color: var(--color-accent-pink);
  margin-bottom: var(--space-4);
}

.form-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  width: 100%;
  margin-top: var(--space-6);
  padding: 0.9375rem;
  background: var(--color-accent-blue);
  color: #fff;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-base);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
}

.form-submit:hover:not(:disabled) {
  background: #0c94d1;
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(15,165,233,0.4);
}

.form-submit:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
}

.form-spinner {
  width: 18px;
  height: 18px;
  animation: spin 0.8s linear infinite;
  flex-shrink: 0;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Success state */
.form-success {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  text-align: center;
  padding: var(--space-10);
}

.form-success__icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(15, 165, 233, 0.1);
  border: 1px solid rgba(15, 165, 233, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent-blue);
}

.form-success__icon svg {
  width: 28px;
  height: 28px;
}

.form-success__title {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: -0.03em;
}

.form-success__sub {
  font-size: var(--text-base);
  color: var(--color-text-muted);
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 300ms ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
