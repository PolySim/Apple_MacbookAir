import { cn } from "@/lib/utils";
import { useWindowStore } from "@/store/window.store";

const Title = () => {
  const scrollPosition = useWindowStore((state) => state.scrollPosition);

  return (
    <div
      className={cn(
        "flex flex-col justify-end items-center z-100 top-0 h-[66px] w-full relative bg-white after:content-[''] after:w-full after:max-w-[980px] after:h-px after:bg-gray-200 after:!mt-3",
        {
          "fixed after:max-w-full": scrollPosition > 44,
          "bg-white/80 saturate-[180%] backdrop-blur-[20px]":
            scrollPosition > 172,
        }
      )}
    >
      <div className="flex justify-between box-border px-3 w-full max-w-[980px]">
        <div>
          <div className="text-xs text-gray-500 font-normal">
            13" and 15" models with M2 chip
          </div>
          <div className="text-[21px] font-medium">MacBook Air</div>
        </div>
        <div className="flex gap-6 items-end">
          <div className="text-xs text-gray-400 font-normal">Overview</div>
          <div className="text-xs text-gray-500 font-normal">Tech Specs</div>
          <div className="text-xs text-gray-500 font-normal">Compare</div>
          <div className="text-xs text-gray-500 font-normal">New to Mac</div>
          <div className="text-xs font-extralight bg-blue-500 hover:bg-blue-600 text-white !px-2.5 py-[3px] rounded-full">
            Buy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
