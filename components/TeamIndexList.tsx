import Link from "next/link";
import type { JerseyColors } from "@/lib/demo-data";

type Item = {
  slug: string;
  name: string;
  meta?: string;
  colors: JerseyColors;
};

export default function TeamIndexList({
  items,
  basePath,
  tone = "pitch",
}: {
  items: Item[];
  basePath: string;
  tone?: "pitch" | "paper";
}) {
  const text = tone === "paper" ? "text-ink" : "text-paper";
  const soft = tone === "paper" ? "text-ink-soft" : "text-paper/50";
  const divider = tone === "paper" ? "divide-line-ink border-line-ink" : "divide-line border-line";

  return (
    <ul className={`mt-8 divide-y border-t ${divider}`}>
      {items.map((item, i) => (
        <li key={item.slug}>
          <Link
            href={`${basePath}/${item.slug}`}
            className="group flex items-center gap-4 py-5 md:gap-8"
          >
            <span className={`w-8 shrink-0 font-display text-sm md:w-14 md:text-base ${soft}`}>
              0{i + 1}
            </span>
            <span
              className="h-8 w-2 shrink-0 md:h-10 md:w-3"
              style={{ background: item.colors.primary }}
              aria-hidden
            />
            <span
              className={`font-display text-2xl leading-none tracking-tight transition-transform duration-200 group-hover:translate-x-1 md:text-4xl ${text}`}
            >
              {item.name}
            </span>
            {item.meta ? (
              <span className={`ml-auto hidden text-xs uppercase tracking-wider sm:inline ${soft}`}>
                {item.meta}
              </span>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}
