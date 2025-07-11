import React from "react";
import { useFela } from "react-fela";
import Ticker from "react-ticker";
import { MovingTextProps } from "../../../types";
import { pricesTranslation } from "../intl";

const pricesTicker: any = {
  padding: "1.4rem 3rem",
  "@media (max-width: 1023px)": {
    padding: "0.5rem 2rem",
  },
  "@media (min-width: 1024px)": {
    padding: "1.4rem 3rem",
  },
};

const pricesTickerMessage: any = {
  "@media (max-width: 767px)": {
    fontSize: "20px",
  },
  "@media (min-width: 768px) and (max-width: 1023px)": {
    fontSize: "25px",
  },
  "@media (min-width: 1024px)": {
    fontSize: "38px",
  },
  fontSize: "38px",
  textTransform: "uppercase",
};

const MovingText: React.FC<MovingTextProps> = ({ direction = "toLeft" }) => {
  const { css } = useFela();

  return (
    <Ticker direction={direction}>
      {({ index }: { index: number }) => (
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
