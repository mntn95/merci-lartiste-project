import React from "react";
import { Button } from "../..";
import { newAddressLabels } from "../../../labels/modal";
import { ModalContentProps } from "../../../types";
import { Paragraph } from ".";

const NewAddressModal: React.FC<ModalContentProps> = ({ showModal }) => {
  const { title, message, buttonText } = newAddressLabels;

  const handleClose = (): void => {
    if (showModal) {
      showModal(null);
    }
  };

  return (
    <>
      <div className="pt-4 flex flex-col items-center justify-center">
        <h2 className="text-center flex items-center justify-center text-xl uppercase">
          {title}
        </h2>
      </div>

      <div className="text-lg flex items-start justify-center flex-col mx-auto w-[90%] pb-12">
        <div className="pt-4">
          <Paragraph>{message}</Paragraph>
        </div>
      </div>

      <div className="flex justify-center pb-4">
        <Button
          onClick={handleClose}
          variant="filled"
          size="lg"
          animated={false}
        >
          {buttonText}
        </Button>
      </div>
    </>
  );
};

export default NewAddressModal;
