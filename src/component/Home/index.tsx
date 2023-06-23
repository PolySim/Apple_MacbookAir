import { ScrollContext } from "@/context";
import { HomeStyled } from "@/styled";
import { useContext } from "react";
import { scrollOpacity, scrollScale } from "./calcStyleText";

export default function Home(): JSX.Element {
  const { scrollPosition } = useContext(ScrollContext);

  return (
    <HomeStyled
      opacity={scrollOpacity(scrollPosition)}
      scale={scrollScale(scrollPosition)}
    >
      <div>MacBook Air</div>
    </HomeStyled>
  );
}
