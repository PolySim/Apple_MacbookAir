import { ScrollContext } from "@/context";
import { useVisible } from "@/hook/useVisible";
import { useContext, useEffect, useRef } from "react";
import { scaleVideoPerformance } from "./utils";

const VideoPerformance = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useVisible(videoRef, "0px");
  const { scrollPosition } = useContext(ScrollContext);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement && isVisible) {
      videoElement.currentTime = 0;
      videoElement.play();
    }
  }, [isVisible]);

  return (
    <div className="mt-12 w-full">
      <video
        ref={videoRef}
        className="w-full"
        muted
        src="https://www.apple.com/105/media/us/macbook-air-13-and-15/2023/f52c7a72-dff4-4f3c-9511-bf08e46c6f5f/anim/performance/hero/large_2x.mp4"
        style={{
          transform: `scale(${scaleVideoPerformance(scrollPosition)})`,
        }}
      />
    </div>
  );
};

export default VideoPerformance;
