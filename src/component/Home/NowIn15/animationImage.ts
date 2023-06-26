import { OpacityScaleNow15 } from "@/type";

export const opacityScaleNow15: OpacityScaleNow15 = (scrollPosition) => {
  const value =
    window.innerHeight / (4 * (scrollPosition - window.innerHeight));

  return {
    opacity: Math.max(0, value < 0.1 ? 0 : value ** 2 + 0.01 * value),
    scale: 1 - Math.max(0, value),
  };
};
