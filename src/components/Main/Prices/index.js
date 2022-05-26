import { useFela } from "react-fela";

import PricesPicture from "../../../assets/img/mla_img_2_1920x1078.png";
import MovingText from "./MovingText";
import PricesTable from "./PricesTable";

const pricesContainer = () => ({
  backgroundImage: `url(${PricesPicture})`,
  backgroundSize: "100% auto",
  backgroundRepeat: "no-repeat",
  clear: "both",
  width: "100%",
  minHeight: "83vh",
});

const Prices = () => {
  const { css } = useFela();

  return (
    <div>
      <div className={css(pricesContainer)}>
        <MovingText />
        <div>
          <PricesTable marginBottom="420px" position="top" />
          <PricesTable position="bottom" />
        </div>
        <MovingText direction="toRight" />
      </div>
    </div>
  );
};

export default Prices;
