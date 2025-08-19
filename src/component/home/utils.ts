import { OpacityScaleNow15, ScaleVideoDesign } from "@/type";

export const scrollOpacity = (scrollPosition: number): number => {
  return Math.min(0.3 + scrollPosition / (window.innerHeight / 2), 1);
};

export const scrollScale = (scrollPosition: number): number => {
  const scale = 0.3 + scrollPosition / (window.innerHeight / 2);
  return scrollPosition < 1.3 * window.innerHeight
    ? Math.max(1, scale ** 5)
    : 0;
};

export const opacityScaleNow15: OpacityScaleNow15 = (scrollPosition) => {
  const value =
    window.innerHeight / (4 * (scrollPosition - window.innerHeight));

  return {
    opacity: Math.max(0, value < 0.1 ? 0 : value ** 2 + 0.01 * value),
    scale: 1 - Math.max(0, value),
  };
};

export const scaleVideo: ScaleVideoDesign = (scrollPosition) => {
  const windowHeight = window.innerHeight;
  const result = scrollPosition / (windowHeight * 4);

  if (result < 0.8) {
    return 0.8;
  } else if (result > 1) {
    return 1;
  }
  return result;
};

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
