import Link from "next/link";

const TABS = [
  { label: "Todas", href: "/catalogo" },
  { label: "Clubes", href: "/clubes" },
  { label: "Selecciones", href: "/selecciones" },
  { label: "Retro", href: "/retro" },
];

export default function CategoryTabs({ active }: { active: string }) {
  return (
    <nav aria-label="Categorías" className="flex flex-wrap gap-2">
      {TABS.map((tab) => {
        const isActive = tab.label === active;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={`border px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
              isActive
                ? "border-ink bg-ink text-paper"
                : "border-line text-ink-soft hover:border-ink hover:text-ink"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
