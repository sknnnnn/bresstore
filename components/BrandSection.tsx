export default function BrandSection() {
  return (
    <section className="relative border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest">
          <span className="text-accent">N.º 001</span>
          <span aria-hidden className="text-paper/30">—</span>
          <span className="text-paper/60">Recién arrancamos</span>
        </div>

        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[0.95] tracking-tight md:text-7xl">
          ESTAMOS ARRANCANDO.
        </h2>

        <p className="mt-6 max-w-xl text-lg text-paper/75 md:text-xl">
          Bresstore nace para encontrar, usar y coleccionar camisetas que
          cuentan algo.
        </p>
      </div>
    </section>
  );
}
