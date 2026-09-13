import { selections } from "@/lib/demo-data";
import PhotoTile from "./PhotoTile";

export default function SelectionsSection() {
  const [brasil, italia, argentina] = selections;

  return (
    <section id="selecciones" className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <h2 className="font-display text-4xl tracking-tight md:text-6xl">SELECCIONES</h2>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <PhotoTile colors={brasil.colors} className="aspect-[4/3] md:aspect-[16/11]" />
          <p className="mt-4 font-display text-2xl tracking-tight md:text-3xl">{brasil.name}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:col-span-5 md:grid-cols-1 md:gap-8">
          <div>
            <PhotoTile colors={italia.colors} className="aspect-[4/5] md:aspect-[16/9]" />
            <p className="mt-4 font-display text-2xl tracking-tight">{italia.name}</p>
          </div>
          <div>
            <PhotoTile colors={argentina.colors} className="aspect-[4/5] md:aspect-[16/9]" />
            <p className="mt-4 font-display text-2xl tracking-tight">{argentina.name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
