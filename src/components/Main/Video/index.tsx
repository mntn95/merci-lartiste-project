import React from "react";
import { MobileVideoOptions } from "../../../types";
import Video from "../../../assets/img/merci_artiste.webm";
import VideoMobile from "../../../assets/img/compressedMerciLartiste.mp4";
import MobileVideo from "./mobileVideo";

const VideoComponent: React.FC = () => {
  const playerRef = React.useRef<any>(null);

  const mobileVideoOptions: MobileVideoOptions = {
    autoplay: "muted",
    controls: false,
    loop: true,
    playsinline: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: VideoMobile,
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player: any): void => {
    playerRef.current = player;
  };

  return (
    <>
      <div className="mobile-video xl:hidden">
        <MobileVideo options={mobileVideoOptions} onReady={handlePlayerReady} />
      </div>

      <div className="max-xl:hidden xl:relative xl:w-full xl:h-0 xl:pb-[56.25%]">
        <video
          loop
          autoPlay
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={Video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default VideoComponent;
