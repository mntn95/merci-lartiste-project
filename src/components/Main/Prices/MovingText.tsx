import React from "react";
import Ticker from "react-ticker";
import { MovingTextProps } from "../../../types";
import { pricesLabels } from "./labels";

const MovingText: React.FC<MovingTextProps> = ({ direction = "toLeft" }) => {
  return (
    <Ticker direction={direction}>
      {() => (
        <div className="px-8 py-2 lg:px-12 lg:py-[1.4rem]">
          <h3 className="text-[20px] md:text-[25px] lg:text-[38px] uppercase">
            {pricesLabels.title}
          </h3>
        </div>
      )}
    </Ticker>
  );
};

export default MovingText;
