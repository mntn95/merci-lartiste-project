import { useFela } from "react-fela";
import Video from "../../assets/img/merci_artiste.webm";
import MobileImg from "../../assets/img/mla_img_1_1920x1080.png";
import Appointment from "./Appointment";
import Prices from "./Prices";

const main = {
  marginTop: "4rem",
  "& .mobile-image": {
    "@media (max-width: 767px)": {
      backgroundImage: `url(${MobileImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      clear: "both",
      width: "100%",
      minHeight: "650px",
    },
    "@media (min-width: 768px)": {
      display: "none",
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

/* const verticalRuban = {
  transform: "rotate(270deg)",
  position: "relative",
  display: "flex",
  border: "1px solid white",
  color: "white",
  fontSize: "28px",
  zIndex: "1",
  "@media (max-width: 767px)": {},
  "@media (min-width: 768px) and (max-width: 1023px)": {},
  "@media (min-width: 1024px) and (max-width: 1439px)": {},
  "@media (min-width: 1440px) and (max-width: 1919px)": {
    left: "-61rem",
    top: "73.8rem",
    width: "150%",
  },
  "@media (min-width: 1920px)": {
    left: "-61rem",
    top: "73.8rem",
    width: "150%",
  },
  "& .vertical-ruban-item": {
    padding: "1rem",
    flexGrow: "2",
    "&.left": {
      borderRight: "1px solid white",
    },
  },
};

 */ const Main = ({ setAppointmentRef, setPricesRef }) => {
  const { css } = useFela();

  return (
    <>
      {/*       <div className={css(verticalRuban)}>
        <div className="vertical-ruban-item left">Du mardi au samedi</div>
        <div className="vertical-ruban-item">De 15h à 20h</div>
      </div>
 */}
      <main className={css(main)}>
        <div className="mobile-image" />
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
