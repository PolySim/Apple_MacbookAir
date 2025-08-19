import { useVisible } from "@/hook/useVisible";
import { cn } from "@/lib/utils";
import { useWindowStore } from "@/store/window.store";
import { useRef } from "react";
import { opacityScaleNow15 } from "./utils";

const Present15 = () => {
  const scrollPosition = useWindowStore((state) => state.scrollPosition);
  const { scale } = opacityScaleNow15(scrollPosition);
  const apparitionPresent15 = scale > 0.8;
  const presentRef = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(presentRef, "10px");

  return (
    <div
      className={cn(
        "flex flex-col items-center relative w-full top-[110vh] opacity-0 translate-y-3",
        {
          "animate-text-apparition": apparitionPresent15 && isVisible,
        }
      )}
      ref={presentRef}
    >
      <div className="w-text text-[64px] font-bold leading-[-0.6px]">
        <div>Impressively big.</div>
        <div>Impossibly thin.</div>
      </div>
      <div className="w-text text-[24px] mt-6 text-gray-500">
        <div className="leading-none">
          The <b className="text-black">new 15‑inch MacBook Air</b> makes room
          for more of what you love with a spacious Liquid Retina display. And
          with the 13‑inch model, you have more reasons than ever to choose Air.
          Supercharged by the M2 chip — and with up to 18 hours of battery life1
          — both laptops deliver blazing-fast performance in an ultraportable
          design.
        </div>
      </div>
      <div className="w-text text-[19px] mt-6">
        <div>13” model from $91.58/mo. for 12 mo. or $1099**</div>
        <div>
          <span className="text-orange-500">New</span> 15” model from
          $108.25/mo. for 12 mo. or $1299**
        </div>
      </div>
      <div className="w-text flex mt-6 text-[19px] text-blue-500">
        <div className="flex items-center h-[27px]">
          Watch the film
          <svg className="ml-2 h-[20px]" fill="#0066cc" viewBox="0 0 24 24">
            <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM10,8l6,4-6,4Z" />
          </svg>
        </div>
        <div className="flex items-center h-[27px] ml-[24px]">
          Watch the event
          <svg
            className="ml-2 h-[20px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Present15;
