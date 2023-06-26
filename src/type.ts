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
  rootElRef: React.RefObject<HTMLDivElement>,
  top: string
) => boolean;
