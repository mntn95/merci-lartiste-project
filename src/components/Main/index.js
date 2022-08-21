import { useFela } from "react-fela";
import Video from "../../assets/img/merci_artiste.webm";
import Appointment from "./Appointment";
import Prices from "./Prices";

const main = {
  marginTop: "4rem",
  "& .videoContainer": {
    position: "relative",
    width: "100%",
    height: "0",
    padding: "0 0 56.25%",
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

  return (
    <main className={css(main)}>
      <div className="videoContainer">
        <video loading="lazy" loop autoPlay muted className="video">
          <source src={Video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Appointment setAppointmentRef={setAppointmentRef} />
      <Prices setPricesRef={setPricesRef} />
    </main>
  );
};

export default Main;
