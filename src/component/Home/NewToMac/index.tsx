import { NavIntoTutorial, NewToMacStyle } from "@/styled";
import Tutorials from "./Tutorials";

export default function NewToMac(): JSX.Element {
  // const []

  return (
    <NewToMacStyle>
      <h1>New to Mac?</h1>
      <Tutorials />
      <div>
        <NavIntoTutorial clickable first>
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15.375 5.25 8.625 12l6.75 6.75"></path>
          </svg>
        </NavIntoTutorial>
        <NavIntoTutorial clickable>
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m8.625 5.25 6.75 6.75-6.75 6.75"></path>
          </svg>
        </NavIntoTutorial>
      </div>
    </NewToMacStyle>
  );
}
