"use client";

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 10,
}: {
  value: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div>
      <p id="quantity-label" className="text-xs uppercase tracking-wider text-ink-soft">
        Cantidad
      </p>
      <div className="mt-2 inline-flex items-center border border-line">
        <button
          type="button"
          aria-label="Restar cantidad"
          disabled={value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
          className="h-10 w-10 text-lg disabled:opacity-30"
        >
          −
        </button>
        <span aria-live="polite" aria-labelledby="quantity-label" className="w-10 text-center">
          {value}
        </span>
        <button
          type="button"
          aria-label="Sumar cantidad"
          disabled={value >= max}
          onClick={() => onChange(Math.min(max, value + 1))}
          className="h-10 w-10 text-lg disabled:opacity-30"
        >
          +
        </button>
      </div>
    </div>
  );
}
