import Link from "next/link";

// Cierre de la Home: lleva al catálogo completo. La exploración por
// categorías (Clubes / Selecciones / Retro) ocurre dentro del catálogo.
export default function CatalogCta() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            TODAS LAS CAMISETAS
          </h2>
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-display text-lg tracking-wide"
          >
            Ver catálogo
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
