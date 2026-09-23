"use client";

import { useState } from "react";
import JerseyVisual from "@/components/JerseyVisual";
import type { Product } from "@/lib/types";

type View = "front" | "back";

const VIEWS: { id: View; label: string }[] = [
  { id: "front", label: "Frente" },
  { id: "back", label: "Espalda" },
];

// Imagen del producto. Con foto trasera muestra un selector Frente/Espalda
// (empieza en Frente); sin ella renderiza solo la imagen, sin controles.
// El selector va arriba de la foto: la foto es alta y abajo quedaría fuera
// de la primera pantalla.
export default function ProductImages({ product }: { product: Product }) {
  const [view, setView] = useState<View>("front");
  const alt = `${product.team} — ${product.name}`;
  const hasImage = Boolean(product.image);

  const visual = (image: string | undefined, label: string) => (
    <JerseyVisual
      image={image}
      colors={product.colors}
      alt={label}
      className={hasImage ? "h-auto w-full" : "h-80 w-auto md:h-[28rem]"}
    />
  );

  return (
    <div>
      {product.imageBack ? (
        <div role="radiogroup" aria-label="Vista de la camiseta" className="mb-3 flex gap-2">
          {VIEWS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={view === id}
              onClick={() => setView(id)}
              className={`h-10 border px-4 font-display text-sm transition-colors ${
                view === id
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink hover:border-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}

      <div
        className={`flex items-center justify-center bg-[#eae7dd] ${hasImage ? "" : "py-16"}`}
      >
        <div className={view === "front" || !product.imageBack ? "contents" : "hidden"}>
          {visual(product.image, alt)}
        </div>
        {product.imageBack ? (
          <div className={view === "back" ? "contents" : "hidden"}>
            {visual(product.imageBack, `${alt} (espalda)`)}
          </div>
        ) : null}
      </div>
    </div>
  );
}
