import { SizeStyle } from "@/styled";
import VideoSize from "./video";
import ColorImage from "./color";

export default function Size(): JSX.Element {
  return (
    <SizeStyle>
      <p>
        MacBook Air is <span>all you</span> — pick your size, pick your color,
        then go. Whichever model you choose, it’s{" "}
        <span>built with the planet in mind</span>, with a durable 100 percent
        recycled aluminum enclosure. And a <span>fanless design</span>
        means it stays silent even under intense workloads.
      </p>
      <VideoSize />
      <p>
        <span>Two perfect sizes.</span> Whether you pick the 13- or 15‑inch
        laptop, both models are superlight and measure just under half an inch
        thin, so you can take yours anywhere.
      </p>
      <ColorImage />
    </SizeStyle>
  );
}
