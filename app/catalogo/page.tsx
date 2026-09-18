import type { Metadata } from "next";
import Link from "next/link";
import CategoryTabs from "@/components/catalog/CategoryTabs";
import SearchBox from "@/components/catalog/SearchBox";
import ProductGrid from "@/components/catalog/ProductGrid";
import { getAllProducts, filterProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Todas las camisetas disponibles en Bresstore: clubes, selecciones y retro.",
};

export default async function CatalogoPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; team?: string }>;
}) {
  const { q, team } = await searchParams;
  const products = filterProducts(getAllProducts(), { q, team });
  const clearTeamHref = q ? `/catalogo?q=${encodeURIComponent(q)}` : "/catalogo";

  return (
    <main className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-4xl tracking-tight md:text-6xl">CATÁLOGO</h1>

      <div className="mt-8 flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
        <CategoryTabs active="Todas" />
        <SearchBox initialQuery={q ?? ""} />
      </div>

      {team ? (
        <p className="mt-6 text-xs uppercase tracking-wider text-ink-soft">
          Mostrando: {team} ·{" "}
          <Link href={clearTeamHref} className="underline hover:text-ink">
            Quitar filtro
          </Link>
        </p>
      ) : null}

      <div className="mt-8">
        <ProductGrid
          products={products}
          emptyMessage={
            q || team
              ? "No encontramos camisetas que coincidan con tu búsqueda."
              : "Todavía no hay camisetas cargadas."
          }
        />
      </div>
    </main>
  );
}
