import { ScaleVideoDesign } from "@/type";

export const scaleVideoPerformance: ScaleVideoDesign = (scrollPosition) => {
  const windowHeight = window.innerHeight;

  const value = (scrollPosition - 6 * windowHeight) / windowHeight;

  if (value < 0.8) {
    return 0.8;
  } else if (value > 1) {
    return 1;
  }
  return value;
};
