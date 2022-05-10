import React, { useRef } from "react";

const fixedWrapperStyles = {
  width: "100vw",
  position: "relative",
  overflow: "hidden",
  display: "inline-block",
};
const movingWrapperStyles = {
  display: "flex",
  position: "relative",
  right: "0px",
  width: "100vw",
  fontSize: "32px",
  justifyContent: "space-evenly",
};

const MovingText = () => {
  const myRef = useRef(null);

  let actualRight = 0;

  const moveText = () => {
    const newRight = actualRight - 1;
    myRef.current.style.right = newRight.toString() + "px";
    actualRight = newRight;
  };

  const texts = [
    "Tarifs et prestations",
    "Tarifs et prestations",
    "Tarifs et prestations",
  ];
  return (
    <div className="prices-text-wrapper" style={fixedWrapperStyles}>
      <div
        ref={myRef}
        className="prices-text-content"
        style={movingWrapperStyles}
      >
        {texts.map((item, index) => (
          <div key={"prices-text-item" + index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default MovingText;
