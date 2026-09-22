"use client";

import type { Size } from "@/lib/types";

export default function SizeSelector({
  sizes,
  unavailableSizes = [],
  value,
  onChange,
  error,
}: {
  sizes: Size[];
  unavailableSizes?: Size[];
  value: Size | null;
  onChange: (size: Size) => void;
  error?: boolean;
}) {
  return (
    <div>
      <p id="size-label" className="text-xs uppercase tracking-wider text-ink-soft">
        Talle
      </p>
      <div role="radiogroup" aria-labelledby="size-label" className="mt-2 flex flex-wrap gap-2">
        {sizes.map((size) => {
          const isUnavailable = unavailableSizes.includes(size);
          return (
            <button
              key={size}
              type="button"
              role="radio"
              aria-checked={value === size}
              aria-disabled={isUnavailable}
              disabled={isUnavailable}
              onClick={() => {
                if (isUnavailable) return;
                onChange(size);
              }}
              className={`h-10 min-w-10 border px-3 font-display text-sm transition-colors ${
                isUnavailable
                  ? "cursor-not-allowed border-line text-ink-soft/50 line-through"
                  : value === size
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-ink hover:border-ink"
              }`}
            >
              {size}
            </button>
          );
        })}
      </div>
      {error ? (
        <p role="alert" className="mt-2 text-xs text-red-700">
          Elegí un talle para agregar al carrito.
        </p>
      ) : null}
    </div>
  );
}
