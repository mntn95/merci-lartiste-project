import React, { useRef, useEffect } from "react";
import { PricesComponentProps } from "@/types";
import PricePicture from "../../../assets/img/work_image.webp";
import MovingText from "./MovingText";
import PricesTable from "./PricesTable";

const Prices: React.FC<PricesComponentProps> = ({ setPricesRef }) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setPricesRef(ref);
  }, [setPricesRef]);

  return (
    <section id="prices" className="min-h-[400px]" ref={ref}>
      <div className="mt-20 relative w-full h-0 pb-[56.25%]">
        <div
          className="absolute inset-0 bg-no-repeat clear-both w-full min-h-[400px] bg-cover bg-center md:bg-[length:100%_auto]"
          style={{ backgroundImage: `url(${PricePicture})` }}
        />
        <div className="absolute inset-0 bg-black w-full min-h-[400px] md:min-h-0 h-full opacity-50" />
        <div className="absolute top-0 w-full z-10">
          <MovingText />
          <PricesTable position="top" showSecondItem={false} />
        </div>
        <div className="relative max-sm:top-[310px] md:absolute md:bottom-0 w-full z-10">
          <PricesTable position="bottom" />
          <MovingText direction="toRight" />
        </div>
      </div>
    </section>
  );
};

export default Prices;
