import { HomeStyled } from "@/styled";
import MacBookText from "./MacBookText";
import NowIn15 from "./NowIn15";

export default function Home(): JSX.Element {
  return (
    <HomeStyled>
      <div>
        <MacBookText />
      </div>
      <NowIn15 />
    </HomeStyled>
  );
}
