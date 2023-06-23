import { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { ScrollContext } from "@/context";

export default function App(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <ScrollContext.Provider
      value={{
        scrollPosition,
      }}
    >
      <Header />
      <Home />
    </ScrollContext.Provider>
  );
}
