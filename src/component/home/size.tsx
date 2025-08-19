import ColorImage from "./color";
import VideoSize from "./video";

const Size = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <p className="mt-6 text-[24px] w-text text-gray-500">
        MacBook Air is <span className="text-black">all you</span> — pick your
        size, pick your color, then go. Whichever model you choose, it’s{" "}
        <span className="text-black">built with the planet in mind</span>, with
        a durable 100 percent recycled aluminum enclosure. And a{" "}
        <span className="text-black">fanless design</span>
        means it stays silent even under intense workloads.
      </p>
      <VideoSize />
      <p className="mt-6 text-[24px] w-text text-gray-500">
        <span className="text-black">Two perfect sizes.</span> Whether you pick
        the 13- or 15‑inch laptop, both models are superlight and measure just
        under half an inch thin, so you can take yours anywhere.
      </p>
      <ColorImage />
      <p className="mt-6 text-[24px] w-text text-gray-500">
        <span className="text-black">Four stellar colors.</span> Your options
        are out of this world — and each one comes with a matching MagSafe
        charging cable.
      </p>
    </div>
  );
};

export default Size;
