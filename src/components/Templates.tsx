"use client";

import { useState } from "react";
import { niches, templates } from "@/lib/content";
import BrowserMockup from "./BrowserMockup";
import Reveal from "./Reveal";

export default function Templates() {
  const [active, setActive] = useState(niches[0].id);
  const visible = templates.filter((t) => t.nicheId === active);

  return (
    <section id="plantillas" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Plantillas
          </h2>
          <p className="mt-4 max-w-xl text-lg text-neutral-400">
            Elige el nicho de tu negocio para ver las plantillas disponibles.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap gap-3">
            {niches.map((niche) => (
              <button
                key={niche.id}
                type="button"
                onClick={() => setActive(niche.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  active === niche.id
                    ? "bg-white text-black"
                    : "bg-white/10 text-neutral-300 hover:bg-white/15"
                }`}
              >
                {niche.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {visible.map((template, i) => (
            <Reveal key={template.name} delay={i * 80}>
              <a
                href={template.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <BrowserMockup name={template.name} />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">
                      {template.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-neutral-400">
                      {template.description}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-sm text-neutral-500 transition-colors group-hover:text-white">
                    Ver →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
