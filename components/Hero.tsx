import Grain from "./Grain";
import JerseyPlaceholder from "./JerseyPlaceholder";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-12">
        <div className="order-2 flex flex-col justify-center px-5 pb-10 pt-8 md:order-1 md:col-span-7 md:px-8 md:py-16">
          <p className="text-xs uppercase tracking-widest text-paper/60">
            Temporada 25/26 · Colección inicial
          </p>

          <h1 className="mt-5 font-display text-[15vw] leading-[0.9] tracking-tight text-balance md:text-[6.2vw]">
            CAMISETAS
            <br />
            PARA LOS QUE
            <br />
            VIVEN EL FÚTBOL.
          </h1>

          <div className="mt-8">
            <a
              href="#nuevas-camisetas"
              className="inline-flex items-center gap-2 border-b-2 border-paper pb-1 font-display text-lg tracking-wide"
            >
              Ver camisetas
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="group order-1 relative min-h-[70vw] overflow-hidden bg-pitch-deep sm:min-h-[50vw] md:order-2 md:col-span-5 md:min-h-0">
          <Grain opacity={0.09} />
          <JerseyPlaceholder
            colors={{ primary: "#f2ecdd", secondary: "#17160f", trim: "#17160f" }}
            className="absolute inset-0 m-auto h-[78%] w-auto transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
          <p className="absolute bottom-5 left-5 right-5 text-[11px] uppercase tracking-wider text-paper/70">
            N.º 10 — 25/26
          </p>
        </div>
      </div>
    </section>
  );
}
