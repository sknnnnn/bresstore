import JerseyVisual from "./JerseyVisual";
import type { HeroVisualContent } from "@/lib/hero-content";

// Slot visual del Hero (columna derecha). Hoy renderiza el placeholder de
// camiseta; cuando haya asset real (foto de camiseta o modelo), basta con
// setear `image` en heroContent.visual — ver JerseyVisual.
export default function HeroVisual({
  className,
  label,
  number,
  colors,
  image,
}: HeroVisualContent & { className?: string }) {
  return (
    <div className={className}>
      {label ? (
        <span className="absolute left-5 top-5 font-display text-sm tracking-widest text-accent">
          {label}
        </span>
      ) : null}
      <JerseyVisual
        image={image}
        colors={colors}
        number={number}
        alt="Camiseta destacada"
        className="h-56 w-auto md:h-[26rem]"
      />
    </div>
  );
}
