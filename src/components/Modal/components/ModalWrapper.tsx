import React from "react";
import { Modal } from "react-bootstrap";
import {
  useResponsiveBackground,
  backgroundImages,
} from "../../../hooks/useResponsiveBackground";

interface ModalWrapperProps {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  title,
  children,
  style,
}) => {
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
        style={{ ...style, backgroundImage: `url(${backgroundImage})` }}
        className="flex flex-col"
      >
        {children}
      </Modal.Body>
    </>
  );
};

export default ModalWrapper;
