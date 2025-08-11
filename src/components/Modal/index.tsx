import React from "react";
import { Modal as BootstrapModal } from "react-bootstrap";
import { ModalProps } from "../../types";
import { ModalWrapper } from "./components";
import LegalMentionsModal from "../Footer/LegalMentionsModal";
import { legalMentionsLabels } from "./labels";

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
        <ModalWrapper title={modalContent.title}>
          {modalContent.content}
        </ModalWrapper>
      )}
    </BootstrapModal>
  );
};

export default Modal;
