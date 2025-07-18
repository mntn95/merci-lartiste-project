import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { MobileVideoOptions } from "../../../types";
import Video from "../../../assets/videos/merci_artiste.webm";
import VideoMobile from "../../../assets/videos/compressedMerciLartiste.mp4";
import MobileVideo from "./mobileVideo";
import { videoLabels } from "./labels";

const VideoComponent: React.FC = () => {
  const playerRef = React.useRef<any>(null);
  const containerRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

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
    <motion.div
      ref={containerRef}
      initial={{
        opacity: 0,
      }}
      viewport={{ once: true }}
      style={{ opacity: scrollY }}
    >
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
          {videoLabels.browserNotSupportedMessage}
        </video>
      </div>
    </motion.div>
  );
};

export default VideoComponent;
