import JerseyPlaceholder from "./JerseyPlaceholder";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-12 md:items-end">
        <div className="order-2 px-5 pb-10 pt-8 md:order-1 md:col-span-7 md:px-8 md:pb-20 md:pt-16">
          <span className="inline-flex items-center gap-2 border border-ink/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink-soft">
            Temporada 25/26
          </span>

          <h1 className="mt-5 font-display text-[15vw] leading-[0.9] tracking-tight text-balance md:text-[6.4vw]">
            CAMISETAS
            <br />
            PARA LOS QUE
            <br />
            VIVEN EL FÚTBOL.
          </h1>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="#nuevas-camisetas"
              className="inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-display text-lg tracking-wide"
            >
              Ver camisetas
              <span aria-hidden>→</span>
            </a>
            <span className="hidden text-xs uppercase tracking-wider text-ink-soft sm:inline">
              Clubes · Selecciones · Retro
            </span>
          </div>
        </div>

        <div className="order-1 relative flex items-center justify-center bg-ink px-8 py-12 md:order-2 md:col-span-5 md:h-full md:py-0">
          <span className="absolute left-5 top-5 font-display text-sm tracking-widest text-accent">
            N.º 10
          </span>
          <JerseyPlaceholder
            colors={{ primary: "#f4f2ec", secondary: "#14130f", trim: "#cbff3d" }}
            number="10"
            className="h-56 w-auto md:h-[26rem]"
          />
        </div>
      </div>
    </section>
  );
}
