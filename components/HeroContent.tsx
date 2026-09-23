import { Fragment } from "react";
import Link from "next/link";

// Bloque de texto/CTA del Hero (columna izquierda). Presentacional puro:
// recibe el contenido por props, no conoce de dónde viene el copy.

export default function HeroContent({
  className,
  badge,
  headingLines,
  cta,
  meta,
}: {
  className?: string;
  badge: string;
  headingLines: string[];
  cta: { label: string; href: string };
  meta?: string;
}) {
  return (
    <div className={className}>
      <span className="inline-flex items-center gap-2 border border-ink/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink-soft">
        {badge}
      </span>

      <h1 className="mt-5 font-display text-[15vw] leading-[0.9] tracking-tight text-balance md:text-[6.4vw]">
        {headingLines.map((line, i) => (
          <Fragment key={line}>
            {line}
            {i < headingLines.length - 1 ? <br /> : null}
          </Fragment>
        ))}
      </h1>

      <div className="mt-8 flex items-center gap-6">
        <Link
          href={cta.href}
          className="inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-display text-lg tracking-wide"
        >
          {cta.label}
          <span aria-hidden>→</span>
        </Link>
        {meta ? (
          <span className="hidden text-xs uppercase tracking-wider text-ink-soft sm:inline">
            {meta}
          </span>
        ) : null}
      </div>
    </div>
  );
}
