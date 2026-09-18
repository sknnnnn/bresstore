"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartContext";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import type { Product, Size } from "@/lib/types";

export default function AddToCartForm({ product }: { product: Product }) {
  const { addLine } = useCart();
  const [size, setSize] = useState<Size | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);

  if (!product.available) {
    return (
      <p className="border border-line px-4 py-3 text-sm uppercase tracking-wider text-ink-soft">
        Agotado por el momento
      </p>
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!size) {
      setSizeError(true);
      return;
    }
    addLine(product.slug, size, quantity);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <SizeSelector
        sizes={product.sizes}
        value={size}
        error={sizeError}
        onChange={(s) => {
          setSize(s);
          setSizeError(false);
        }}
      />
      <QuantitySelector value={quantity} onChange={setQuantity} />

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-3 font-display text-lg tracking-wide text-paper transition-opacity hover:opacity-90 sm:w-auto"
      >
        Agregar al carrito
      </button>
    </form>
  );
}
