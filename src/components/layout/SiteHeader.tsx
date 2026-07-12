import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]/80 backdrop-blur-md' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#home" className="font-display text-sm font-semibold tracking-wide">
          your<span className="text-[color:var(--color-accent)]">name</span>.dev
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[color:var(--color-ink-muted)] transition hover:text-[color:var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-[color:var(--color-border)] px-5 py-2 text-sm font-medium transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] md:inline-block"
        >
          Let's talk
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-[color:var(--color-ink)] transition ${menuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            className={`h-px w-5 bg-[color:var(--color-ink)] transition ${menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-[color:var(--color-ink-muted)] transition hover:text-[color:var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
