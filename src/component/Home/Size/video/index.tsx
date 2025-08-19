import { useVisible } from "@/hook/useVisible";
import { useEffect, useRef } from "react";

export default function VideoSize(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useVisible(videoRef, "-20px");

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement && isVisible) {
      videoElement.currentTime = 0;
      videoElement.play();
    }
  }, [isVisible]);

  return (
    <div>
      <video
        ref={videoRef}
        muted
        src="https://www.apple.com/105/media/us/macbook-air-13-and-15/2023/f52c7a72-dff4-4f3c-9511-bf08e46c6f5f/anim/design/sizes/large_2x.mp4"
      />
    </div>
  );
}
