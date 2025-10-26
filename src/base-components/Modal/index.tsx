import React from "react";
import { Modal as BootstrapModal } from "react-bootstrap";
import { ModalWrapper } from "./components";
import { legalMentionsLabels, newAddressLabels } from "./labels";
import LegalMentionsModal from "../../components/Footer/LegalMentionsModal";
import NewAddressModal from "../../components/Footer/NewAddressModal";
import { ModalProps } from "../../types";

const Modal: React.FC<ModalProps> = ({ modal, showModal }) => {
  const handleHide = (): void => {
    showModal(null);
  };

  const getModalContent = () => {
    switch (modal) {
      case "legalMentions":
        return {
          title: legalMentionsLabels.title,
          withTitle: true,
          content: <LegalMentionsModal />,
        };
      case "newAddress":
        return {
          title: newAddressLabels.title,
          withTitle: false,
          content: <NewAddressModal showModal={showModal} />,
        };
      default:
        return null;
    }
  };

  const modalContent = getModalContent();

  return (
    <BootstrapModal show={Boolean(modal)} size="lg" onHide={handleHide}>
      {modalContent && (
        <ModalWrapper
          title={modalContent.title}
          withTitle={modalContent.withTitle}
        >
          {modalContent.content}
        </ModalWrapper>
      )}
    </BootstrapModal>
  );
};

export default Modal;
