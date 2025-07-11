import React from "react";
import { useFela } from "react-fela";
import { PricesTableProps } from "../../../types";
import { pricesTranslation } from "../intl";

interface StyleProps {
  position?: string;
}

const pricesTableItem = ({ position }: StyleProps): any => ({
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

const pricesTableItemLeft = ({ position }: StyleProps): any => ({
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

const PricesTableTop: React.FC<PricesTableProps> = ({ position = "top" }) => {
  const { css } = useFela();

  const getTranslationKey = (suffix: string): string => {
    return (pricesTranslation as any)[position + suffix] || "";
  };

  return (
    <div className={css(pricesTableItem({ position }))}>
      <div className={css(pricesTableItemLeft({ position }))}>
        {getTranslationKey("FirstItem")}
        <span>{getTranslationKey("FirstPrice")}</span>
      </div>
    </div>
  );
};

export default PricesTableTop;
