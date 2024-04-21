import { useFela } from "react-fela";

import FullPriceTableContent from "./FullPriceTableContent";
import LegalMentionsContent from "./LegalMentionsContent";

const modalContainer = {
  position: "fixed",
  height: "100vh",
  width: "100vw",
  backgroundColor: "black",
  opacity: ".9",
  zIndex: "1000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalContent = ({ theme }) => ({
  overflow: "scroll",
  marginTop: "4rem",
  backgroundColor: theme.whiteSpaceColor,
  "@media (min-width: 1024px)": {
    width: "70%",
  },
  width: "90%",
  height: "100%",
  opacity: "1",
});

const modalClose = {
  marginLeft: "auto",
  marginRight: "1rem",
  marginTop: "1rem",
  width: "fit-content",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
};

const Modal = ({ modal, showModal }) => {
  const { css, theme } = useFela();
  return (
    <div className={css(modalContainer)} onClick={() => showModal(false)}>
      <div
        className={css(modalContent({ theme }))}
        onClick={(e) => e.stopPropagation()}
      >
        {modal === "legalMentions" && (
          <>
            <div className={css(modalClose)} onClick={() => showModal(false)}>
              <span>FERMER</span>
            </div>
            <LegalMentionsContent />
          </>
        )}
        {modal === "fullPriceTable" && (
          <FullPriceTableContent showModal={showModal} />
        )}
      </div>
    </div>
  );
};

export default Modal;
