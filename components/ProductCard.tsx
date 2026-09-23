import Link from "next/link";
import JerseyVisual from "./JerseyVisual";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/types";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  // Sobre una foto, las etiquetas necesitan fondo para mantener legibilidad.
  const chip = product.image ? "bg-paper px-1.5 py-0.5" : "";

  return (
    <Link href={`/producto/${product.slug}`} className="group block border-t border-line pt-4">
      <article>
        <div className={`relative flex aspect-[4/5] items-center justify-center bg-[#eae7dd] ${product.image ? "overflow-hidden outline outline-1 -outline-offset-1 outline-line" : "px-6"}`}>
          <span className={`absolute left-3 top-3 font-display text-xs tracking-widest text-ink-soft ${chip}`}>
            0{index + 1}
          </span>
          <span className={`absolute right-3 top-3 text-[10px] uppercase tracking-wider text-ink-soft ${chip}`}>
            {product.season}
          </span>
          {!product.available ? (
            <span className="absolute bottom-3 left-3 bg-ink px-2 py-1 text-[10px] uppercase tracking-wider text-paper">
              Agotado
            </span>
          ) : null}
          <JerseyVisual
            image={product.image}
            colors={product.colors}
            alt={`${product.team} — ${product.name}`}
            className={`${product.image ? "h-full w-full" : "h-4/5 w-auto"} transition-transform duration-300 group-hover:scale-[1.04]`}
          />
        </div>

        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-ink-soft">{product.team}</p>
            <h3 className="font-display text-lg leading-tight">{product.name}</h3>
          </div>
          <div className="text-right">
            <p className="font-display text-lg">{formatPrice(product.price)}</p>
            {product.priceIsDemo ? (
              <p className="text-[10px] uppercase tracking-wider text-ink-soft">precio demo</p>
            ) : null}
          </div>
        </div>
      </article>
    </Link>
  );
}
