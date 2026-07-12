import { useEffect, useRef, Suspense, lazy } from 'react'
import gsap from 'gsap'
import { profile } from '../../data/profile'

const HeroBackground = lazy(() => import('./HeroBackground').then((m) => ({ default: m.HeroBackground })))

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('[data-hero-eyebrow]', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo('[data-hero-title]', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.3')
        .fromTo('[data-hero-sub]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo('[data-hero-cta]', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, '-=0.4')
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-[color:var(--color-border)]"
    >
      <Suspense fallback={null}>
        <HeroBackground />
      </Suspense>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10">
        <p
          data-hero-eyebrow
          className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]" />
          {profile.availability}
        </p>

        <h1
          data-hero-title
          className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient">{profile.role}</span>
          <br />
          building products that feel inevitable.
        </h1>

        <p data-hero-sub className="mt-6 max-w-xl text-lg text-[color:var(--color-ink-muted)]">
          {profile.tagline}
        </p>

        <div data-hero-cta className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[color:var(--color-accent)] px-7 py-3 text-sm font-semibold text-[#05050a] transition hover:brightness-110"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[color:var(--color-border)] px-7 py-3 text-sm font-semibold text-[color:var(--color-ink)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
          >
            Start a project
          </a>
        </div>
      </div>

      <div
        data-hero-cta
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[color:var(--color-ink-faint)]"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-[color:var(--color-accent)] to-transparent" />
      </div>
    </section>
  )
}
