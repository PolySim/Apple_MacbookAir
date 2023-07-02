import Menu from "./Menu";
import Title from "./Title";
import EducationDiscount from "./EducationDiscount";

export default function Header(): JSX.Element {
  return (
    <div>
      <Menu />
      <Title />
      <EducationDiscount />
    </div>
  );
}
