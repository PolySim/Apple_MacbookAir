import { ScaleVideoDesign } from "@/type";

export const scaleVideo: ScaleVideoDesign = (scrollPosition) => {
  const windowHeight = window.innerHeight;
  const result =
    windowHeight * 0.00082 +
    (scrollPosition % windowHeight) / (windowHeight * 2);

  if (result < 0.8) {
    return 0.8;
  } else if (result > 1) {
    return 1;
  }
  return result;
};
