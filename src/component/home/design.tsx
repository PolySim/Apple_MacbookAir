import { useVisible } from "@/hook/useVisible";
import { cn } from "@/lib/utils";
import { useWindowStore } from "@/store/window.store";
import { useRef } from "react";
import FirstDesignImage from "./image";
import Size from "./size";
import { opacityScaleNow15 } from "./utils";

const Design = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(titleRef, "10px");
  const scrollPosition = useWindowStore((state) => state.scrollPosition);
  const { scale } = opacityScaleNow15(scrollPosition);
  const apparitionPresent15 = scale > 0.8;

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className={cn("h-[200vh]", {
          "h-[120vh]": apparitionPresent15,
        })}
      />
      <div
        className={cn("w-text opacity-0 translate-y-3", {
          "animate-text-apparition": isVisible,
        })}
        ref={titleRef}
      >
        <p className="text-[18px] font-normal text-black">Design</p>
        <div className="text-[72px] font-semibold">
          <p className="text-[72px] font-semibold">Your choice.</p>
          <p className="text-[72px] font-semibold">Your hair.</p>
        </div>
      </div>
      <FirstDesignImage />
      <Size />
    </div>
  );
};

export default Design;
