import { useVisible } from "@/hook/useVisible";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import ButtonGoInside from "./performanceGo";
import NumberPerformance from "./performanceNumber";
import VideoPerformance from "./performanceVideo";

const Performance = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(titleRef, "-20px");

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className={cn("w-text opacity-0 translate-y-3 mt-24", {
          "animate-text-apparition": isVisible,
        })}
        ref={titleRef}
      >
        <p className="text-[18px] font-normal text-black">PERFORMANCE</p>
        <div>
          <p className="text-[72px] font-semibold">Incredible speed</p>
          <p className="text-[72px] font-semibold">
            <i>and</i> battery life? 🤯
          </p>
        </div>
      </div>
      <VideoPerformance />
      <NumberPerformance />
      <p className="mt-12 text-[24px] w-text text-gray-500">
        The M2 chip brings{" "}
        <span className="text-black">more speed to everything you do</span> —
        whether you’re editing a video for class, collaborating on a business
        plan, or streaming a show while you shop online. And with{" "}
        <span className="text-black">all-day battery life</span>, you can leave
        the power adapter at home.
      </p>
      <p className="mt-12 text-[24px] w-text text-gray-500">
        <span className="text-black">Compared to a PC laptop with</span> an
        Intel Core i7 processor, MacBook Air delivers up to{" "}
        <span className="text-black">2x faster performance</span>,<sup>4</sup>{" "}
        up to <span className="text-black">50 percent faster web browsing</span>
        ,<sup>5</sup> and up to{" "}
        <span className="text-black">50 percent longer battery life</span>.
        <sup>6</sup>
      </p>
      <ButtonGoInside />
    </div>
  );
};

export default Performance;
