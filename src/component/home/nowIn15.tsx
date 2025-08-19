import { cn } from "@/lib/utils";
import { useWindowStore } from "@/store/window.store";
import { opacityScaleNow15, scrollScale } from "./utils";

const NowIn15 = () => {
  const scrollPosition = useWindowStore((state) => state.scrollPosition);

  const { opacity, scale } = opacityScaleNow15(scrollPosition);
  const scroll_scale = scrollScale(scrollPosition);

  return (
    <div
      className={cn("relative top-[110vh] w-full", {
        fixed: scale < 0.8,
        "opacity-0": scroll_scale !== 0,
      })}
    >
      <div
        className="absolute z-10 top-0 left-0 w-full h-[200vh]"
        style={{
          backgroundColor: `rgba(0,0,0,${opacity})`,
        }}
      />
      <div
        className={cn(
          "flex justify-center top-0 w-full origin-center relative",
          {
            fixed: scale < 0.8,
          }
        )}
        style={{ transform: `scale(${scale})` }}
      >
        <img src={"/Apple_MacbookAir/static.jpg"} alt="MacBook Air 15'" />
      </div>
    </div>
  );
};

export default NowIn15;
