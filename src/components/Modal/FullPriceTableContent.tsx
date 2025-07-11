import React from "react";
import { useFela } from "react-fela";
import { Modal } from "react-bootstrap";
import { ModalContentProps } from "../../types";
import mainBackground from "../../assets/img/mla_background_accueil_1920x1080.png";
import FullPricePicture from "../../assets/img/price_table.jpg";

const pricePictureStyle: any = {
  backgroundImage: `url(${FullPricePicture})`,
  backgroundRepeat: "no-repeat",
  clear: "both",
  width: "100%",
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  "@media (max-width: 767px)": {
    minHeight: "600px",
  },
  "@media (min-width: 768px) and (max-width: 1023px)": {
    minHeight: "1200px",
  },
  "@media (min-width: 1024px) and (max-width: 1439px)": {
    minHeight: "1300px",
  },
  "@media (min-width: 1440px)": {
    minHeight: "1600px",
  },
};

const FullPriceTableContent: React.FC<ModalContentProps> = ({ showModal }) => {
  const { css } = useFela();

  return (
    <>
      <Modal.Header
        style={{
          backgroundImage: `url(${mainBackground})`,
          borderColor: "rgb(117, 80, 24)",
        }}
        closeButton
      >
        Grille des prix
      </Modal.Header>
      <Modal.Body style={{ backgroundImage: `url(${mainBackground})` }}>
        <div className={css(pricePictureStyle)} />
      </Modal.Body>
    </>
  );
};

export default FullPriceTableContent;
