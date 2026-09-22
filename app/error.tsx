"use client"; // Los error boundaries deben ser Client Components

import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex max-w-[1400px] flex-col items-start gap-4 px-5 py-24 md:px-8">
      <h1 className="font-display text-4xl tracking-tight md:text-6xl">ALGO SALIÓ MAL</h1>
      <p className="text-ink-soft">
        Ocurrió un error inesperado. Podés intentar de nuevo.
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-display text-lg tracking-wide"
      >
        Reintentar
        <span aria-hidden>→</span>
      </button>
    </main>
  );
}
