import HomeMeta from "@/components/home/HomeMeta";
import HomeDisplay from "@/components/home/HomeDisplay";
import HomeSeasonStrip from "@/components/home/HomeSeasonStrip";
import HomeGrid from "@/components/home/HomeGrid";
import HomeThanks from "@/components/home/HomeThanks";

export default function Home() {
  return (
    <>
      <HomeMeta />
      <HomeDisplay />
      <HomeSeasonStrip />
      <HomeGrid />
      <HomeThanks />
    </>
  );
}
