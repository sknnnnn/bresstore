import type { Metadata } from "next";
import CatalogGrid from "@/components/CatalogGrid";
import FilterTabs from "@/components/FilterTabs";
import { products } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: "Camisetas — Bresstore",
};

const FILTERS = [
  { value: "todas", label: "Todas" },
  { value: "clubes", label: "Clubes" },
  { value: "selecciones", label: "Selecciones" },
  { value: "retro", label: "Retro" },
];

export default async function CamisetasPage({ searchParams }: PageProps<"/camisetas">) {
  const { filter } = await searchParams;
  const active = typeof filter === "string" ? filter : "todas";

  const filtered = products.filter((p) => {
    if (active === "clubes") return p.type === "club";
    if (active === "selecciones") return p.type === "seleccion";
    if (active === "retro") return p.era === "retro";
    return true;
  });

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs uppercase tracking-widest text-paper/60">Catálogo</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">CAMISETAS</h1>

      <div className="mt-8 border-b border-line pb-6">
        <FilterTabs basePath="/camisetas" options={FILTERS} active={active} />
      </div>

      <CatalogGrid products={filtered} />
    </section>
  );
}
