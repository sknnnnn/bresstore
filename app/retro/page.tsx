import type { Metadata } from "next";
import CatalogGrid from "@/components/CatalogGrid";
import FilterTabs from "@/components/FilterTabs";
import { filterProducts } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: "Retro — Bresstore",
};

const FILTERS = [
  { value: "todas", label: "Todas" },
  { value: "clubes", label: "Clubes" },
  { value: "selecciones", label: "Selecciones" },
];

export default async function RetroPage({ searchParams }: PageProps<"/retro">) {
  const { filter } = await searchParams;
  const active = typeof filter === "string" ? filter : "todas";

  const filtered = filterProducts({
    era: "retro",
    type: active === "clubes" ? "club" : active === "selecciones" ? "seleccion" : undefined,
  });

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs uppercase tracking-widest text-paper/60">Archivo histórico</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">RETRO</h1>
      <p className="mt-4 max-w-md text-sm text-paper/60">
        Camisetas de otras épocas, de clubes y selecciones, en un mismo archivo.
      </p>

      <div className="mt-8 border-b border-line pb-6">
        <FilterTabs basePath="/retro" options={FILTERS} active={active} />
      </div>

      <CatalogGrid products={filtered} />
    </section>
  );
}
