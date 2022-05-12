import React from "react";
import Ticker from "react-ticker";

import { pricesTranslation } from "../intl";

const MovingText = () => (
  <Ticker>
    {({ index }) => (
      <div className="prices-ticker">
        <h3 className="prices-ticker--message">{pricesTranslation.title}</h3>
      </div>
    )}
  </Ticker>
);

export default MovingText;
