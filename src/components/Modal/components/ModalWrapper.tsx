import React from "react";
import { Modal } from "react-bootstrap";
import mainBackground from "../../../assets/img/mla_background_accueil_1920x1080.png";

interface ModalWrapperProps {
  title: string;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ title, children }) => {
  const modalStyles = {
    backgroundImage: `url(${mainBackground})`,
    borderColor: "rgb(117, 80, 24)",
  };

  return (
    <>
      <Modal.Header style={modalStyles} closeButton>
        {title}
      </Modal.Header>
      <Modal.Body style={{ backgroundImage: `url(${mainBackground})` }}>
        {children}
      </Modal.Body>
    </>
  );
};

export default ModalWrapper;
