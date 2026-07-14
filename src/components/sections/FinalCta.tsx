"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AmbientGlow } from "@/components/ui/AmbientGlow";

const inputClasses =
  "w-full rounded-[10px] border border-hairline bg-ink/[0.03] px-4 py-3 text-[15px] text-ink placeholder:text-mist/70 outline-none transition-colors focus:border-accent/50";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

type Status = "idle" | "sending" | "sent" | "error";

export function FinalCta() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const budgetInput = form.elements.namedItem("budget") as HTMLInputElement;
    const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement;
    const replyToInput = form.elements.namedItem("reply_to") as HTMLInputElement;

    replyToInput.value = emailInput.value;

    const originalMessage = messageInput.value;
    const budgetLine = budgetInput.value ? `Budget: $${budgetInput.value}\n` : "";
    messageInput.value = `Email: ${emailInput.value}\n${budgetLine}\n${originalMessage}`;

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      messageInput.value = originalMessage;
    }
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
            a couple of hours.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass mx-auto mt-12 rounded-lg p-6 text-left sm:p-10">
            {status === "sent" ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <p className="font-display text-xl font-semibold">
                  Message sent.
                </p>
                <p className="max-w-xs text-sm text-mist">
                  Thanks for reaching out — I&apos;ll get back to you within
                  a couple of hours.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="grid gap-5">
                <input type="hidden" name="reply_to" />
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
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[15px] text-mist">
                      $
                    </span>
                    <input
                      id="budget"
                      name="budget"
                      type="number"
                      min="0"
                      step="100"
                      inputMode="numeric"
                      className={`${inputClasses} pl-8`}
                      placeholder="15,000"
                    />
                  </div>
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

                {status === "error" && (
                  <p className="text-sm text-accent-deep">
                    Something went wrong sending your message — please try again.
                  </p>
                )}

                <MagneticButton
                  variant="primary"
                  className="w-full sm:w-auto"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </MagneticButton>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
