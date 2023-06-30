import { ButtonGoInsideStyle } from "@/styled";

export default function ButtonGoInside(): JSX.Element {
  return (
    <ButtonGoInsideStyle>
      <div>
        Go inside M2
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
          <path d="M12 8.25v7.5"></path>
          <path d="M15.75 12h-7.5"></path>
        </svg>
      </div>
    </ButtonGoInsideStyle>
  );
}
