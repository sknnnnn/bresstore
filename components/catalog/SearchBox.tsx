"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBox({ initialQuery }: { initialQuery: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(initialQuery);
  const [syncedQuery, setSyncedQuery] = useState(initialQuery);

  // Si la URL cambia desde afuera (back/forward del navegador), reflejarlo
  // en el input. Ajuste de estado durante el render, sin efecto, siguiendo
  // el patrón recomendado por React para derivar estado de props.
  if (initialQuery !== syncedQuery) {
    setSyncedQuery(initialQuery);
    setValue(initialQuery);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (value.trim()) {
        params.set("q", value.trim());
      } else {
        params.delete("q");
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname);
    }, 300);
    return () => clearTimeout(timeout);
    // Solo re-ejecutar cuando cambia lo que escribe el usuario: incluir
    // router/pathname/searchParams dispararía el efecto en cada navegación.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="relative w-full max-w-sm">
      <label htmlFor="catalog-search" className="sr-only">
        Buscar camisetas
      </label>
      <input
        id="catalog-search"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar por nombre, club o selección…"
        className="w-full border border-line bg-paper px-4 py-2 text-sm text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none"
      />
      {value ? (
        <button
          type="button"
          onClick={() => setValue("")}
          aria-label="Limpiar búsqueda"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink"
        >
          ✕
        </button>
      ) : null}
    </div>
  );
}
