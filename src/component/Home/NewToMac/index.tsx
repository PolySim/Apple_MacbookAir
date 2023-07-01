import { NewToMacStyle } from "@/styled";
import Tutorials from "./Tutorials";

export default function NewToMac(): JSX.Element {
  return (
    <NewToMacStyle>
      <h1>New to Mac?</h1>
      <Tutorials
        padding={Math.max(
          0.075 * window.innerWidth,
          (window.innerWidth - 980) / 2
        )}
      />
    </NewToMacStyle>
  );
}
