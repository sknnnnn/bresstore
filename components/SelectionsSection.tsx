import { selections } from "@/lib/demo-data";
import JerseyVisual from "./JerseyVisual";

export default function SelectionsSection() {
  return (
    <section id="selecciones" className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <h2 className="font-display text-4xl tracking-tight md:text-6xl">SELECCIONES</h2>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {selections.map((sel) => (
          <div key={sel.name} className="border border-line px-6 py-8">
            <JerseyVisual
              image={sel.image}
              colors={sel.colors}
              alt={sel.name}
              className="mx-auto h-40 w-auto"
            />
            <p className="mt-6 text-center font-display text-2xl tracking-tight">{sel.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
