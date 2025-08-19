import { useWindowStore } from "@/store/window.store";
import { MacBookTextStyle } from "@/styled";
import { scrollOpacity, scrollScale } from "./calcStyleText";

export default function MacBookText(): JSX.Element {
  const scrollPosition = useWindowStore((state) => state.scrollPosition);
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
