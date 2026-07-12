import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Net.ly — Sitios web para negocios",
  description:
    "Diseño y desarrollo de sitios web funcionales para negocios. Portafolio de proyectos publicados y plantillas por nicho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-neutral-100">
        {children}
      </body>
    </html>
  );
}
