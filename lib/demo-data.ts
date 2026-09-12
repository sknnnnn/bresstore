// Contenido de DEMO — nombres de clubes/selecciones son referencias reales,
// pero nombres de producto, precios, talles y stock son placeholders
// provisorios para poder visualizar la interfaz. No representan datos
// comerciales reales.

export type JerseyColors = {
  primary: string;
  secondary: string;
  trim: string;
};

export type Product = {
  slug: string;
  club: string;
  name: string;
  season: string;
  priceDemo: string;
  colors: JerseyColors;
};

export const newJerseys: Product[] = [
  {
    slug: "manchester-united-titular",
    club: "Manchester United",
    name: "Camiseta Titular",
    season: "25/26",
    priceDemo: "$64.999",
    colors: { primary: "#DA020E", secondary: "#0a0a0a", trim: "#ffd700" },
  },
  {
    slug: "boca-juniors-titular",
    club: "Boca Juniors",
    name: "Camiseta Titular",
    season: "25/26",
    priceDemo: "$59.999",
    colors: { primary: "#00317c", secondary: "#f7d117", trim: "#f7d117" },
  },
  {
    slug: "river-plate-titular",
    club: "River Plate",
    name: "Camiseta Titular",
    season: "25/26",
    priceDemo: "$59.999",
    colors: { primary: "#f4f2ec", secondary: "#c8102e", trim: "#0a0a0a" },
  },
  {
    slug: "palmeiras-titular",
    club: "Palmeiras",
    name: "Camiseta Titular",
    season: "25/26",
    priceDemo: "$57.999",
    colors: { primary: "#006437", secondary: "#f4f2ec", trim: "#f4f2ec" },
  },
];

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
