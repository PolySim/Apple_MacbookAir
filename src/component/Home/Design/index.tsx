import { useVisible } from "@/Function/useVisible";
import { ScrollContext } from "@/context";
import { DesignStyle, TitleDesign } from "@/styled";
import { useContext, useRef } from "react";
import FirstDesignImage from "./Image";
import Size from "../Size";

export default function Design(): JSX.Element {
  const titleRef = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(titleRef, "10px");
  const { apparitionPresent15 } = useContext(ScrollContext);

  return (
    <DesignStyle visible={apparitionPresent15}>
      <div />
      <TitleDesign visible={isVisible} ref={titleRef}>
        <p>Design</p>
        <div>
          <p>Your choice.</p>
          <p>Your hair.</p>
        </div>
      </TitleDesign>
      <FirstDesignImage />
      <Size />
    </DesignStyle>
  );
}
