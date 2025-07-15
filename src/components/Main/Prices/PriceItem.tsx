import React from "react";
import { PriceItemProps } from "../../../types";
import { getPriceItemClasses } from "./styles";

const PriceItem: React.FC<PriceItemProps> = ({
  label,
  price,
  position,
  tablePosition,
}) => {
  return (
    <div className={getPriceItemClasses(position, tablePosition)}>
      {label}
      <span className="pl-12">{price}</span>
    </div>
  );
};

export default PriceItem;
