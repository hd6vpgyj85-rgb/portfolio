import Reveal from "./Reveal";

type Plan = {
  name: string;
  price: string;
  audience: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Landing Page",
    price: "Desde $500 MXN",
    audience: "Presencia en línea rápida y efectiva para tu negocio.",
    features: [
      "Página única con las secciones esenciales: inicio, servicios y contacto",
      "Diseño responsive para móvil y escritorio",
      "Formulario de contacto conectado a tu correo o WhatsApp",
      "Enlaces a tus redes sociales",
      "Una ronda de ajustes antes de la entrega",
    ],
  },
  {
    name: "E-commerce",
    price: "Desde $1,000 MXN",
    audience: "Para negocios que venden productos en línea.",
    features: [
      "Catálogo de productos organizado por categorías",
      "Carrito de compras y proceso de pago",
      "Panel para administrar productos y pedidos",
      "Diseño responsive para móvil y escritorio",
      "Una ronda de ajustes antes de la entrega",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="mt-1 shrink-0 text-neutral-500"
    >
      <path
        d="M3 8.5L6.5 12L13 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="precios" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Precios
          </h2>
          <p className="mt-4 max-w-xl text-lg text-neutral-400">
            Elige el tipo de sitio que necesita tu negocio.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div className="flex h-full flex-col rounded-3xl bg-neutral-900 p-8">
                <h3 className="text-2xl font-medium tracking-tight">
                  {plan.name}
                </h3>
                <p className="mt-2 text-3xl font-semibold tracking-tight">
                  {plan.price}
                </p>
                <p className="mt-3 text-sm text-neutral-400">
                  {plan.audience}
                </p>

                <ul className="mt-8 flex flex-1 flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-neutral-300">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#cotiza"
                  className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-85"
                >
                  Cotizar este plan
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-sm text-neutral-500">
            Los precios son por el diseño y desarrollo del sitio. Hosting y dominio no están incluidos y se cotizan por separado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
