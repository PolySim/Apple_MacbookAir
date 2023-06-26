export type ScrollContextType = {
  scrollPosition: number;
};

export type OpacityScaleNow15 = (scrollPosition: number) => {
  opacity: number;
  scale: number;
};
