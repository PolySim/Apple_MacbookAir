import { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { ScrollContext } from "@/context";

export default function App(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [apparitionPresent15, setApparitionPresent15] =
    useState<boolean>(false);

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
        apparitionPresent15,
        setApparitionPresent15,
      }}
    >
      <Header />
      <Home />
    </ScrollContext.Provider>
  );
}
