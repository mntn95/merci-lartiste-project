import { useFela } from "react-fela";
import Video from "../../../assets/img/merci_artiste.webm";
import MovingText from "./MovingText";
import PricesTable from "./PricesTable";

const pricesContainer = () => ({
  position: "relative",
  width: "100%",
  height: "0",
  padding: "0 0 56.25%",
});

const video = () => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

const topLines = () => ({
  position: "absolute",
  top: 0,
  width: "100%",
});

const bottomLines = () => ({
  position: "absolute",
  bottom: 0,
  width: "100%",
});

const Prices = () => {
  const { css } = useFela();

  return (
    <section>
      <div className={css(pricesContainer)}>
        <video loading="lazy" loop autoPlay muted className={css(video)}>
          <source src={Video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className={css(topLines)}>
          <MovingText />
          <PricesTable marginBottom="420px" position="top" />
        </div>
        <div className={css(bottomLines)}>
          <PricesTable position="bottom" />
          <MovingText direction="toRight" />
        </div>
      </div>
    </section>
  );
};

export default Prices;
