// Contenido del sitio.

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
};

// Sitios de negocios reales, publicados y funcionales.
export const publishedSites: SiteCard[] = [
  {
    name: "PadelBros",
    niche: "Club de pádel",
    description: "Reservación de canchas, horarios y torneos del club.",
    href: "https://padelbrosmx.com/",
  },
  {
    name: "Yukly Store",
    niche: "Tienda en línea",
    description: "Catálogo de productos con checkout y envíos.",
    href: "https://yukly.netlify.app/",
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
export const templates: Template[] = [
  {
    name: "Altavista Terrenos",
    nicheId: "inmobiliarias",
    description: "Catálogo de terrenos en venta con información de ubicación.",
    href: "https://yukl-store.netlify.app/",
  },
  {
    name: "Cardinal Bienes Raíces",
    nicheId: "inmobiliarias",
    description: "Catálogo de propiedades con contacto directo a asesores.",
    href: "https://cardinal-bienes-raices.netlify.app/",
  },
  {
    name: "Netly Inmobiliaria",
    nicheId: "inmobiliarias",
    description: "Landing inmobiliaria con listado de propiedades destacadas.",
    href: "https://hd6vpgyj85-rgb.github.io/Inmobiliaria/index.html",
  },
  {
    name: "Yuki",
    nicheId: "restaurantes",
    description: "Experiencia visual con ambientación 3D para presentar el menú.",
    href: "https://hd6vpgyj85-rgb.github.io/eemplo-web-3d-ventas/",
  },
  {
    name: "Brasa",
    nicheId: "restaurantes",
    description: "Landing de asador con menú y reservaciones.",
    href: "https://6a4570d1c1944419fc79c705--ephemeral-frangollo-774ee1.netlify.app/",
  },
  {
    name: "Katsu Sushi",
    nicheId: "restaurantes",
    description: "Menú de sushi con sección de ubicación y contacto.",
    href: "https://6a456365d14001baef8f149c--bright-gumdrop-27da0e.netlify.app/#ubicacion",
  },
  {
    name: "La Mesa",
    nicheId: "restaurantes",
    description: "Presentación elegante de platillos y reservaciones.",
    href: "https://super-muffin-5853ee.netlify.app/",
  },
  {
    name: "Origen Café",
    nicheId: "restaurantes",
    description: "Landing de cafetería con menú y ubicación.",
    href: "https://origen-cafe-cdmx.netlify.app/",
  },
  {
    name: "Marea",
    nicheId: "restaurantes",
    description: "Restaurante de mariscos con menú visual y contacto directo.",
    href: "https://willowy-syrniki-bab398.netlify.app/",
  },
  {
    name: "Yukl Store",
    nicheId: "boutiques",
    description: "Escaparate de productos de moda con catálogo por colección.",
    href: "https://yukl-store.netlify.app/",
  },
  {
    name: "Netly Estética",
    nicheId: "esteticas",
    description: "Reservación de citas y catálogo de tratamientos.",
    href: "https://superlative-stroopwafel-5f11db.netlify.app/",
  },
  {
    name: "Lumière",
    nicheId: "esteticas",
    description: "Landing de spa con servicios y agenda de citas.",
    href: "https://lumiere-estetica-spa.netlify.app/",
  },
  {
    name: "Juárez Barber Shop",
    nicheId: "esteticas",
    description: "Sitio de barbería con servicios y horarios de atención.",
    href: "https://juarez-barber-shop.netlify.app/",
  },
];
