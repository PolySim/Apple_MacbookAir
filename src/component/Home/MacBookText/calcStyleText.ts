export const scrollOpacity = (scrollPosition: number): number => {
  return Math.min(0.3 + scrollPosition / (window.innerHeight / 2), 1);
};

export const scrollScale = (scrollPosition: number): number => {
  const scale = 0.3 + scrollPosition / (window.innerHeight / 2);
  return scrollPosition < 1.3 * window.innerHeight
    ? Math.max(1, scale ** 5)
    : 0;
};
