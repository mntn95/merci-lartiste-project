import React from "react";
import { MainProps, VideoJSOptions } from "../../types";
import Video from "../../assets/img/merci_artiste.webm";
import VideoMobile from "../../assets/img/compressedMerciLartiste.mp4";
import Appointment from "./Appointment";
import Prices from "./Prices";
import VideoJS from "./videoTest";

const Main: React.FC<MainProps> = ({
  setAppointmentRef,
  setPricesRef,
  showModal,
}) => {
  const playerRef = React.useRef<any>(null);

  const videoJsOptions: VideoJSOptions = {
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
      <main className="mt-16">
        <div className="mobile-video xl:hidden">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
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

        <Appointment setAppointmentRef={setAppointmentRef} />
        <Prices setPricesRef={setPricesRef} showModal={showModal} />
      </main>
    </>
  );
};

export default Main;
