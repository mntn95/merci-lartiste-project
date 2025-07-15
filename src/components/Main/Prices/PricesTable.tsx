import React from "react";
import { PricesTableExtendedProps } from "../../../types";
import { pricesTranslation } from "../intl";
import PriceItem from "./PriceItem";
import { getTableContainerClasses } from "./styles";

const PricesTable: React.FC<PricesTableExtendedProps> = ({
  position = "bottom",
  showSecondItem = true,
}) => {
  const getTranslationKey = (suffix: string): string => {
    return (pricesTranslation as any)[position + suffix] || "";
  };

  return (
    <div className={getTableContainerClasses(position)}>
      <PriceItem
        label={getTranslationKey("FirstItem")}
        price={getTranslationKey("FirstPrice")}
        position="left"
        tablePosition={position}
      />

      {showSecondItem && (
        <PriceItem
          label={getTranslationKey("SecondItem")}
          price={getTranslationKey("SecondPrice")}
          position="right"
          tablePosition={position}
        />
      )}
    </div>
  );
};

export default PricesTable;
