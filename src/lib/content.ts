// Contenido del sitio. Reemplaza los valores de ejemplo por tus datos reales
// cuando tengas los links y nombres definitivos de tus proyectos.

export const contact = {
  phone: "+52 656 859 6503",
  phoneHref: "+526568596503",
  email: "iygd505@gmail.com",
  facebook: "https://www.facebook.com/share/1BLSXnrDD1/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/net._.ly?igsh=cXN5MW1randmbnY5&utm_source=qr",
};

export type SiteCard = {
  name: string;
  niche: string;
  description: string;
  href: string;
  accent: string;
};

// Sitios de negocios reales, publicados y funcionales.
// Sustituye "href" por el link real de cada sitio cuando lo tengas.
export const publishedSites: SiteCard[] = [
  {
    name: "Grupo Horizonte",
    niche: "Inmobiliaria",
    description: "Catálogo de propiedades, filtros de búsqueda y contacto directo con asesores.",
    href: "#",
    accent: "from-neutral-700 to-neutral-900",
  },
  {
    name: "La Terraza",
    niche: "Restaurante",
    description: "Menú digital, reservaciones en línea y pedidos para llevar.",
    href: "#",
    accent: "from-neutral-700 to-neutral-900",
  },
  {
    name: "Studio Alma",
    niche: "Boutique",
    description: "Tienda en línea con catálogo de temporada y checkout simplificado.",
    href: "#",
    accent: "from-neutral-700 to-neutral-900",
  },
  {
    name: "Clínica Vive Bien",
    niche: "Estética",
    description: "Agenda de citas, servicios y galería de resultados para clientes.",
    href: "#",
    accent: "from-neutral-700 to-neutral-900",
  },
];

export type Niche = {
  id: string;
  label: string;
};

export const niches: Niche[] = [
  { id: "inmobiliarias", label: "Inmobiliarias" },
  { id: "restaurantes", label: "Restaurantes" },
  { id: "boutiques", label: "Boutiques" },
  { id: "esteticas", label: "Estéticas" },
];

export type Template = {
  name: string;
  nicheId: string;
  description: string;
  href: string;
};

// Plantillas disponibles por nicho.
// Sustituye "href" por el link real de la demo cuando lo tengas.
export const templates: Template[] = [
  {
    name: "Horizonte Bienes Raíces",
    nicheId: "inmobiliarias",
    description: "Listado de propiedades con búsqueda por precio y ubicación.",
    href: "#",
  },
  {
    name: "Vista Residencial",
    nicheId: "inmobiliarias",
    description: "Landing enfocada en desarrollos y preventas.",
    href: "#",
  },
  {
    name: "Sabor de Barrio",
    nicheId: "restaurantes",
    description: "Menú visual con secciones por tipo de platillo.",
    href: "#",
  },
  {
    name: "La Cava",
    nicheId: "restaurantes",
    description: "Enfoque en reservaciones y ambiente del lugar.",
    href: "#",
  },
  {
    name: "Boutique Lumière",
    nicheId: "boutiques",
    description: "Escaparate de productos con estilo editorial.",
    href: "#",
  },
  {
    name: "Atelier Nova",
    nicheId: "boutiques",
    description: "Catálogo por colecciones y lookbook.",
    href: "#",
  },
  {
    name: "Piel & Spa",
    nicheId: "esteticas",
    description: "Reservación de citas y catálogo de tratamientos.",
    href: "#",
  },
  {
    name: "Studio Renace",
    nicheId: "esteticas",
    description: "Landing de servicios con antes y después.",
    href: "#",
  },
];
