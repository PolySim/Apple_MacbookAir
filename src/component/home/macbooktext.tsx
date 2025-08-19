import { useWindowStore } from "@/store/window.store";
import { scrollOpacity, scrollScale } from "./utils";

const MacBookText = () => {
  const scrollPosition = useWindowStore((state) => state.scrollPosition);
  return (
    <div className="flex flex-col items-center justify-center w-full h-[95vh]">
      <div
        className="fixed top-[40%] transform -translate-y-1/2 text-[120px] font-semibold h-fit origin-[53.7%_60%] tracking-[-3px]"
        style={{
          opacity: scrollOpacity(scrollPosition),
          transform: `scale(${scrollScale(scrollPosition)})`,
        }}
      >
        MacBook Air
      </div>
    </div>
  );
};

export default MacBookText;
