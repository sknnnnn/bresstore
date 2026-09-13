// Contenido de DEMO — nombres de clubes/selecciones son referencias reales,
// pero nombres de producto, precios, talles y stock son placeholders
// provisorios para poder visualizar la interfaz. No representan datos
// comerciales reales.

export type JerseyColors = {
  primary: string;
  secondary: string;
  trim: string;
};

// Qué representa la camiseta (club o selección) y qué época (actual o
// retro) son dos dimensiones independientes: "retro" no es un tercer tipo,
// es una característica que puede combinarse con cualquiera de los dos.
export type TeamType = "club" | "seleccion";
export type Era = "actual" | "retro";

export type Product = {
  slug: string;
  teamSlug: string;
  teamName: string;
  type: TeamType;
  era: Era;
  name: string;
  season: string;
  priceDemo: string;
  colors: JerseyColors;
};

export const products: Product[] = [
  {
    slug: "manchester-united-titular",
    teamSlug: "manchester-united",
    teamName: "Manchester United",
    type: "club",
    era: "actual",
    name: "Camiseta Titular",
    season: "25/26",
    priceDemo: "$64.999",
    colors: { primary: "#DA020E", secondary: "#0a0a0a", trim: "#ffd700" },
  },
  {
    slug: "boca-juniors-titular",
    teamSlug: "boca-juniors",
    teamName: "Boca Juniors",
    type: "club",
    era: "actual",
    name: "Camiseta Titular",
    season: "25/26",
    priceDemo: "$59.999",
    colors: { primary: "#00317c", secondary: "#f7d117", trim: "#f7d117" },
  },
  {
    slug: "river-plate-titular",
    teamSlug: "river-plate",
    teamName: "River Plate",
    type: "club",
    era: "actual",
    name: "Camiseta Titular",
    season: "25/26",
    priceDemo: "$59.999",
    colors: { primary: "#f4f2ec", secondary: "#c8102e", trim: "#0a0a0a" },
  },
  {
    slug: "palmeiras-titular",
    teamSlug: "palmeiras",
    teamName: "Palmeiras",
    type: "club",
    era: "actual",
    name: "Camiseta Titular",
    season: "25/26",
    priceDemo: "$57.999",
    colors: { primary: "#006437", secondary: "#f4f2ec", trim: "#f4f2ec" },
  },
];

export type ClubEntry = {
  slug: string;
  name: string;
  country: string;
  colors: JerseyColors;
};

export const clubs: ClubEntry[] = [
  {
    slug: "boca-juniors",
    name: "Boca Juniors",
    country: "Argentina",
    colors: { primary: "#00317c", secondary: "#f7d117", trim: "#f7d117" },
  },
  {
    slug: "river-plate",
    name: "River Plate",
    country: "Argentina",
    colors: { primary: "#f4f2ec", secondary: "#c8102e", trim: "#0a0a0a" },
  },
  {
    slug: "manchester-united",
    name: "Manchester United",
    country: "Inglaterra",
    colors: { primary: "#DA020E", secondary: "#0a0a0a", trim: "#ffd700" },
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    country: "Inglaterra",
    colors: { primary: "#C8102E", secondary: "#0a0a0a", trim: "#f4f2ec" },
  },
  {
    slug: "palmeiras",
    name: "Palmeiras",
    country: "Brasil",
    colors: { primary: "#006437", secondary: "#f4f2ec", trim: "#f4f2ec" },
  },
];

export type SelectionEntry = {
  slug: string;
  name: string;
  colors: JerseyColors;
};

export const selections: SelectionEntry[] = [
  {
    slug: "brasil",
    name: "Brasil",
    colors: { primary: "#ffdf00", secondary: "#009c3b", trim: "#002776" },
  },
  {
    slug: "italia",
    name: "Italia",
    colors: { primary: "#1e5cb3", secondary: "#f4f2ec", trim: "#0a0a0a" },
  },
  {
    slug: "argentina",
    name: "Argentina",
    colors: { primary: "#75aadb", secondary: "#f4f2ec", trim: "#f7d117" },
  },
];

export function getClubBySlug(slug: string) {
  return clubs.find((c) => c.slug === slug);
}

export function getSelectionBySlug(slug: string) {
  return selections.find((s) => s.slug === slug);
}

export function filterProducts(filter: {
  type?: TeamType;
  era?: Era;
  teamSlug?: string;
}) {
  return products.filter(
    (p) =>
      (!filter.type || p.type === filter.type) &&
      (!filter.era || p.era === filter.era) &&
      (!filter.teamSlug || p.teamSlug === filter.teamSlug)
  );
}
