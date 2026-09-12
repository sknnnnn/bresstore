import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import NewJerseys from "@/components/NewJerseys";
import ClubsSection from "@/components/ClubsSection";
import SelectionsSection from "@/components/SelectionsSection";
import BrandSection from "@/components/BrandSection";
import CatalogPreview from "@/components/CatalogPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <NewJerseys />
        <ClubsSection />
        <SelectionsSection />
        <BrandSection />
        <CatalogPreview />
      </main>
      <Footer />
    </>
  );
}
