"use client";

import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { MagneticButton } from "./MagneticButton";
import { LiveTime } from "./LiveTime";

const LINKS = [
  { href: "#collections", label: "Collections" },
  { href: "#craftsmanship", label: "Craftsmanship" },
  { href: "#heritage", label: "Heritage" },
  { href: "#boutiques", label: "Boutiques" },
  { href: "#contact", label: "Contact" },
];

export function MeridianNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(() => {
    if (prefersReduced) return;
    gsap.fromTo(
      "[data-mr-nav]",
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.15, ease: "power3.out" }
    );
  }, [prefersReduced]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        data-mr-nav
        className={`flex items-center justify-between px-5 py-4 transition-colors duration-500 sm:px-8 ${
          scrolled ? "mr-glass" : "bg-transparent"
        }`}
      >
        <div className="flex items-baseline gap-3">
          <a href="#top" className="mr-serif text-lg font-medium tracking-[0.2em] text-[var(--mr-text)]">
            MERIDIAN
          </a>
          <LiveTime className="hidden text-[11px] text-[var(--mr-mist)] sm:inline" />
        </div>

        <ul className="hidden flex-1 items-center justify-center gap-9 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mr-sans mr-underline text-[13px] uppercase tracking-[0.1em] text-[var(--mr-mist)] transition-colors hover:text-[var(--mr-text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <MagneticButton
            href="#boutiques"
            className="mr-shine mr-sans inline-flex items-center rounded-full border border-[var(--mr-gold)]/50 px-5 py-2.5 text-[12px] uppercase tracking-[0.15em] text-[var(--mr-text)] transition-colors hover:border-[var(--mr-gold)]"
          >
            Book an Appointment
          </MagneticButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--mr-text)] md:hidden"
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-full bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="mr-glass mx-4 mt-1 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="mr-sans rounded-xl px-4 py-3 text-[15px] text-[var(--mr-text)]/90 transition-colors hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#boutiques"
            onClick={() => setOpen(false)}
            className="mr-sans mt-2 rounded-xl border border-[var(--mr-gold)]/50 px-4 py-3 text-center text-[13px] uppercase tracking-[0.1em]"
          >
            Book an Appointment
          </a>
        </div>
      )}
    </header>
  );
}
