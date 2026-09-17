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

function find(selector: string): HTMLElement | null {
  try {
    return document.querySelector(selector)
  } catch {
    return null
  }
}

/** Jump straight to the target with no animation — used while layout is moving. */
function jumpTo(el: HTMLElement) {
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset()
  if (instance) instance.scrollTo(top, { immediate: true })
  else window.scrollTo({ top, behavior: 'auto' })
}

/**
 * Scrolls to an in-page target. Returns false when the element isn't on the
 * current page, so callers can fall back to a route navigation.
 */
export function scrollToTarget(selector: string): boolean {
  const el = find(selector)
  if (!el) return false

  if (instance) {
    instance.scrollTo(el, { offset: -headerOffset() })
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset()
    window.scrollTo({ top, behavior: 'smooth' })
  }
  return true
}

/**
 * Scrolls to a target on a page whose layout is still moving, and *keeps it
 * there* until the movement stops.
 *
 * Landing on the home page from another route, the document grows underneath
 * the scroll: the hero's WebGL canvas sizes itself, webfonts swap, reveal
 * animations release their transforms, and — the big one — GSAP pins
 * `#manifesto` and the frameworks rail, each inserting a pin-spacer worth
 * roughly a viewport of extra scroll height. Any single measurement is stale
 * almost immediately, which is why a footer "Solutions" link kept stopping on
 * the manifesto.
 *
 * So instead of measuring once and hoping: jump to the target, then re-check
 * every frame and re-jump whenever it has drifted, until it holds still. That
 * is correct regardless of *what* moved or when.
 */
export function scrollToTargetWhenReady(selector: string, settleMs = 1200): Promise<boolean> {
  return new Promise((resolve) => {
    const deadline = performance.now() + settleMs
    let seen = false
    let cancelled = false

    // Never fight the visitor: the moment they scroll or key, stop correcting.
    const cancel = () => {
      cancelled = true
    }
    const events = ['wheel', 'touchstart', 'keydown'] as const
    events.forEach((e) => window.addEventListener(e, cancel, { passive: true, once: true }))

    const stop = (result: boolean) => {
      events.forEach((e) => window.removeEventListener(e, cancel))
      resolve(result)
    }

    let steadyFrames = 0

    const tick = () => {
      if (cancelled) {
        stop(seen)
        return
      }

      const el = find(selector)
      if (el) {
        seen = true
        // Distance between where the target sits and where it should sit.
        const drift = el.getBoundingClientRect().top - headerOffset()
        if (Math.abs(drift) > 2) {
          jumpTo(el)
          steadyFrames = 0
        } else {
          steadyFrames += 1
        }

        // Held still for a few frames: the page has stopped moving, so finish
        // now rather than waiting out the deadline. Keeps the cover-up short.
        if (steadyFrames >= 5) {
          stop(true)
          return
        }
      }

      if (performance.now() < deadline) {
        requestAnimationFrame(tick)
        return
      }
      stop(seen)
    }

    requestAnimationFrame(tick)
  })
}
