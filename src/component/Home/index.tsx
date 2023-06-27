import { HomeStyled } from "@/styled";
import MacBookText from "./MacBookText";
import NowIn15 from "./NowIn15";
import Present15 from "./Present15";
import Design from "./Design";

export default function Home(): JSX.Element {
  return (
    <HomeStyled>
      <div>
        <MacBookText />
      </div>
      <NowIn15 />
      <Present15 />
      <Design />
    </HomeStyled>
  );
}
