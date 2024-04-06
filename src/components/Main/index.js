import * as React from "react";
import { useFela } from "react-fela";
import Video from "../../assets/img/merci_artiste.webm";
import VideoMobile from "../../assets/img/compressedMerciLartiste.mp4";
import Appointment from "./Appointment";
import PriceTable from "../../assets/img/affiche_tarifs_prestations_web.png";

import VideoJS from "./videoTest";

const main = {
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

const priceTableImage = {
  backgroundImage: `url(${PriceTable})`,
  backgroundRepeat: "no-repeat",
  clear: "both",
  width: "100%",
  "@media (max-width: 767px)": {
    minHeight: "800px",
    backgroundSize: "100% auto",
    backgroundPosition: "center",
  },
  "@media (min-width: 768px) and (max-width: 1639px)": {
    backgroundSize: "100% auto",
    minHeight: "2200px",
  },
  "@media (min-width: 1640px)": {
    backgroundSize: "100% auto",
    minHeight: "2400px",
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
  };

  return (
    <>
      <main className={css(main)}>
        <div className="mobile-video">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="videoContainer">
          <video loading="lazy" loop autoPlay muted className="video">
            <source src={Video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Appointment setAppointmentRef={setAppointmentRef} />
        {/*         <Prices setPricesRef={setPricesRef} />
         */}{" "}
        <div className={css(priceTableImage)} />
      </main>
    </>
  );
};

export default Main;
