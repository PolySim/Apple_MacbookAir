import { NowIn15Style } from "@/styled";
import { useContext, useEffect } from "react";
import { ScrollContext } from "@/context";
import { scrollScale } from "../MacBookText/calcStyleText";
import { opacityScaleNow15 } from "./animationImage";

export default function NowIn15(): JSX.Element {
  const { scrollPosition } = useContext(ScrollContext);
  const { opacity, scale } = opacityScaleNow15(scrollPosition);
  const { setApparitionPresent15 } = useContext(ScrollContext);

  useEffect(() => {
    setApparitionPresent15(scale > 0.8);
  }, [scale, setApparitionPresent15]);

  return (
    <NowIn15Style
      visible={scrollScale(scrollPosition) === 0}
      fixed={scale < 0.8}
    >
      <div
        style={{
          backgroundColor: `rgba(0,0,0,${opacity})`,
        }}
      />
      <div style={{ transform: `scale(${scale})` }}>
        <img src={"/Apple_MacbookAir/static.jpg"} alt="MacBook Air 15'" />
      </div>
    </NowIn15Style>
  );
}
