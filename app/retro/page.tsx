import type { Metadata } from "next";
import CategoryTabs from "@/components/catalog/CategoryTabs";
import ProductGrid from "@/components/catalog/ProductGrid";
import { getProductsByCategory } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Retro",
  description: "Camisetas retro disponibles en Bresstore.",
};

export default function RetroPage() {
  const products = getProductsByCategory("retro");

  return (
    <main className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-4xl tracking-tight md:text-6xl">RETRO</h1>

      <div className="mt-8 border-b border-line pb-6">
        <CategoryTabs active="Retro" />
      </div>

      <div className="mt-8">
        <ProductGrid
          products={products}
          emptyMessage="Todavía no hay camisetas retro cargadas. Muy pronto vas a poder verlas acá."
        />
      </div>
    </main>
  );
}
