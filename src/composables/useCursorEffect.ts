import { onMounted, onUnmounted } from 'vue'

export function useCursorEffect() {
  let cursorDot: HTMLElement | null = null
  let cursorGlow: HTMLElement | null = null
  let rafId: number | null = null

  let mouseX = 0
  let mouseY = 0
  let dotX = 0
  let dotY = 0
  let glowX = 0
  let glowY = 0

  const isTouch = () =>
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(pointer: coarse)').matches

  const isMobile = () => window.innerWidth < 1024

  const LERP_DOT = 0.35
  const LERP_GLOW = 0.09

  function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t
  }

  function loop() {
    dotX = lerp(dotX, mouseX, LERP_DOT)
    dotY = lerp(dotY, mouseY, LERP_DOT)
    glowX = lerp(glowX, mouseX, LERP_GLOW)
    glowY = lerp(glowY, mouseY, LERP_GLOW)

    if (cursorDot) {
      cursorDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`
    }
    if (cursorGlow) {
      cursorGlow.style.transform = `translate(${glowX - 200}px, ${glowY - 200}px)`
    }

    rafId = requestAnimationFrame(loop)
  }

  function onMouseMove(e: MouseEvent) {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  function onMouseOver(e: MouseEvent) {
    const target = e.target as HTMLElement
    const isInteractive = target.closest('a, button, [data-cursor-pink]')
    if (isInteractive) {
      cursorDot?.classList.add('cursor-dot--pink')
      cursorGlow?.classList.add('cursor-glow--pink')
    }
  }

  function onMouseOut(e: MouseEvent) {
    const target = e.target as HTMLElement
    const isInteractive = target.closest('a, button, [data-cursor-pink]')
    if (isInteractive) {
      cursorDot?.classList.remove('cursor-dot--pink')
      cursorGlow?.classList.remove('cursor-glow--pink')
    }
  }

  onMounted(() => {
    if (isTouch() || isMobile()) return

    // Create cursor elements
    cursorDot = document.createElement('div')
    cursorDot.className = 'cursor-dot'

    cursorGlow = document.createElement('div')
    cursorGlow.className = 'cursor-glow'

    document.body.appendChild(cursorGlow)
    document.body.appendChild(cursorDot)

    // ❌ Removed: document.body.classList.add('has-custom-cursor')
    // This prevents any CSS rule that would hide the original cursor.

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseover', onMouseOver, { passive: true })
    document.addEventListener('mouseout', onMouseOut, { passive: true })

    rafId = requestAnimationFrame(loop)
  })

  onUnmounted(() => {
    if (rafId) cancelAnimationFrame(rafId)
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseover', onMouseOver)
    document.removeEventListener('mouseout', onMouseOut)
    cursorDot?.remove()
    cursorGlow?.remove()
    // No need to remove a class that wasn't added.
  })
}