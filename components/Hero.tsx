import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import { heroContent } from "@/lib/hero-content";

// Estructura del Hero: sección → grilla de 2 bloques (contenido / visual).
// Mapea 1 a 1 a un futuro frame de Figma "Hero" con sub-frames "Content"
// y "Visual". El contenido y los colores viven en lib/hero-content.ts.
export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-12 md:items-end">
        <HeroContent
          className="order-2 px-5 pb-10 pt-8 md:order-1 md:col-span-7 md:px-8 md:pb-20 md:pt-16"
          badge={heroContent.badge}
          headingLines={heroContent.headingLines}
          cta={heroContent.cta}
          meta={heroContent.meta}
        />

        <HeroVisual
          className="order-1 relative flex items-center justify-center bg-ink px-8 py-12 md:order-2 md:col-span-5 md:h-full md:py-0"
          {...heroContent.visual}
        />
      </div>
    </section>
  );
}
