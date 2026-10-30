import { onMounted, onUnmounted, type Ref } from 'vue'

export function useRevealOnScroll(containerRef?: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | null = null

  const initObserver = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      // Immediately show all reveal elements
      const elements = document.querySelectorAll<HTMLElement>('.reveal')
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('is-pending')
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const root = containerRef?.value ?? document
    const elements = root.querySelectorAll<HTMLElement>('.reveal')
    elements.forEach((el) => {
      // Never hide above-the-fold content while waiting for an observer callback.
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('is-visible')
      } else {
        el.classList.add('is-pending')
        observer!.observe(el)
      }
    })
  }

  onMounted(initObserver)

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { initObserver }
}
