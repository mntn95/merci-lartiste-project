import { useFela } from "react-fela";

import { pricesTranslation } from "../intl";

const pricesTableItem = ({ position }) => ({
  width: "100%",
  display: "flex",
  color: "white",
  borderTop: "1px solid white",
  borderBottom: "1px solid white",
  "@media (max-width: 1023px)": {
    extend: {
      condition: position === "top",
      style: {
        flexDirection: "column",
      },
    },
  },
});

const pricesTableItemLeft = ({ position }) => ({
  "@media (max-width: 1023px)": {
    extend: [
      {
        condition: position === "top",
        style: {
          borderBottom: "1px solid white",
        },
      },
      {
        condition: position === "bottom",
        style: {
          "@media (min-width: 768px)": {
            borderRight: "1px solid white",
          },
          width: "50%",
        },
      },
    ],
    padding: "0.5rem",
    fontSize: "20px",
  },
  "@media (min-width: 1024px)": {
    padding: "2rem",
    fontSize: "28px",
    borderRight: "1px solid white",
  },
  "> span": {
    paddingLeft: "3rem",
  },
});

const PricesTableTop = ({ marginBottom, position }) => {
  const { css } = useFela();

  return (
    <div className={css(pricesTableItem({ position }))}>
      <div className={css(pricesTableItemLeft({ position }))}>
        {pricesTranslation[position + "FirstItem"]}
        <span>{pricesTranslation[position + "FirstPrice"]}</span>
      </div>
    </div>
  );
};

export default PricesTableTop;
