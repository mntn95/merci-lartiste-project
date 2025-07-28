import React from "react";
import { Modal } from "react-bootstrap";
import {
  useResponsiveBackground,
  backgroundImages,
} from "../../../hooks/useResponsiveBackground";

interface ModalWrapperProps {
  title: string;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ title, children }) => {
  const backgroundImage = useResponsiveBackground(backgroundImages);

  const modalStyles = {
    backgroundImage: `url(${backgroundImage})`,
    borderColor: "rgb(117, 80, 24)",
  };

  return (
    <>
      <Modal.Header style={modalStyles} closeButton>
        {title}
      </Modal.Header>
      <Modal.Body
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="p-0 h-[85vh] flex flex-col"
      >
        {children}
      </Modal.Body>
    </>
  );
};

export default ModalWrapper;
