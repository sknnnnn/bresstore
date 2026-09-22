"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useCart } from "./CartContext";
import { getProductBySlug } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { buildOrderMessage, buildWhatsAppUrl, getCartTotal, resolveCartLines } from "@/lib/whatsapp";

export default function CartDrawer() {
  const { lines, isOpen, close, removeLine, updateQuantity, clear } = useCart();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  // Se muestra en vez del carrito una vez que el usuario abrió WhatsApp con
  // su pedido. Bresstore no puede confirmar que WhatsApp recibió el
  // mensaje, así que esto es solo "se preparó y se abrió", no "se envió".
  const [orderPrepared, setOrderPrepared] = useState(false);

  const handleClose = useCallback(() => {
    close();
    setOrderPrepared(false);
  }, [close]);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, handleClose]);

  // Si se agregan productos nuevos después de iniciar un pedido, es un
  // pedido distinto: volver a mostrar el carrito en vez de la confirmación.
  useEffect(() => {
    if (lines.length > 0) setOrderPrepared(false);
  }, [lines.length]);

  if (!isOpen) return null;

  const resolved = resolveCartLines(lines, getProductBySlug);
  const total = getCartTotal(resolved);
  const message = buildOrderMessage(resolved);
  const whatsappUrl = resolved.length > 0 ? buildWhatsAppUrl(message) : null;

  function handleSendOrder() {
    // El link ya se abre con el href resuelto en este click; limpiamos el
    // carrito después para que no quede presentado como si siguiera
    // pendiente del mismo pedido.
    clear();
    setOrderPrepared(true);
  }

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        aria-label="Cerrar carrito"
        onClick={handleClose}
        className="absolute inset-0 bg-ink/50"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compras"
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-paper text-ink shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="font-display text-2xl tracking-tight">CARRITO</h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            aria-label="Cerrar carrito"
            className="text-ink transition-opacity hover:opacity-60"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {orderPrepared ? (
            <div className="flex flex-col items-start gap-4 py-10">
              <p className="font-display text-xl tracking-tight">Pedido preparado</p>
              <p className="text-sm text-ink-soft">
                Abrimos WhatsApp con el detalle de tu pedido. Bresstore todavía no lo recibió:
                para finalizarlo, enviá el mensaje desde WhatsApp.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex items-center justify-center border border-line px-4 py-2 text-xs uppercase tracking-wider hover:border-ink"
              >
                Seguir comprando
              </button>
            </div>
          ) : resolved.length === 0 ? (
            <p className="py-10 text-center text-sm text-ink-soft">
              Tu carrito está vacío. Agregá una camiseta desde el catálogo.
            </p>
          ) : (
            <ul className="flex flex-col divide-y divide-line">
              {resolved.map((line) => (
                <li key={`${line.slug}-${line.size}`} className="flex gap-3 py-4">
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-wider text-ink-soft">
                      {line.product.team}
                    </p>
                    <p className="font-display text-lg leading-tight">{line.product.name}</p>
                    <p className="mt-1 text-xs text-ink-soft">Talle: {line.size}</p>

                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        aria-label={`Restar unidad de ${line.product.name} talle ${line.size}`}
                        onClick={() => updateQuantity(line.slug, line.size, line.quantity - 1)}
                        className="h-7 w-7 border border-line text-sm"
                      >
                        −
                      </button>
                      <span aria-live="polite" className="w-6 text-center text-sm">
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Sumar unidad de ${line.product.name} talle ${line.size}`}
                        onClick={() => updateQuantity(line.slug, line.size, line.quantity + 1)}
                        className="h-7 w-7 border border-line text-sm"
                      >
                        +
                      </button>

                      <button
                        type="button"
                        onClick={() => removeLine(line.slug, line.size)}
                        className="ml-auto text-xs uppercase tracking-wider text-ink-soft underline hover:text-ink"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>

                  <p className="font-display text-sm">{formatPrice(line.subtotal)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {!orderPrepared && resolved.length > 0 ? (
          <div className="border-t border-line px-5 py-4">
            <div className="flex items-center justify-between font-display text-xl">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>

            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSendOrder}
                className="mt-4 flex items-center justify-center bg-ink px-4 py-3 font-display text-lg tracking-wide text-paper transition-opacity hover:opacity-90"
              >
                Enviar pedido por WhatsApp
              </a>
            ) : (
              <p className="mt-4 text-xs text-ink-soft">
                Falta configurar el número de WhatsApp (NEXT_PUBLIC_WHATSAPP_NUMBER).
              </p>
            )}

            <button
              type="button"
              onClick={clear}
              className="mt-3 w-full text-center text-xs uppercase tracking-wider text-ink-soft underline hover:text-ink"
            >
              Vaciar carrito
            </button>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
