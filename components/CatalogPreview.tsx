import { clubs, selections } from "@/lib/demo-data";
import JerseyVisual from "./JerseyVisual";

const preview = [
  ...clubs.map((c) => ({ name: c.name, colors: c.colors, image: c.image })),
  ...selections.map((s) => ({ name: s.name, colors: s.colors, image: s.image })),
];

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
          {preview.map((item, i) => (
            <div key={i} className="flex w-24 shrink-0 flex-col gap-2 sm:w-28">
              <div className="flex h-32 items-center justify-center bg-[#eae7dd] sm:h-40">
                <JerseyVisual
                  image={item.image}
                  colors={item.colors}
                  alt={item.name}
                  className="h-4/5 w-auto"
                />
              </div>
              <p className="truncate text-center text-[10px] uppercase tracking-wider text-ink-soft">
                {item.name}
              </p>
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
