import Link from "next/link";
import { clubs } from "@/lib/demo-data";
import TeamIndexList from "./TeamIndexList";

export default function ClubsSection() {
  return (
    <section id="clubes" className="border-t border-line bg-paper text-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">CLUBES</h2>
          <Link
            href="/clubes"
            className="hidden text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-ink sm:inline"
          >
            Ver todos →
          </Link>
        </div>

        <TeamIndexList
          items={clubs.map((c) => ({ slug: c.slug, name: c.name, meta: c.country, colors: c.colors }))}
          basePath="/clubes"
          tone="paper"
        />
      </div>
    </section>
  );
}
