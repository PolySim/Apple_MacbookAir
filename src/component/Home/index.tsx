import { HomeStyled } from "@/styled";
import { useEffect, useState } from "react";

export default function Home(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    console.log(scrollPosition);
    const handleScroll = () => {
      setScrollPosition((curr) => window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <HomeStyled>
      <div>MacBook Air</div>
    </HomeStyled>
  );
}
