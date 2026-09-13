import ProductCard from "./ProductCard";
import type { Product } from "@/lib/demo-data";

export default function CatalogGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="mt-10 text-sm text-paper/50">
        Todavía no hay camisetas disponibles con este filtro.
      </p>
    );
  }

  return (
    <div className="mt-10 grid grid-cols-2 items-start gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-6">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
