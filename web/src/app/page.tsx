import "./home.css";
import HomeForest from "@/components/home/HomeForest";
import HomeNav from "@/components/home/HomeNav";
import HomeMeta from "@/components/home/HomeMeta";
import HomeDisplay from "@/components/home/HomeDisplay";
import HomeSeasonStrip from "@/components/home/HomeSeasonStrip";
import HomeGrid from "@/components/home/HomeGrid";
import HomeThanks from "@/components/home/HomeThanks";
import HomeFooter from "@/components/home/HomeFooter";

export default function Home() {
  return (
    <>
      <HomeForest />
      <div className="app">
        <HomeNav />
        <HomeMeta />
        <HomeDisplay />
        <HomeSeasonStrip />
        <HomeGrid />
        <HomeThanks />
        <HomeFooter />
      </div>
    </>
  );
}
