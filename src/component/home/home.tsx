import Design from "./design";
import MacBookText from "./macbooktext";
import NewToMac from "./newToMac";
import NowIn15 from "./nowIn15";
import Performance from "./performance";
import Present15 from "./present15";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-full overflow-x-hidden">
      <MacBookText />
      <NowIn15 />
      <Present15 />
      <Design />
      <Performance />
      <NewToMac />
    </div>
  );
};

export default Home;
