import { notFound } from "next/navigation";
import CatalogGrid from "@/components/CatalogGrid";
import FilterTabs from "@/components/FilterTabs";
import { filterProducts, getClubBySlug } from "@/lib/demo-data";

const FILTERS = [
  { value: "todas", label: "Todas" },
  { value: "actual", label: "Actuales" },
  { value: "retro", label: "Retro" },
];

export default async function ClubPage({
  params,
  searchParams,
}: PageProps<"/clubes/[slug]">) {
  const { slug } = await params;
  const { filter } = await searchParams;
  const club = getClubBySlug(slug);

  if (!club) notFound();

  const active = typeof filter === "string" ? filter : "todas";
  const filtered = filterProducts({
    teamSlug: club.slug,
    era: active === "actual" || active === "retro" ? active : undefined,
  });

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs uppercase tracking-widest text-paper/60">Club · {club.country}</p>
      <h1 className="mt-3 font-display text-4xl uppercase tracking-tight md:text-6xl">{club.name}</h1>

      <div className="mt-8 border-b border-line pb-6">
        <FilterTabs basePath={`/clubes/${club.slug}`} options={FILTERS} active={active} />
      </div>

      <CatalogGrid products={filtered} />
    </section>
  );
}
