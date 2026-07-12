import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            Sitios web que hacen crecer tu negocio.
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400 sm:text-xl">
            Diseño y desarrollo de páginas web a la medida. Explora proyectos
            reales que ya están en línea o elige una plantilla lista para tu
            tipo de negocio.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#sitios"
              className="rounded-full bg-white px-7 py-3 text-base font-medium text-black transition-opacity hover:opacity-85"
            >
              Ver sitios publicados
            </a>
            <a
              href="#plantillas"
              className="rounded-full bg-white/10 px-7 py-3 text-base font-medium text-white transition-colors hover:bg-white/15"
            >
              Ver plantillas
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
