export type ScrollContextType = {
  scrollPosition: number;
  apparitionPresent15: boolean;
  setApparitionPresent15: React.Dispatch<React.SetStateAction<boolean>>;
};

export type OpacityScaleNow15 = (scrollPosition: number) => {
  opacity: number;
  scale: number;
};

export type UseVisible = (
  rootElRef: React.RefObject<HTMLElement>,
  top: string
) => boolean;

export type ScaleVideoDesign = (scrollPosition: number) => number;

export type DataColors = {
  midnight: DataColor;
  starlight: DataColor;
  spaceGray: DataColor;
  silver: DataColor;
};

type DataColor = {
  coast: string;
  magSafe: string;
  front: string;
  name: string;
  bgColor: string;
};

export type ColorFocus = {
  index: number;
  name: "midnight" | "silver" | "spaceGray" | "starlight";
};
