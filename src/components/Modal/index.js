import { Modal as BootstrapModal } from "react-bootstrap";
import FullPriceTableContent from "./FullPriceTableContent";
import LegalMentionsContent from "./LegalMentionsContent";

const Modal = ({ modal, showModal }) => {
  return (
    <BootstrapModal
      show={Boolean(modal)}
      size="xl"
      fullscreen="lg-down"
      onHide={() => showModal(false)}
    >
      {modal === "legalMentions" && <LegalMentionsContent />}
      {modal === "fullPriceTable" && (
        <FullPriceTableContent showModal={showModal} />
      )}
    </BootstrapModal>
  );
};

export default Modal;
