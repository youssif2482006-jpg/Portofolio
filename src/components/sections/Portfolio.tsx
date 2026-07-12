"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectVisual } from "@/components/sections/ProjectVisual";
import { projects } from "@/data/projects";
import { easeOut } from "@/lib/motion";

export function Portfolio() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
          Selected work
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Recent projects worth a second look.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08} y={16} scale={0.97}>
            <motion.article
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative h-full overflow-hidden rounded-lg border border-hairline bg-surface transition-colors duration-300 hover:border-accent/40"
            >
              <motion.div
                variants={{
                  rest: { boxShadow: "0 0 0 rgba(255,107,61,0)" },
                  hover: {
                    boxShadow:
                      "0 20px 60px -20px color-mix(in srgb, var(--color-accent) 45%, transparent)",
                  },
                }}
                transition={{ duration: 0.35, ease: easeOut }}
                className="absolute inset-0 rounded-lg"
              />

              <motion.div
                variants={{ rest: { y: 0 }, hover: { y: -4 } }}
                transition={{ duration: 0.4, ease: easeOut }}
                className="relative"
              >
                <div className="h-64 w-full">
                  <ProjectVisual pattern={project.pattern} />
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-mist">
                        {project.category}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                        {project.name}
                      </h3>
                    </div>
                    <span className="whitespace-nowrap rounded-pill border border-hairline px-3 py-1 font-mono text-[11px] text-accent-deep">
                      {project.metric}
                    </span>
                  </div>

                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-mist">
                    {project.blurb}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-pill bg-white/5 px-3 py-1 font-mono text-[11px] text-mist"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
