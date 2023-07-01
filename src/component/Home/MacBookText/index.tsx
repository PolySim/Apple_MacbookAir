import { ScrollContext } from "@/context";
import { useContext } from "react";
import { scrollOpacity, scrollScale } from "./calcStyleText";
import { MacBookTextStyle } from "@/styled";

export default function MacBookText(): JSX.Element {
  const { scrollPosition } = useContext(ScrollContext);
  return (
    <MacBookTextStyle
      style={{
        opacity: scrollOpacity(scrollPosition),
        transform: `scale(${scrollScale(scrollPosition)})`,
      }}
    >
      MacBook Air
    </MacBookTextStyle>
  );
}
