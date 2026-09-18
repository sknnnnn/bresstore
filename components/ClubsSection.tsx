import Link from "next/link";
import { clubs } from "@/lib/demo-data";

export default function ClubsSection() {
  return (
    <section id="clubes" className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <h2 className="font-display text-4xl tracking-tight md:text-6xl">CLUBES</h2>

        <ul className="mt-8 divide-y divide-paper/15 border-t border-paper/15">
          {clubs.map((club, i) => (
            <li key={club.name}>
              <Link
                href={`/catalogo?team=${encodeURIComponent(club.name)}`}
                className="group flex items-center gap-4 py-5 md:gap-8"
              >
                <span className="w-8 shrink-0 font-display text-sm text-paper/50 md:w-14 md:text-base">
                  0{i + 1}
                </span>
                <span
                  className="h-8 w-2 shrink-0 md:h-10 md:w-3"
                  style={{ background: club.colors.primary }}
                  aria-hidden
                />
                <span className="font-display text-2xl leading-none tracking-tight transition-transform duration-200 group-hover:translate-x-1 md:text-4xl">
                  {club.name}
                </span>
                <span className="ml-auto hidden text-xs uppercase tracking-wider text-paper/50 sm:inline">
                  {club.country}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
