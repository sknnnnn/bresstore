import { products } from "./demo-data";
import type { Category, Product } from "./types";

export const CATEGORY_LABELS: Record<Category, string> = {
  club: "Clubes",
  selection: "Selecciones",
  retro: "Retro",
};

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export type CatalogFilters = {
  category?: Category;
  team?: string;
  q?: string;
};

export function filterProducts(all: Product[], filters: CatalogFilters): Product[] {
  const needle = filters.q?.trim().toLowerCase();

  return all.filter((p) => {
    if (filters.category && p.category !== filters.category) return false;
    if (filters.team && p.team.toLowerCase() !== filters.team.toLowerCase()) return false;

    if (needle) {
      const haystack = [p.name, p.team, p.season, CATEGORY_LABELS[p.category]]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(needle)) return false;
    }

    return true;
  });
}
