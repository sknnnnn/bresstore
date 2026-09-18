import { getAllProducts } from "@/lib/catalog";
import ProductCard from "./ProductCard";

export default function NewJerseys() {
  const newProducts = getAllProducts().filter((p) => p.isNew);
  const count = String(newProducts.length).padStart(2, "0");

  return (
    <section id="nuevas-camisetas" className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <div className="flex items-end justify-between gap-4 border-b border-line pb-6">
        <h2 className="font-display text-4xl tracking-tight md:text-6xl">NUEVAS CAMISETAS</h2>
        <span className="hidden font-display text-sm tracking-widest text-ink-soft sm:inline">
          {count} REFERENCIAS
        </span>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-6">
        {newProducts.map((product, i) => (
          <ProductCard key={product.slug} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
