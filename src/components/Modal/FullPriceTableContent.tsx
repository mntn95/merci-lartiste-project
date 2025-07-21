import React from "react";
import { Modal } from "react-bootstrap";
import { ModalContentProps } from "../../types";
import {
  useResponsiveBackground,
  backgroundImages,
} from "../../hooks/useResponsiveBackground";
import FullPricePicture from "../../assets/img/price_table.webp";
import { pricesLabels } from "../Main/Prices/labels";

const FullPriceTableContent: React.FC<ModalContentProps> = ({ showModal }) => {
  const backgroundImage = useResponsiveBackground(backgroundImages);

  return (
    <>
      <Modal.Header
        style={{
          backgroundImage: `url(${backgroundImage})`,
          borderColor: "rgb(117, 80, 24)",
        }}
        closeButton
      >
        {pricesLabels.fullPriceTableTitle}
      </Modal.Header>
      <Modal.Body style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div
          className="bg-no-repeat bg-cover bg-center w-full min-h-screen clear-both max-md:min-h-[600px] md:min-h-[1200px] lg:min-h-[1300px] xl:min-h-[1600px]"
          style={{
            backgroundImage: `url(${FullPricePicture})`,
          }}
        />
      </Modal.Body>
    </>
  );
};

export default FullPriceTableContent;
