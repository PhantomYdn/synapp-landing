<template>
    <div
        class="screenshot-placeholder"
        :style="{ aspectRatio: ratio }"
        :class="{ 'is-clickable': src }"
        role="button"
        tabindex="0"
        @click="openModal"
        @keydown.enter="openModal"
    >
        <img
            v-if="src"
            :src="src"
            :alt="label"
            loading="lazy"
            class="screenshot-img"
        />
        <div v-else class="screenshot-placeholder__inner">
            <svg class="screenshot-placeholder__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
            </svg>
            <span class="screenshot-placeholder__label">{{ label }}</span>
        </div>

        <!-- Lightbox Modal -->
        <Teleport to="body">
            <div
                v-if="isModalOpen"
                class="screenshot-modal"
                @click.self="closeModal"
                @keydown.esc="closeModal"
                role="dialog"
                aria-modal="true"
                :aria-label="`${label} – enlarged view`"
            >
                <div class="screenshot-modal__content">
                    <button class="screenshot-modal__close" @click="closeModal" aria-label="Close enlarged view">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    <img :src="src" :alt="label" class="screenshot-modal__image" />
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(
    defineProps<{
        label: string
        src?: string | null
        ratio?: string
    }>(),
    { src: null, ratio: '16/9' }
)

const isModalOpen = ref(false)

const openModal = () => {
    if (props.src) {
        isModalOpen.value = true
        document.body.style.overflow = 'hidden'
    }
}

const closeModal = () => {
    isModalOpen.value = false
    document.body.style.overflow = ''
}

// Clean up body overflow if component unmounts while modal is open
watch(isModalOpen, (newVal) => {
    if (!newVal) {
        document.body.style.overflow = ''
    }
})
</script>

<style scoped>
.screenshot-placeholder {
    width: 100%;
    background: var(--color-surface);
    border: 1px dashed var(--color-border-strong);
    border-radius: var(--radius-lg);
    overflow: hidden;
    position: relative;
}

.screenshot-placeholder.is-clickable {
    cursor: pointer;
}

.screenshot-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.screenshot-placeholder__inner {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-3);
    padding: var(--space-6);
}

.screenshot-placeholder__icon {
    width: 32px;
    height: 32px;
    color: var(--color-text-faint);
}

.screenshot-placeholder__label {
    font-size: var(--text-xs);
    color: var(--color-text-faint);
    text-align: center;
    font-family: var(--font-body);
    letter-spacing: 0.02em;
    max-width: 24ch;
}

/* Lightbox overlay */
.screenshot-modal {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4px);
    padding: var(--space-4);
    animation: fadeIn 0.2s ease;
}

.screenshot-modal__content {
    position: relative;
    max-width: 95vw;
    max-height: 95vh;
}

.screenshot-modal__image {
    display: block;
    max-width: 95vw;
    max-height: 95vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: var(--radius-md);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.screenshot-modal__close {
    position: absolute;
    top: -12px;
    right: -12px;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: var(--color-surface);
    color: var(--color-text);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: background 0.2s, transform 0.2s;
}

.screenshot-modal__close:hover {
    background: var(--color-border-strong);
    transform: scale(1.05);
}

.screenshot-modal__close svg {
    width: 20px;
    height: 20px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>