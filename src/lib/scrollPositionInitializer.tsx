import { useWindowStore } from "@/store/window.store";
import { useEffect } from "react";

const ScrollPositionInitializer = () => {
  useEffect(() => {
    const handleScroll = () => {
      useWindowStore.getState().setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default ScrollPositionInitializer;
