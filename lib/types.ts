// Tipos compartidos del catálogo. Un solo modelo de Product cubre
// clubes, selecciones y retro a través de `category` — evita duplicar
// modelos por tipo de camiseta.

export type Category = "club" | "selection" | "retro";

export type Size = "S" | "M" | "L" | "XL" | "XXL";

export const ALL_SIZES: Size[] = ["S", "M", "L", "XL", "XXL"];

export type JerseyColors = {
  primary: string;
  secondary: string;
  trim: string;
};

export type Product = {
  slug: string;
  name: string;
  category: Category;
  /** Nombre del club o selección. Un solo campo para ambos casos. */
  team: string;
  country?: string;
  season: string;
  /** Precio numérico (en pesos) para poder calcular subtotales/total. */
  price: number;
  /** true mientras el precio sea de demostración, no comercial real. */
  priceIsDemo?: boolean;
  description?: string;
  sizes: Size[];
  colors: JerseyColors;
  /** Ruta a imagen real. Si no está seteada, se usa JerseyPlaceholder. */
  image?: string;
  /** Foto trasera. Si está seteada, la ficha de producto muestra el selector Frente/Espalda. */
  imageBack?: string;
  available: boolean;
  /**
   * Talles de `sizes` sin stock puntual. Los talles que no aparezcan acá
   * se consideran disponibles. Ningún producto de demo lo usa todavía —
   * no inventar valores; agregar solo cuando haya stock real por talle.
   */
  unavailableSizes?: Size[];
  /** Se muestra en la sección "Nuevas camisetas" de la Home. */
  isNew?: boolean;
};

export type CartLine = {
  slug: string;
  size: Size;
  quantity: number;
};
