import React from "react";
import { Modal } from "react-bootstrap";

interface ModalWrapperProps {
  title: string;
  children: React.ReactNode;
  withTitle?: boolean;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  withTitle,
  title,
  children,
}) => (
    <>
      {withTitle && (
        <Modal.Header className="bg-[#BFAD8F] uppercase" closeButton>
          {title}
        </Modal.Header>
      )}
      <Modal.Body className="flex flex-col bg-[#BFAD8F] border-t-[0.4px] border-[#755018]">
        {children}
      </Modal.Body>
    </>
  );

export default ModalWrapper;
