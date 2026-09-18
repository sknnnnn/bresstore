import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-[1400px] flex-col items-start gap-4 px-5 py-24 md:px-8">
      <h1 className="font-display text-4xl tracking-tight md:text-6xl">PÁGINA NO ENCONTRADA</h1>
      <p className="text-ink-soft">No encontramos lo que buscabas.</p>
      <Link
        href="/catalogo"
        className="inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-display text-lg tracking-wide"
      >
        Ver catálogo
        <span aria-hidden>→</span>
      </Link>
    </main>
  );
}
