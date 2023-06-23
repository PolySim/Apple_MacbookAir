import { ScrollContext } from "@/context";
import { TitleStyle } from "@/styled";
import { useContext } from "react";

export default function Title(): JSX.Element {
  const { scrollPosition } = useContext(ScrollContext);

  return (
    <TitleStyle
      isFixed={scrollPosition > 44}
      bgColor={scrollPosition > 172 ? "rgba(255, 255, 255, 0.8)" : "white"}
    >
      <div>
        <div>
          <div>13" and 15" models with M2 chip</div>
          <div>MacBook Air</div>
        </div>
        <div>
          <div>Overview</div>
          <div>Tech Specs</div>
          <div>Compare</div>
          <div>New to Mac</div>
          <div>Buy</div>
        </div>
      </div>
    </TitleStyle>
  );
}
