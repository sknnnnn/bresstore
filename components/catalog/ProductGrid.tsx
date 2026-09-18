import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/types";

export default function ProductGrid({
  products,
  emptyMessage,
}: {
  products: Product[];
  emptyMessage: string;
}) {
  if (products.length === 0) {
    return <p className="border border-line px-6 py-16 text-center text-ink-soft">{emptyMessage}</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-6">
      {products.map((product, i) => (
        <ProductCard key={product.slug} product={product} index={i} />
      ))}
    </div>
  );
}
