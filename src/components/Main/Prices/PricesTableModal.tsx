import React from "react";
import FullPricePicture from "../../../assets/img/price_table.webp";

const PricesTableModal: React.FC = () => (
  <div
    className="bg-no-repeat bg-cover bg-center w-full min-h-screen clear-both max-md:min-h-[600px] md:min-h-[1200px] lg:min-h-[1300px] xl:min-h-[1600px]"
    style={{
      backgroundImage: `url(${FullPricePicture})`,
    }}
  />
);

export default PricesTableModal;
