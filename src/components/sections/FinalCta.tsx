"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AmbientGlow } from "@/components/ui/AmbientGlow";

const inputClasses =
  "w-full rounded-[10px] border border-hairline bg-white/[0.03] px-4 py-3 text-[15px] text-ink placeholder:text-mist/70 outline-none transition-colors focus:border-accent/50";

export function FinalCta() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 opacity-80"
      >
        <AmbientGlow className="inset-0" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
            Request a free demo
          </p>
          <h2 className="mx-auto mt-5 max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s make something worth looking at.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-mist">
            Tell me a little about your project and timeline. I reply within
            two business days.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass mx-auto mt-12 rounded-lg p-6 text-left sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <p className="font-display text-xl font-semibold">
                  Message sent.
                </p>
                <p className="max-w-xs text-sm text-mist">
                  Thanks for reaching out — I&apos;ll get back to you within
                  two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-mist">
                      Name
                    </label>
                    <input id="name" name="name" type="text" required className={inputClasses} placeholder="Jordan Rivera" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-mist">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required className={inputClasses} placeholder="jordan@company.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-mist">
                    Project budget
                  </label>
                  <select id="budget" name="budget" className={`${inputClasses} appearance-none`} defaultValue="">
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option value="10-25k">$10k – $25k</option>
                    <option value="25-50k">$25k – $50k</option>
                    <option value="50k+">$50k+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-mist">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className={inputClasses}
                    placeholder="What are you building, and what's the timeline?"
                  />
                </div>

                <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <MagneticButton variant="primary" className="w-full sm:w-auto">
                    Send message
                  </MagneticButton>
                  <a
                    href="mailto:youssifahmed911@gmail.com"
                    className="text-sm text-mist underline decoration-hairline underline-offset-4 transition-colors hover:text-ink"
                  >
                    or email youssifahmed911@gmail.com
                  </a>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
