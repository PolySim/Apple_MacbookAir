import { useWindowStore } from "@/store/window.store";
import { useEffect } from "react";

const WindowSizeInitilizer = () => {
  useEffect(() => {
    const handleResize = () => {
      useWindowStore.getState().setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return null;
};

export default WindowSizeInitilizer;
