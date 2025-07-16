import React from "react";
import { PricesTableExtendedProps } from "../../../types";
import { pricesLabels } from "./labels";
import PriceItem from "./PriceItem";
import { getTableContainerClasses } from "./styles";

const PricesTable: React.FC<PricesTableExtendedProps> = ({
  position = "bottom",
  showSecondItem = true,
}) => {
  const getLabelsKey = (suffix: string): string => {
    return (pricesLabels as any)[position + suffix] || "";
  };

  return (
    <div className={getTableContainerClasses(position)}>
      <PriceItem
        label={getLabelsKey("FirstItem")}
        price={getLabelsKey("FirstPrice")}
        position="left"
        tablePosition={position}
      />

      {showSecondItem && (
        <PriceItem
          label={getLabelsKey("SecondItem")}
          price={getLabelsKey("SecondPrice")}
          position="right"
          tablePosition={position}
        />
      )}
    </div>
  );
};

export default PricesTable;
