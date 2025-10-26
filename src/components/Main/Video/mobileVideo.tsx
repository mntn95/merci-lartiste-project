import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { videoLabels } from "../../../labels/video";
import { MobileVideoProps } from "../../../types";

export const MobileVideo: React.FC<MobileVideoProps> = ({
  options,
  onReady,
}) => {
  const videoRef = React.useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      if (videoRef.current) {
        videoRef.current.appendChild(videoElement);
      }

      playerRef.current = videojs(videoElement, options, () => {
        videojs.log(videoLabels.playerReadyLog);
        if (onReady && playerRef.current) {
          onReady(playerRef.current);
        }
      });
    }
  }, [options, onReady]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default MobileVideo;
