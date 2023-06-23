import { ScrollContext } from "@/context";
import { HomeStyled } from "@/styled";
import { useContext } from "react";
import { scrollOpacity, scrollScale } from "./calcStyleText";

export default function Home(): JSX.Element {
  const { scrollPosition } = useContext(ScrollContext);

  return (
    <HomeStyled>
      <div
        style={{
          opacity: scrollOpacity(scrollPosition),
          transform: `scale(${scrollScale(scrollPosition)})`,
        }}
      >
        MacBook Air
      </div>
    </HomeStyled>
  );
}
