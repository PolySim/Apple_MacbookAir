export const scrollOpacity = (scrollPosition: number): number => {
  return Math.min(0.3 + scrollPosition / (window.innerHeight / 2), 1);
};

export const scrollScale = (scrollPosition: number): number => {
  const start = (window.innerHeight * 0.7) / 2;
  return Math.max(100, (100 * (scrollPosition - start)) / window.innerHeight);
};
