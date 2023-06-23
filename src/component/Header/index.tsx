import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import EducationDiscount from "./EducationDiscount";

export default function Header(): JSX.Element {
  const [menuHover, setMenuHover] = useState<number>(-1);

  return (
    <div>
      <Menu setMenuHover={setMenuHover} />
      <Title />
      <EducationDiscount />
    </div>
  );
}
