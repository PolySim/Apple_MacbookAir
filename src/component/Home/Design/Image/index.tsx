import { ScrollContext } from "@/context";
import { useVisible } from "@/hook/useVisible";
import { FirstDesignImageStyle } from "@/styled";
import { useContext, useEffect, useRef } from "react";
import { scaleVideo } from "./calcScaleVideo";

export default function FirstDesignImage(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useVisible(videoRef, "-20px");
  const { scrollPosition } = useContext(ScrollContext);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement && isVisible) {
      videoElement.currentTime = 0;
      videoElement.play();
    }
  }, [isVisible]);

  return (
    <FirstDesignImageStyle
      style={{ transform: `scale(${scaleVideo(scrollPosition)})` }}
    >
      <video
        ref={videoRef}
        muted
        src="https://www.apple.com/105/media/us/macbook-air-13-and-15/2023/f52c7a72-dff4-4f3c-9511-bf08e46c6f5f/anim/design/hero/large_2x.mp4"
      />
    </FirstDesignImageStyle>
  );
}
