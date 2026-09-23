import type { JerseyColors } from "./types";

// Contenido de DEMO del Hero — texto y colores provisorios hasta definir
// el diseño final en Figma. Separado de la estructura/JSX para que el
// copy se pueda editar sin tocar los componentes.

export type HeroVisualContent = {
  label?: string;
  number?: string;
  colors: JerseyColors;
  /** Ruta a imagen real (camiseta/modelo). Si no está seteada, se usa JerseyPlaceholder. */
  image?: string;
};

export type HeroContent = {
  badge: string;
  headingLines: string[];
  cta: { label: string; href: string };
  meta?: string;
  visual: HeroVisualContent;
};

export const heroContent: HeroContent = {
  badge: "Temporada 25/26",
  headingLines: ["CAMISETAS", "PARA LOS QUE", "VIVEN EL FÚTBOL."],
  cta: { label: "Ver catálogo", href: "/catalogo" },
  visual: {
    label: "N.º 10",
    number: "10",
    colors: { primary: "#f4f2ec", secondary: "#14130f", trim: "#cbff3d" },
  },
};
