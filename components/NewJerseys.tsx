import { newJerseys } from "@/lib/demo-data";
import ProductCard from "./ProductCard";

export default function NewJerseys() {
  return (
    <section id="nuevas-camisetas" className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <div className="flex items-end justify-between gap-4 border-b border-line pb-6">
        <h2 className="font-display text-4xl tracking-tight md:text-6xl">NUEVAS CAMISETAS</h2>
        <span className="hidden text-xs uppercase tracking-widest text-paper/50 sm:inline">
          Colección inicial
        </span>
      </div>

      <div className="mt-10 grid grid-cols-2 items-start gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-6">
        {newJerseys.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
