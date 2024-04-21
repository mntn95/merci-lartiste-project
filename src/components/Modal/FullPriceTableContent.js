//@flow
import * as React from "react";
import { useFela } from "react-fela";

import FullPricePicture from "../../assets/img/price_table.png";

const pricePictureStyle = {
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
const modalClose = {
  position: "absolute",
  right: "10%",
  marginTop: "1rem",
  width: "fit-content",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
};

const FullPriceTableContent = ({ showModal }) => {
  const { css } = useFela();
  return (
    <>
      <div className={css(pricePictureStyle)}>
        <div className={css(modalClose)} onClick={() => showModal(false)}>
          <span>FERMER</span>
        </div>
      </div>
    </>
  );
};

export default FullPriceTableContent;
