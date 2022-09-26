import { useRef, useEffect } from "react";
import { useFela } from "react-fela";
import PricePicture from "../../../assets/img/mla_img_2_1920x1078.png";
import MovingText from "./MovingText";
import PricesTable from "./PricesTable";

const prices = {
  marginTop: "4rem",
  position: "relative",
  width: "100%",
  height: "0",
  padding: "0 0 56.25%",
  "& .prices": {
    "&-fade": {
      backgroundColor: "black",
      width: "100%",
      "@media (max-width: 767px)": {
        minHeight: "400px",
      },
      height: "100%",
      position: "absolute",
      opacity: ".5",
    },
    "&-image": {
      backgroundImage: `url(${PricePicture})`,
      backgroundRepeat: "no-repeat",
      clear: "both",
      width: "100%",
      "@media (max-width: 767px)": {
        minHeight: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      "@media (min-width: 768px) and (max-width: 1639px)": {
        backgroundSize: "100% auto",
        minHeight: "900px",
      },
      "@media (min-width: 1640px)": {
        backgroundSize: "100% auto",
        minHeight: "1200px",
      },
    },
    "&-top--lines": {
      position: "absolute",
      top: 0,
      width: "100%",
    },
    "&-bottom--lines": {
      "@media (max-width: 767px)": {
        position: "relative",
        bottom: "90px",
      },
      "@media (min-width: 768px)": {
        position: "absolute",
        bottom: 0,
      },
      width: "100%",
    },
  },
};

const Prices = ({ setPricesRef }) => {
  const { css } = useFela();
  const ref = useRef(null);

  useEffect(() => {
    setPricesRef(ref);
  }, [setPricesRef]);

  return (
    <section style={{ minHeight: "400px" }} id="prices" ref={ref}>
      <div className={css(prices)}>
        <div className="prices-fade" />
        <div className="prices-image" />
        <div className="prices-top--lines">
          <MovingText />
          <PricesTable position="top" />
        </div>
        <div className="prices-bottom--lines">
          <PricesTable position="bottom" />
          <MovingText direction="toRight" />
        </div>
      </div>
    </section>
  );
};

export default Prices;
