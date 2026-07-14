import { Reveal } from "./Reveal";

const LINKS = [
  { href: "#collections", label: "Collections" },
  { href: "#craftsmanship", label: "Craftsmanship" },
  { href: "#heritage", label: "Heritage" },
  { href: "#boutiques", label: "Boutiques" },
];

export function MeridianFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-[rgba(34,29,21,0.15)] bg-[var(--mr-ivory)] text-[var(--mr-ivory-ink)]"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mr-serif text-xl font-medium tracking-[0.15em]">MERIDIAN</p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--mr-ivory-mist)]">
                An independent maison of fine watchmaking — precision, patience, and a
                singular obsession with time.
              </p>
            </div>

            <div>
              <p className="mr-sans text-[11px] uppercase tracking-[0.15em] text-[var(--mr-ivory-mist)]">
                Sitemap
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="mr-underline text-sm text-[var(--mr-ivory-ink)]/80">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mr-sans text-[11px] uppercase tracking-[0.15em] text-[var(--mr-ivory-mist)]">
                Correspondence
              </p>
              <address className="mt-4 flex flex-col gap-1 text-sm not-italic text-[var(--mr-ivory-ink)]/80">
                <span>By private appointment only</span>
                <span className="text-[var(--mr-ivory-mist)]">concierge@meridian.example</span>
              </address>
            </div>

            <div>
              <p className="mr-sans text-[11px] uppercase tracking-[0.15em] text-[var(--mr-ivory-mist)]">
                Follow
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Instagram", "X / Twitter"].map((social) => (
                  <span key={social} className="mr-underline text-[13px] text-[var(--mr-ivory-mist)]">
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-2 border-t border-[rgba(34,29,21,0.15)] pt-6 text-xs text-[var(--mr-ivory-mist)] sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Meridian. A concept case study.</span>
            <span>Unofficial concept design — not a real retailer.</span>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
