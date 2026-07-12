import { publishedSites } from "@/lib/content";
import BrowserMockup from "./BrowserMockup";
import Reveal from "./Reveal";

export default function PublishedSites() {
  return (
    <section id="sitios" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Sitios publicados
          </h2>
          <p className="mt-4 max-w-xl text-lg text-neutral-400">
            Negocios reales, en línea y totalmente funcionales.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {publishedSites.map((site, i) => (
            <Reveal key={site.name} delay={i * 80}>
              <a
                href={site.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <BrowserMockup name={site.name} accent={site.accent} />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">
                      {site.name}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      {site.niche}
                    </p>
                    <p className="mt-2 max-w-md text-sm text-neutral-400">
                      {site.description}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-sm text-neutral-500 transition-colors group-hover:text-white">
                    Visitar →
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
