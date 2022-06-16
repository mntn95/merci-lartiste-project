import { useFela } from "react-fela";
import PricePicture from "../../../assets/img/mla_img_2_1920x1078.png";
import MovingText from "./MovingText";
import PricesTable from "./PricesTable";

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

const prices = () => ({
  marginTop: "4rem",
  position: "relative",
  width: "100%",
  height: "0",
  padding: "0 0 56.25%",
});

const pricesImage = () => ({
  backgroundImage: `url(${PricePicture})`,
  backgroundSize: "100% auto",
  backgroundRepeat: "no-repeat",
  clear: "both",
  width: "100%",
  minHeight: "112vh",
  "@media (min-width: 1921px)": {
    minHeight: "133vh",
  },
});

const Prices = () => {
  const { css } = useFela();

  return (
    <section>
      <div className={css(prices)}>
        <div className={css(pricesImage)} />
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
