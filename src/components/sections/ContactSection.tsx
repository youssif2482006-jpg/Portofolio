import { useState, type FormEvent } from 'react'
import { profile } from '../../data/profile'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Project inquiry from ${form.name || 'your website'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="px-6 py-28 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.1fr]">
        <SectionHeading
          eyebrow="Contact"
          title="Have a project in mind?"
          description="Tell me a bit about what you're building and I'll get back to you within a couple of days. This form opens your email client — swap it for a real backend/API when you're ready."
        />

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm">
                Name
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-sm text-[color:var(--color-ink)] outline-none transition focus:border-[color:var(--color-accent)]"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-sm text-[color:var(--color-ink)] outline-none transition focus:border-[color:var(--color-accent)]"
                  placeholder="jane@company.com"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm">
              Message
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="resize-none rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-sm text-[color:var(--color-ink)] outline-none transition focus:border-[color:var(--color-accent)]"
                placeholder="What are you looking to build?"
              />
            </label>

            <button
              type="submit"
              className="rounded-full bg-[color:var(--color-accent)] px-7 py-3 text-sm font-semibold text-[#05050a] transition hover:brightness-110"
            >
              Send message
            </button>

            <p className="text-xs text-[color:var(--color-ink-faint)]">
              Prefer email? Reach me directly at{' '}
              <a href={`mailto:${profile.email}`} className="text-[color:var(--color-accent)]">
                {profile.email}
              </a>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
