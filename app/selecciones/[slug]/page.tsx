import { notFound } from "next/navigation";
import CatalogGrid from "@/components/CatalogGrid";
import FilterTabs from "@/components/FilterTabs";
import { filterProducts, getSelectionBySlug } from "@/lib/demo-data";

const FILTERS = [
  { value: "todas", label: "Todas" },
  { value: "actual", label: "Actuales" },
  { value: "retro", label: "Retro" },
];

export default async function SelectionPage({
  params,
  searchParams,
}: PageProps<"/selecciones/[slug]">) {
  const { slug } = await params;
  const { filter } = await searchParams;
  const selection = getSelectionBySlug(slug);

  if (!selection) notFound();

  const active = typeof filter === "string" ? filter : "todas";
  const filtered = filterProducts({
    teamSlug: selection.slug,
    era: active === "actual" || active === "retro" ? active : undefined,
  });

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs uppercase tracking-widest text-paper/60">Selección</p>
      <h1 className="mt-3 font-display text-4xl uppercase tracking-tight md:text-6xl">
        {selection.name}
      </h1>

      <div className="mt-8 border-b border-line pb-6">
        <FilterTabs basePath={`/selecciones/${selection.slug}`} options={FILTERS} active={active} />
      </div>

      <CatalogGrid products={filtered} />
    </section>
  );
}
