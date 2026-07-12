import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[color:var(--color-ink-faint)] sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[color:var(--color-accent)]"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
