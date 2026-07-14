"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const LINKS = [
  { href: "#specs", label: "Specs" },
  { href: "#design", label: "Design" },
  { href: "#gallery", label: "Gallery" },
];

export function BentleyNav() {
  const [open, setOpen] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(() => {
    if (prefersReduced) return;
    gsap.fromTo(
      "[data-bt-nav]",
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.15, ease: "power3.out" }
    );
  }, [prefersReduced]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav data-bt-nav className="bt-glass flex items-center justify-between px-5 py-4 sm:px-8">
        <a href="#overview" className="bt-serif text-lg font-medium tracking-[0.15em] text-white">
          BENTLEY
        </a>

        <ul className="hidden flex-1 items-center justify-center gap-9 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-[13px] uppercase tracking-[0.08em] text-[var(--bt-mist)] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white md:hidden"
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-white transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-full bg-white transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-full bg-white transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="bt-glass mx-4 mt-1 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-body text-[15px] text-white/90 transition-colors hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
