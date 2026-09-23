import Hero from "@/components/Hero";
import NewJerseys from "@/components/NewJerseys";
import BrandSection from "@/components/BrandSection";
import CatalogCta from "@/components/CatalogCta";

// Home: Bresstore → algunas camisetas → qué representa la marca → catálogo.
// La exploración por Clubes / Selecciones / Retro vive en el catálogo.
export default function Home() {
  return (
    <main>
      <Hero />
      <NewJerseys />
      <BrandSection />
      <CatalogCta />
    </main>
  );
}
