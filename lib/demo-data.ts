// Contenido de DEMO — nombres de clubes/selecciones son referencias reales,
// pero nombres de producto, precios, talles y stock son placeholders
// provisorios para poder probar el flujo de compra. No representan datos
// comerciales reales. Reemplazar `products` por el catálogo real cuando
// esté definido — el resto del sistema (catálogo, producto, carrito,
// WhatsApp) no depende de que estos datos sean demo o reales.

import { ALL_SIZES, type JerseyColors, type Product } from "./types";

export const products: Product[] = [
  {
    slug: "manchester-united-titular",
    name: "Camiseta Titular",
    category: "club",
    team: "Manchester United",
    country: "Inglaterra",
    season: "25/26",
    price: 64999,
    priceIsDemo: true,
    sizes: ALL_SIZES,
    colors: { primary: "#DA020E", secondary: "#0a0a0a", trim: "#ffd700" },
    image: "/products/manchester-united-titular-front.jpg",
    imageBack: "/products/manchester-united-titular-back.jpg",
    available: true,
    isNew: true,
  },
  {
    slug: "boca-juniors-titular",
    name: "Camiseta Titular",
    category: "club",
    team: "Boca Juniors",
    country: "Argentina",
    season: "25/26",
    price: 59999,
    priceIsDemo: true,
    sizes: ALL_SIZES,
    colors: { primary: "#00317c", secondary: "#f7d117", trim: "#f7d117" },
    image: "/products/boca-juniors-titular-front.jpg",
    imageBack: "/products/boca-juniors-titular-back.jpg",
    available: true,
    isNew: true,
  },
  {
    slug: "river-plate-titular",
    name: "Camiseta Titular",
    category: "club",
    team: "River Plate",
    country: "Argentina",
    season: "25/26",
    price: 59999,
    priceIsDemo: true,
    sizes: ALL_SIZES,
    colors: { primary: "#f4f2ec", secondary: "#c8102e", trim: "#0a0a0a" },
    image: "/products/river-plate-titular-front.jpg",
    imageBack: "/products/river-plate-titular-back.jpg",
    available: true,
    isNew: true,
  },
  {
    slug: "palmeiras-titular",
    name: "Camiseta Titular",
    category: "club",
    team: "Palmeiras",
    country: "Brasil",
    season: "25/26",
    price: 57999,
    priceIsDemo: true,
    sizes: ALL_SIZES,
    colors: { primary: "#006437", secondary: "#f4f2ec", trim: "#f4f2ec" },
    image: "/products/palmeiras-titular-front.jpg",
    imageBack: "/products/palmeiras-titular-back.jpg",
    available: true,
    isNew: true,
  },
  {
    slug: "liverpool-camiseta",
    name: "Camiseta",
    category: "club",
    team: "Liverpool",
    country: "Inglaterra",
    season: "25/26",
    price: 59999,
    priceIsDemo: true,
    sizes: ALL_SIZES,
    colors: { primary: "#C8102E", secondary: "#0a0a0a", trim: "#f4f2ec" },
    image: "/products/liverpool-camiseta-front.jpg",
    imageBack: "/products/liverpool-camiseta-back.jpg",
    available: true,
    isNew: true,
  },
  {
    slug: "brasil-titular",
    name: "Camiseta Titular",
    category: "selection",
    team: "Brasil",
    season: "25/26",
    price: 59999,
    priceIsDemo: true,
    sizes: ALL_SIZES,
    colors: { primary: "#ffdf00", secondary: "#009c3b", trim: "#002776" },
    image: "/products/brasil-titular-front.jpg",
    imageBack: "/products/brasil-titular-back.jpg",
    available: true,
    isNew: true,
  },
  {
    slug: "italia-camiseta",
    name: "Camiseta",
    category: "selection",
    team: "Italia",
    season: "25/26",
    price: 59999,
    priceIsDemo: true,
    sizes: ALL_SIZES,
    colors: { primary: "#1e5cb3", secondary: "#f4f2ec", trim: "#0a0a0a" },
    image: "/products/italia-camiseta-front.jpg",
    imageBack: "/products/italia-camiseta-back.jpg",
    available: true,
    isNew: true,
  },
];

// Directorio de clubes para navegar/filtrar el catálogo desde la Home.
// No todos tienen producto cargado todavía (ver `products` arriba) — al
// filtrar el catálogo por un club sin productos se muestra el estado
// vacío correspondiente, en vez de inventar una camiseta.
export type ClubEntry = {
  name: string;
  country: string;
  colors: JerseyColors;
};

export const clubs: ClubEntry[] = [
  {
    name: "Boca Juniors",
    country: "Argentina",
    colors: { primary: "#00317c", secondary: "#f7d117", trim: "#f7d117" },
  },
  {
    name: "River Plate",
    country: "Argentina",
    colors: { primary: "#f4f2ec", secondary: "#c8102e", trim: "#0a0a0a" },
  },
  {
    name: "Manchester United",
    country: "Inglaterra",
    colors: { primary: "#DA020E", secondary: "#0a0a0a", trim: "#ffd700" },
  },
  {
    name: "Liverpool",
    country: "Inglaterra",
    colors: { primary: "#C8102E", secondary: "#0a0a0a", trim: "#f4f2ec" },
  },
  {
    name: "Palmeiras",
    country: "Brasil",
    colors: { primary: "#006437", secondary: "#f4f2ec", trim: "#f4f2ec" },
  },
];

// Directorio de selecciones, mismo criterio que `clubs`: hoy no tienen
// producto cargado, así que el catálogo filtrado por selección queda en
// estado vacío hasta que se sume el producto real.
export type SelectionEntry = {
  name: string;
  colors: JerseyColors;
};

export const selections: SelectionEntry[] = [
  {
    name: "Brasil",
    colors: { primary: "#ffdf00", secondary: "#009c3b", trim: "#002776" },
  },
  {
    name: "Italia",
    colors: { primary: "#1e5cb3", secondary: "#f4f2ec", trim: "#0a0a0a" },
  },
  {
    name: "Argentina",
    colors: { primary: "#75aadb", secondary: "#f4f2ec", trim: "#f7d117" },
  },
];
