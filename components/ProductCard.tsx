import PhotoTile from "./PhotoTile";
import type { Product } from "@/lib/demo-data";

export default function ProductCard({
  product,
  tone,
}: {
  product: Product;
  tone?: "light" | "dark";
}) {
  return (
    <article className="group">
      <a href="#" className="block">
        <PhotoTile colors={product.colors} tone={tone} className="aspect-[3/4]" />
      </a>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-ink-soft">
            {product.club} · {product.season}
          </p>
          <h3 className="font-display text-xl leading-tight">{product.name}</h3>
        </div>
        <p className="shrink-0 pt-1 text-xs text-ink-soft">{product.priceDemo}</p>
      </div>

      <a
        href="#"
        className="mt-2 inline-block text-xs uppercase tracking-wider text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink"
      >
        Ver camiseta
      </a>
    </article>
  );
}
