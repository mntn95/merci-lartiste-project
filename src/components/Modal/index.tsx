import React from "react";
import { Modal as BootstrapModal } from "react-bootstrap";
import { ModalProps } from "../../types";
import { ModalWrapper } from "./components";
import LegalMentionsModal from "../Footer/LegalMentionsModal";
import PricesTableModal from "../Main/Prices/PricesTableModal";
import { legalMentionsLabels } from "./labels";
import { pricesLabels } from "../Main/Prices/labels";

const Modal: React.FC<ModalProps> = ({ modal, showModal }) => {
  const handleHide = (): void => {
    showModal(null);
  };

  const getModalContent = () => {
    switch (modal) {
      case "legalMentions":
        return {
          title: legalMentionsLabels.title,
          content: <LegalMentionsModal />,
        };
      case "fullPriceTable":
        return {
          title: pricesLabels.fullPriceTableTitle,
          content: <PricesTableModal />,
          style: {
            height: "85vh",
            padding: 0,
          },
        };
      default:
        return null;
    }
  };

  const modalContent = getModalContent();

  return (
    <BootstrapModal
      show={Boolean(modal)}
      size="xl"
      fullscreen="lg-down"
      onHide={handleHide}
    >
      {modalContent && (
        <ModalWrapper title={modalContent.title} style={modalContent.style}>
          {modalContent.content}
        </ModalWrapper>
      )}
    </BootstrapModal>
  );
};

export default Modal;
