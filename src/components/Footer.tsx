import { contact } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="text-lg font-semibold tracking-tight">Net.ly</span>
          <p className="mt-3 max-w-xs text-sm text-neutral-500">
            Sitios web a la medida para negocios que quieren destacar en
            línea.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-neutral-400">
          <span className="text-neutral-500">Contacto</span>
          <a href={`tel:${contact.phoneHref}`} className="hover:text-white">
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="hover:text-white">
            {contact.email}
          </a>
        </div>

        <div className="flex flex-col gap-2 text-sm text-neutral-400">
          <span className="text-neutral-500">Síguenos</span>
          <a
            href={contact.facebook}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Facebook
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl text-xs text-neutral-600">
        © {new Date().getFullYear()} Net.ly. Todos los derechos reservados.
      </div>
    </footer>
  );
}
