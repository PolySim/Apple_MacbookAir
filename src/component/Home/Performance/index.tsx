import { useVisible } from "@/Function/useVisible";
import { PerformanceStyle, PerformanceTitle } from "@/styled";
import { useRef } from "react";
import VideoPerformance from "./Video";
import NumberPerformance from "./Number";
import ButtonGoInside from "./GoInside";

export default function Performance(): JSX.Element {
  const titleRef = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(titleRef, "-20px");

  return (
    <PerformanceStyle>
      <PerformanceTitle visible={isVisible} ref={titleRef}>
        <p>PERFORMANCE</p>
        <div>
          <p>Incredible speed</p>
          <p>
            <i>and</i> battery life? 🤯
          </p>
        </div>
      </PerformanceTitle>
      <VideoPerformance />
      <NumberPerformance />
      <p>
        The M2 chip brings <span>more speed to everything you do</span> —
        whether you’re editing a video for class, collaborating on a business
        plan, or streaming a show while you shop online. And with{" "}
        <span>all-day battery life</span>, you can leave the power adapter at
        home.
      </p>
      <p>
        <span>Compared to a PC laptop with</span> an Intel Core i7 processor,
        MacBook Air delivers up to <span>2x faster performance</span>,
        <sup>4</sup> up to <span>50 percent faster web browsing</span>,
        <sup>5</sup> and up to <span>50 percent longer battery life</span>.
        <sup>6</sup>
      </p>
      <ButtonGoInside />
    </PerformanceStyle>
  );
}
