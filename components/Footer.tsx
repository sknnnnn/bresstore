const NAV = ["Camisetas", "Clubes", "Selecciones", "Retro"];
const SOCIAL = ["Instagram", "TikTok", "Contacto"];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-2xl tracking-tight">BRESSTORE</p>
            <p className="mt-2 max-w-xs text-sm text-ink-soft">
              Camisetas para los que viven el fútbol.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-ink-soft">Tienda</p>
              <ul className="mt-3 space-y-2 text-sm">
                {NAV.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-ink-soft">Redes</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {SOCIAL.map((item) => (
                  <li key={item}>{item} (próximamente)</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Bresstore. Proyecto en desarrollo.</p>
          <p>Contenido e imágenes de esta página son de demostración.</p>
        </div>
      </div>
    </footer>
  );
}
