import type Lenis from 'lenis'

/**
 * Lenis owns the scroll position for the whole app. Anything that scrolls
 * programmatically must go through it — calling native `scrollIntoView` while
 * Lenis is running desyncs the two, which leaves ScrollTrigger evaluating stale
 * positions and reveal animations never firing.
 */
let instance: Lenis | null = null

export function setLenis(lenis: Lenis) {
  instance = lenis
}

export function getLenis() {
  return instance
}

/** Height of the sticky chrome, so anchored sections aren't hidden behind it. */
function headerOffset(): number {
  const header = document.querySelector('.nav-shell') as HTMLElement | null
  return header ? header.offsetHeight + 12 : 96
}

/**
 * Scrolls to an in-page target. Returns false when the element isn't on the
 * current page, so callers can fall back to a route navigation.
 */
export function scrollToTarget(selector: string): boolean {
  let el: HTMLElement | null = null
  try {
    el = document.querySelector(selector)
  } catch {
    return false
  }
  if (!el) return false

  if (instance) {
    instance.scrollTo(el, { offset: -headerOffset() })
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset()
    window.scrollTo({ top, behavior: 'smooth' })
  }
  return true
}
