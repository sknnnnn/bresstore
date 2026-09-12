import { clubs, selections } from "@/lib/demo-data";
import JerseyPlaceholder from "./JerseyPlaceholder";

const preview = [...clubs.map((c) => c.colors), ...selections.map((s) => s.colors)];

export default function CatalogPreview() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            TODAS LAS CAMISETAS
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-display text-lg tracking-wide"
          >
            Ver catálogo
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
          {preview.map((colors, i) => (
            <div
              key={i}
              className="flex h-32 w-24 shrink-0 items-center justify-center bg-[#eae7dd] sm:h-40 sm:w-28"
            >
              <JerseyPlaceholder colors={colors} className="h-4/5 w-auto" />
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs uppercase tracking-wider text-ink-soft">
          Vista previa — catálogo completo en construcción
        </p>
      </div>
    </section>
  );
}
