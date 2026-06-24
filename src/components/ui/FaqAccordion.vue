<template>
  <div class="faq-accordion">
    <div
      v-for="(item, index) in props.items"
      :key="index"
      class="faq-item reveal"
      :class="`reveal--delay-${Math.min(index + 1, 5)}`"
    >
      <button
        class="faq-item__trigger"
        :aria-expanded="openIndex === index"
        :aria-controls="`faq-panel-${uid}-${index}`"
        :id="`faq-trigger-${uid}-${index}`"
        @click="toggle(index)"
      >
        <span class="faq-item__question">{{ item.question }}</span>
        <span class="faq-item__icon" aria-hidden="true" :class="{ 'faq-item__icon--open': openIndex === index }">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <path d="M4 6l4 4 4-4"/>
          </svg>
        </span>
      </button>

      <div
        class="faq-item__panel"
        :id="`faq-panel-${uid}-${index}`"
        :aria-labelledby="`faq-trigger-${uid}-${index}`"
        role="region"
        :style="{ maxHeight: openIndex === index ? panelHeights[index] + 'px' : '0px' }"
        :ref="(el) => setRef(el as HTMLElement | null, index)"
      >
        <p class="faq-item__answer">{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { FaqItem } from '@/data/faq'

const props = defineProps<{ items: FaqItem[] }>()

const uid = Math.random().toString(36).slice(2, 8)
const openIndex = ref<number | null>(0)
const panelEls = ref<(HTMLElement | null)[]>([])
const panelHeights = ref<number[]>([])

function setRef(el: HTMLElement | null, index: number) {
  panelEls.value[index] = el
}

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

onMounted(() => {
  panelHeights.value = panelEls.value.map((el) => {
    if (!el) return 0
    const inner = el.querySelector('.faq-item__answer') as HTMLElement
    return inner ? inner.scrollHeight + 32 : 0
  })
})
</script>

<style scoped>
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.faq-item {
  border-bottom: 1px solid var(--color-border);
}

.faq-item:first-child {
  border-top: 1px solid var(--color-border);
}

.faq-item__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-5) 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.faq-item__question {
  font-family: var(--font-heading);
  font-size: var(--text-md);
  font-weight: 600;
  color: var(--color-white);
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.faq-item__icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-faint);
  transition: transform var(--transition-base), color var(--transition-fast);
}

.faq-item__icon svg {
  width: 16px;
  height: 16px;
}

.faq-item__icon--open {
  transform: rotate(180deg);
  color: var(--color-accent-blue);
}

.faq-item__trigger:hover .faq-item__question {
  color: var(--color-accent-blue);
}

.faq-item__panel {
  overflow: hidden;
  transition: max-height 320ms cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-item__answer {
  padding-bottom: var(--space-5);
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.7;
  max-width: 68ch;
}
</style>
