import { Reveal } from "@/components/ui/Reveal";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

const SOCIALS = [
  { href: "#", label: "X / Twitter" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal y={16}>
          <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
            <div className="max-w-xs">
              <p className="text-sm leading-relaxed text-mist">
                Independent web designer and developer, working with ambitious
                founders and product teams.
              </p>
            </div>

            <div className="flex flex-wrap gap-12 sm:gap-16">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-mist">
                  Sitemap
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {LINKS.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-sm text-ink/80 transition-colors hover:text-ink">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-mist">
                  Connect
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {SOCIALS.map((social) => (
                    <li key={social.label}>
                      <a href={social.href} className="text-sm text-ink/80 transition-colors hover:text-ink">
                        {social.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="mailto:youssifahmed911@gmail.com" className="text-sm text-ink/80 transition-colors hover:text-ink">
                      youssifahmed911@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-hairline pt-8">
            <p className="font-mono text-[11px] text-mist">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
