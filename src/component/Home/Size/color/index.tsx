import { ButtonColor, ImageSizeStyle } from "@/styled";
import dataColors from "./dataColors";
import { useState } from "react";
import { ColorFocus } from "@/type";

export default function ColorImage(): JSX.Element {
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
    <ImageSizeStyle nbFocus={1}>
      <div>
        <div>
          <img
            src={dataColors[colorFocus.name].coast}
            alt={`Side view of MacBook Air in ${
              dataColors[colorFocus.name].name
            } color`}
          />
        </div>
        <div>
          <img
            src={dataColors[colorFocus.name].magSafe}
            alt={`Top view showing MagSafe cable plugged into MacBook Air in ${
              dataColors[colorFocus.name].name
            } color`}
          />
        </div>
      </div>
      <div>
        <img
          src={dataColors[colorFocus.name].front}
          alt={`Front and top view of MacBook Air in ${
            dataColors[colorFocus.name].name
          } color`}
        />
        <div>
          {colors.map((color, i) => (
            <div key={color}>
              <ButtonColor
                focus={colorFocus.index === i + 1}
                style={{ backgroundColor: dataColors[color].bgColor }}
                onClick={() => {
                  setColorFocus((curr) => ({
                    ...curr,
                    index: i + 1,
                    name: color,
                  }));
                }}
              />
              {color === colorFocus.name ? (
                <span>{dataColors[color].name}</span>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </ImageSizeStyle>
  );
}
