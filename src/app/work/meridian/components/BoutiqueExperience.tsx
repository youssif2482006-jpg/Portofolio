import Image from "next/image";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

export function BoutiqueExperience() {
  return (
    <section id="boutiques" className="relative scroll-mt-24 bg-[var(--mr-ivory)] text-[var(--mr-ivory-ink)]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <Reveal delay={0.05}>
            <p className="mr-eyebrow text-sm text-[var(--mr-gold-deep)]">The Meridian Boutique</p>
            <h2 className="mr-serif mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
              Step Into the Atelier
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--mr-ivory-mist)]">
              Visit one of our private boutiques for a guided tour of the collection, a tailored
              fitting, and a conversation with a Meridian specialist — by appointment only.
            </p>
            <div className="mt-8">
              <MagneticButton
                href="#contact"
                className="mr-shine mr-sans inline-flex items-center rounded-full bg-[var(--mr-ivory-ink)] px-7 py-3.5 text-[12px] uppercase tracking-[0.15em] text-[var(--mr-ivory)]"
              >
                Book a Private Appointment
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal scale={0.97} delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[rgba(34,29,21,0.15)]">
              <Image
                src="/images/meridian/boutique.jpg"
                alt="Meridian private boutique showroom interior"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
