import { formatPrice } from "./format";
import type { CartLine, Product } from "./types";

export type ResolvedCartLine = CartLine & { product: Product; subtotal: number };

/** Combina cada línea del carrito con su producto real y su subtotal. */
export function resolveCartLines(
  lines: CartLine[],
  getProduct: (slug: string) => Product | undefined
): ResolvedCartLine[] {
  return lines
    .map((line) => {
      const product = getProduct(line.slug);
      if (!product) return null;
      return { ...line, product, subtotal: product.price * line.quantity };
    })
    .filter((line): line is ResolvedCartLine => line !== null);
}

export function getCartTotal(lines: ResolvedCartLine[]): number {
  return lines.reduce((sum, line) => sum + line.subtotal, 0);
}

export function buildOrderMessage(lines: ResolvedCartLine[]): string {
  const items = lines
    .map((line) => {
      const { product } = line;
      return [
        `- ${product.name} — ${product.team}`,
        `  Talle: ${line.size}`,
        `  Cantidad: ${line.quantity}`,
        `  Precio unitario: ${formatPrice(product.price)}`,
        `  Subtotal: ${formatPrice(line.subtotal)}`,
      ].join("\n");
    })
    .join("\n\n");

  const total = formatPrice(getCartTotal(lines));

  return ["Hola, quiero hacer el siguiente pedido:", "", items, "", `Total: ${total}`].join("\n");
}

/**
 * Número configurado en NEXT_PUBLIC_WHATSAPP_NUMBER (.env.local), no
 * hardcodeado en el código fuente. Ver .env.example.
 */
export function getWhatsAppNumber(): string | undefined {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
}

export function buildWhatsAppUrl(message: string): string | null {
  const number = getWhatsAppNumber();
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
