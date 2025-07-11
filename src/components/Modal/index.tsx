import React from "react";
import { Modal as BootstrapModal } from "react-bootstrap";
import { ModalProps } from "../../types";
import FullPriceTableContent from "./FullPriceTableContent";
import LegalMentionsContent from "./LegalMentionsContent";

const Modal: React.FC<ModalProps> = ({ modal, showModal }) => {
  const handleHide = (): void => {
    showModal(null);
  };

  return (
    <BootstrapModal
      show={Boolean(modal)}
      size="xl"
      fullscreen="lg-down"
      onHide={handleHide}
    >
      {modal === "legalMentions" && <LegalMentionsContent />}
      {modal === "fullPriceTable" && (
        <FullPriceTableContent showModal={showModal} />
      )}
    </BootstrapModal>
  );
};

export default Modal;
