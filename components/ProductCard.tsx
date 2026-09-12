import JerseyPlaceholder from "./JerseyPlaceholder";
import type { Product } from "@/lib/demo-data";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="group border-t border-line pt-4">
      <div className="relative flex aspect-[4/5] items-center justify-center bg-[#eae7dd] px-6">
        <span className="absolute left-3 top-3 font-display text-xs tracking-widest text-ink-soft">
          0{index + 1}
        </span>
        <span className="absolute right-3 top-3 text-[10px] uppercase tracking-wider text-ink-soft">
          {product.season}
        </span>
        <JerseyPlaceholder
          colors={product.colors}
          className="h-4/5 w-auto transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-ink-soft">{product.club}</p>
          <h3 className="font-display text-lg leading-tight">{product.name}</h3>
        </div>
        <div className="text-right">
          <p className="font-display text-lg">{product.priceDemo}</p>
          <p className="text-[10px] uppercase tracking-wider text-ink-soft">precio demo</p>
        </div>
      </div>
    </article>
  );
}
