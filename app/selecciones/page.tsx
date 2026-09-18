import type { Metadata } from "next";
import CategoryTabs from "@/components/catalog/CategoryTabs";
import ProductGrid from "@/components/catalog/ProductGrid";
import { getProductsByCategory } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Selecciones",
  description: "Camisetas de selecciones nacionales disponibles en Bresstore.",
};

export default function SeleccionesPage() {
  const products = getProductsByCategory("selection");

  return (
    <main className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-4xl tracking-tight md:text-6xl">SELECCIONES</h1>

      <div className="mt-8 border-b border-line pb-6">
        <CategoryTabs active="Selecciones" />
      </div>

      <div className="mt-8">
        <ProductGrid
          products={products}
          emptyMessage="Todavía no hay camisetas de selecciones cargadas."
        />
      </div>
    </main>
  );
}
