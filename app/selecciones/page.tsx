import type { Metadata } from "next";
import TeamIndexList from "@/components/TeamIndexList";
import { selections } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: "Selecciones — Bresstore",
};

export default function SeleccionesPage() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs uppercase tracking-widest text-paper/60">Archivo de fútbol</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">SELECCIONES</h1>

      <TeamIndexList
        items={selections.map((s) => ({ slug: s.slug, name: s.name, colors: s.colors }))}
        basePath="/selecciones"
      />
    </section>
  );
}
