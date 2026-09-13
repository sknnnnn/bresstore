import Hero from "@/components/Hero";
import NewJerseys from "@/components/NewJerseys";
import ClubsSection from "@/components/ClubsSection";
import SelectionsSection from "@/components/SelectionsSection";
import BrandSection from "@/components/BrandSection";
import CatalogPreview from "@/components/CatalogPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <NewJerseys />
      <ClubsSection />
      <SelectionsSection />
      <BrandSection />
      <CatalogPreview />
    </>
  );
}
