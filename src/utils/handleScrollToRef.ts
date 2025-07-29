import React from "react";

export const handleScrollToRef = (
  ref: React.RefObject<HTMLElement> | null
): void => {
  if (ref?.current) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }
};
