import RobotHeroCard from "./RobotHeroCard";
import StatsRow from "./StatsRow";
import AboutCard from "./AboutCard";
import PhotoPair from "./PhotoPair";

export default function HomeGrid() {
  return (
    <div className="grid">
      <div className="col">
        <RobotHeroCard />
        <StatsRow />
      </div>
      <div className="col">
        <AboutCard />
        <PhotoPair />
      </div>
    </div>
  );
}
