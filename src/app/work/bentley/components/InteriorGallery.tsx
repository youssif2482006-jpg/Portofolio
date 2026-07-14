import Image from "next/image";
import { Reveal } from "./Reveal";
import { withBasePath } from "@/lib/basePath";
import { galleryItems } from "../data/content";

export function InteriorGallery() {
  return (
    <section id="gallery" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 sm:px-8 sm:py-36">
      <Reveal>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-[var(--bt-mist)]">
          Interior Gallery
        </p>
        <h2 className="bt-serif mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl">
          Luxury, considered at every scale.
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col gap-20">
        {galleryItems.map((item, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={item.title}
              className={`flex flex-col items-center gap-8 md:flex-row md:gap-14 ${reverse ? "md:flex-row-reverse" : ""}`}
            >
              <Reveal scale={0.98} className="w-full md:w-3/5">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-[var(--bt-border)]">
                  <Image
                    src={withBasePath(item.image)}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1} className="w-full md:w-2/5">
                <h3 className="bt-serif text-2xl font-medium tracking-tight sm:text-3xl">{item.title}</h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[var(--bt-mist)]">
                  {item.caption}
                </p>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
