import PhotoTile from "./PhotoTile";
import type { Product } from "@/lib/demo-data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <a href="#" className="block">
        <PhotoTile colors={product.colors} className="aspect-[3/4]" />
      </a>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-paper/60">
            {product.club} · {product.season}
          </p>
          <h3 className="font-display text-xl leading-tight">{product.name}</h3>
        </div>
        <p className="shrink-0 pt-1 text-xs text-paper/50">{product.priceDemo}</p>
      </div>

      <a
        href="#"
        className="mt-2 inline-block text-xs uppercase tracking-wider text-paper/60 underline decoration-line underline-offset-4 transition-colors hover:text-paper"
      >
        Ver camiseta
      </a>
    </article>
  );
}
