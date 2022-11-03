import * as React from "react";
import { useFela } from "react-fela";
import Video from "../../assets/img/merci_artiste.webm";
import VideoMobile from "../../assets/img/compressedMerciLartiste.mp4";
import Appointment from "./Appointment";
import Prices from "./Prices";

import VideoJS from "./videoTest";

const main = {
  marginTop: "4rem",
  "& .mobile-video": {
    "@media (min-width: 768px)": {
      display: "none",
    },
    "& .video-js": {
      height: "60vh",
    },
    "& .vjs-tech": {
      width: "107vh",
    },
  },
  "& .videoContainer": {
    "@media (max-width: 767px)": {
      display: "none",
    },
    "@media (min-width: 768px)": {
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

const Main = ({ setAppointmentRef, setPricesRef }) => {
  const { css } = useFela();

  const playerRef = React.useRef(null);

  const videoJsOptions = {
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

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    console.log({ player });

    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <>
      <main className={css(main)}>
        <div className="mobile-video">
          {/* <video
            loading="lazy"
            loop
            playsInline
            autoPlay
            muted
            className="video"
          >
            <source src={Video} type="video/webm" />
            Your browser does not support the video tag.
          </video> */}
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="videoContainer">
          <video loading="lazy" loop autoPlay muted className="video">
            <source src={Video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Appointment setAppointmentRef={setAppointmentRef} />
        <Prices setPricesRef={setPricesRef} />
      </main>
    </>
  );
};

export default Main;
