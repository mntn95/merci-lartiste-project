import React from "react";
import { useFela } from "react-fela";
import Ticker from "react-ticker";

import { pricesTranslation } from "../intl";

const pricesTicker = {
  padding: "1.4rem 3rem",
};

const pricesTickerMessage = {
  fontSize: "38px",
  textTransform: "uppercase",
};

const MovingText = ({ direction }) => {
  const { css } = useFela();

  return (
    <Ticker height={80} direction={direction}>
      {({ index }) => (
        <div className={css(pricesTicker)}>
          <h3 className={css(pricesTickerMessage)}>
            {pricesTranslation.title}
          </h3>
        </div>
      )}
    </Ticker>
  );
};

export default MovingText;
