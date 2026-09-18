"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { CartLine, Size } from "@/lib/types";

const STORAGE_KEY = "bresstore:cart:v1";

type CartContextValue = {
  lines: CartLine[];
  count: number;
  isOpen: boolean;
  addLine: (slug: string, size: Size, quantity: number) => void;
  removeLine: (slug: string, size: Size) => void;
  updateQuantity: (slug: string, size: Size, quantity: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStoredLines(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Leer localStorage solo puede pasar en el cliente: si se hiciera en el
    // render inicial, el primer render del cliente (hidratación) no
    // coincidiría con el HTML generado en el servidor. Se difiere a un
    // efecto a propósito para evitar ese mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLines(readStoredLines());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // localStorage puede no estar disponible (modo privado, etc.) — el
      // carrito sigue funcionando en memoria durante la sesión.
    }
  }, [lines, hydrated]);

  const addLine = useCallback((slug: string, size: Size, quantity: number) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === slug && l.size === size);
      if (existing) {
        return prev.map((l) =>
          l.slug === slug && l.size === size ? { ...l, quantity: l.quantity + quantity } : l
        );
      }
      return [...prev, { slug, size, quantity }];
    });
    setIsOpen(true);
  }, []);

  const removeLine = useCallback((slug: string, size: Size) => {
    setLines((prev) => prev.filter((l) => !(l.slug === slug && l.size === size)));
  }, []);

  const updateQuantity = useCallback((slug: string, size: Size, quantity: number) => {
    setLines((prev) => {
      if (quantity <= 0) return prev.filter((l) => !(l.slug === slug && l.size === size));
      return prev.map((l) => (l.slug === slug && l.size === size ? { ...l, quantity } : l));
    });
  }, []);

  const clear = useCallback(() => setLines([]), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const count = useMemo(() => lines.reduce((sum, l) => sum + l.quantity, 0), [lines]);

  const value = useMemo(
    () => ({ lines, count, isOpen, addLine, removeLine, updateQuantity, clear, open, close }),
    [lines, count, isOpen, addLine, removeLine, updateQuantity, clear, open, close]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
