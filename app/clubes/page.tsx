import type { Metadata } from "next";
import CategoryTabs from "@/components/catalog/CategoryTabs";
import ProductGrid from "@/components/catalog/ProductGrid";
import { getProductsByCategory } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Clubes",
  description: "Camisetas de clubes disponibles en Bresstore.",
};

export default function ClubesPage() {
  const products = getProductsByCategory("club");

  return (
    <main className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-4xl tracking-tight md:text-6xl">CLUBES</h1>

      <div className="mt-8 border-b border-line pb-6">
        <CategoryTabs active="Clubes" />
      </div>

      <div className="mt-8">
        <ProductGrid
          products={products}
          emptyMessage="Todavía no hay camisetas de clubes cargadas."
        />
      </div>
    </main>
  );
}
