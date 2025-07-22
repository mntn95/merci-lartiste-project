import React from "react";
import { Modal as BootstrapModal } from "react-bootstrap";
import { ModalProps } from "../../types";
import { ModalWrapper } from "./components";
import LegalMentionsModal from "../Footer/LegalMentionsModal";
import PricesTableModal from "../Main/Prices/PricesTableModal";
import ServicesBookingModal from "../Main/Services/ServicesBookingModal";
import { legalMentionsLabels } from "./labels";
import { pricesLabels } from "../Main/Prices/labels";
import { servicesLabels } from "../Main/Services/labels";

const Modal: React.FC<ModalProps> = ({ modal, showModal }) => {
  const handleHide = (): void => {
    // Nettoyer les données temporaires du modal de réservation
    if (modal === "servicesBooking") {
      sessionStorage.removeItem("selectedTimeSlot");
    }
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
        };
      case "servicesBooking":
        return {
          title: servicesLabels.modal.title,
          content: <ServicesBookingModal />,
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
