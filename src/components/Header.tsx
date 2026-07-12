"use client";

import { useState } from "react";

const links = [
  { href: "#sitios", label: "Sitios publicados" },
  { href: "#plantillas", label: "Plantillas" },
  { href: "#precios", label: "Precios" },
  { href: "#cotiza", label: "Cotizar" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight">
          Net.ly
        </a>

        <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cotiza"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-85"
          >
            Empezar proyecto
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-200 md:hidden"
          aria-label="Abrir menú"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M1 1L17 17M17 1L1 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path
                d="M0 1H18M0 7H18M0 13H18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 px-6 pb-6 text-neutral-200 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base transition-colors hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
