import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TeaserCards from "@/components/sections/TeaserCards";
import FeatureCards from "@/components/sections/FeatureCards";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TeaserCards />
        <FeatureCards />
      </main>
      <Footer />
    </>
  );
}
