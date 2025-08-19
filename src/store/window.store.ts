import { create } from "zustand";

type UseWindowStore = {
  scrollPosition: number;
  setScrollPosition: (scrollPosition: number) => void;
  windowWidth: number;
  setWindowWidth: (windowWidth: number) => void;
};

export const useWindowStore = create<UseWindowStore>()((set) => ({
  scrollPosition: 0,
  setScrollPosition: (scrollPosition) => set({ scrollPosition }),
  windowWidth: 1080,
  setWindowWidth: (windowWidth) => set({ windowWidth }),
}));
