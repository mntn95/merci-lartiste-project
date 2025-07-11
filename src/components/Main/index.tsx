import React from "react";
import { useFela } from "react-fela";
import { MainProps, VideoJSOptions } from "../../types";
import Video from "../../assets/img/merci_artiste.webm";
import VideoMobile from "../../assets/img/compressedMerciLartiste.mp4";
import Appointment from "./Appointment";
import Prices from "./Prices";
import VideoJS from "./videoTest";

const main: any = {
  marginTop: "4rem",
  "& .mobile-video": {
    "@media (min-width: 1440px)": {
      display: "none",
    },
    "& .video-js": {
      height: "45vh",
    },
    "& .vjs-tech": {
      "@media (max-width: 550px)": {
        width: "80vh",
      },
    },
  },
  "& .videoContainer": {
    "@media (max-width: 1439px)": {
      display: "none",
    },
    "@media (min-width: 1440px)": {
      position: "relative",
      width: "100%",
      height: "0",
      padding: "0 0 56.25%",
    },
    "& .video": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  },
};

const Main: React.FC<MainProps> = ({
  setAppointmentRef,
  setPricesRef,
  showModal,
}) => {
  const { css } = useFela();
  const playerRef = React.useRef<any>(null);

  const videoJsOptions: VideoJSOptions = {
    autoplay: "muted",
    controls: true,
    width: 1000,
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
      <main className={css(main)}>
        <div className="mobile-video">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="videoContainer">
          <video loop autoPlay muted className="video">
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
