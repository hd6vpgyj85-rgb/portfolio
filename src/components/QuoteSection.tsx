"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/content";
import Reveal from "./Reveal";

export default function QuoteSection() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Cotización de sitio web — ${name || "Nuevo proyecto"}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nTipo de negocio: ${business}\n\nMensaje:\n${message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría cotizar un sitio web para mi negocio."
  );
  const whatsappHref = `https://wa.me/${contact.phoneHref.replace("+", "")}?text=${whatsappMessage}`;

  return (
    <section id="cotiza" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Cotiza tu proyecto
          </h2>
          <p className="mt-4 max-w-xl text-lg text-neutral-400">
            Elige la forma que prefieras para platicar sobre tu sitio web.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl bg-neutral-900 p-8">
              <h3 className="text-2xl font-medium tracking-tight">
                Escríbenos por correo
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                Cuéntanos sobre tu negocio y te responderemos con una propuesta.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:bg-white/10"
                />
                <input
                  type="text"
                  required
                  placeholder="Tipo de negocio"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  className="rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:bg-white/10"
                />
                <textarea
                  required
                  placeholder="Cuéntanos qué necesitas"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="resize-none rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:bg-white/10"
                />
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-85"
                >
                  Enviar
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-neutral-900 p-8">
              <div>
                <h3 className="text-2xl font-medium tracking-tight">
                  Escríbenos por WhatsApp
                </h3>
                <p className="mt-2 text-sm text-neutral-400">
                  Respuesta rápida y directa. Ideal si ya tienes una idea clara
                  de lo que buscas.
                </p>
                <p className="mt-6 text-lg text-neutral-200">{contact.phone}</p>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-85"
              >
                Abrir WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
