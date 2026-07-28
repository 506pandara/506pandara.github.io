import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Worlds from "@/components/sections/Worlds";
import Robot from "@/components/sections/Robot";
import Achievements from "@/components/sections/Achievements";
import Team from "@/components/sections/Team";
import Sponsor from "@/components/sections/Sponsor";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Worlds />
        <Robot />
        <Achievements />
        <Team />
        <Sponsor />
      </main>
      <Footer />
    </>
  );
}
