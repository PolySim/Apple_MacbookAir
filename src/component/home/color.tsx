import { cn } from "@/lib/utils";
import { ColorFocus } from "@/type";
import { useState } from "react";
import { COLORS } from "./dataColors";

const ColorImage = () => {
  const colors: ["midnight", "silver", "spaceGray", "starlight"] = [
    "midnight",
    "silver",
    "spaceGray",
    "starlight",
  ];
  const [colorFocus, setColorFocus] = useState<ColorFocus>({
    index: 1,
    name: "midnight",
  });

  return (
    <div className="flex justify-between mt-12 w-text h-fit">
      <div className="w-[49%] flex flex-col justify-between">
        <div className="box-border p-[43px_89px] bg-bg-image">
          <img
            className="w-full"
            src={COLORS[colorFocus.name].coast}
            alt={`Side view of MacBook Air in ${
              COLORS[colorFocus.name].name
            } color`}
          />
        </div>
        <div className="mt-6">
          <img
            className="w-full"
            src={COLORS[colorFocus.name].magSafe}
            alt={`Top view showing MagSafe cable plugged into MacBook Air in ${
              COLORS[colorFocus.name].name
            } color`}
          />
        </div>
      </div>
      <div className="w-[49%] box-border p-[43px_89px] bg-bg-image h-fit">
        <img
          src={COLORS[colorFocus.name].front}
          alt={`Front and top view of MacBook Air in ${
            COLORS[colorFocus.name].name
          } color`}
          className="w-full"
        />
        <div className="mt-8 flex">
          {colors.map((color, i) => (
            <div className="w-1/4 flex flex-col items-center" key={color}>
              <span
                className={cn(
                  "h-8 w-8 rounded-full bg-clip-content mb-[3px] p-[3px] text-xs",
                  {
                    "border-2 border-blue-500": colorFocus.index === i + 1,
                  }
                )}
                style={{ backgroundColor: COLORS[color].bgColor }}
                onClick={() => {
                  setColorFocus((curr) => ({
                    ...curr,
                    index: i + 1,
                    name: color,
                  }));
                }}
              />
              {color === colorFocus.name ? (
                <span>{COLORS[color].name}</span>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorImage;
