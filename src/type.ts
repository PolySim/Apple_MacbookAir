export type OpacityScaleNow15 = (scrollPosition: number) => {
  opacity: number;
  scale: number;
};

export type UseVisible = (
  rootElRef: React.RefObject<HTMLElement>,
  top: string
) => boolean;

export type ScaleVideoDesign = (scrollPosition: number) => number;

export type ColorFocus = {
  index: number;
  name: "midnight" | "silver" | "spaceGray" | "starlight";
};

export type HandleHorizontalScroll = (
  element: HTMLElement | null,
  step: number
) => void;

export type IsClickable = {
  left: boolean;
  right: boolean;
};

export type HandleIsClickable = (element: HTMLElement | null) => void;
