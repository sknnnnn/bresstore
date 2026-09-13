import type { Metadata } from "next";
import TeamIndexList from "@/components/TeamIndexList";
import { clubs } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: "Clubes — Bresstore",
};

export default function ClubesPage() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs uppercase tracking-widest text-paper/60">Archivo de fútbol</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">CLUBES</h1>

      <TeamIndexList
        items={clubs.map((c) => ({ slug: c.slug, name: c.name, meta: c.country, colors: c.colors }))}
        basePath="/clubes"
      />
    </section>
  );
}
