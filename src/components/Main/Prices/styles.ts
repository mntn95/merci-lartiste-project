export const getPriceItemClasses = (
  position: "left" | "right",
  tablePosition: "top" | "bottom"
): string => {
  const baseClasses = "max-lg:p-2 max-lg:text-[20px] lg:p-8 lg:text-[28px]";

  if (position === "left") {
    const conditions = [
      tablePosition === "top" ? "max-lg:border-b max-lg:border-white" : "",
      tablePosition === "bottom"
        ? "max-lg:w-1/2 md:border-r md:border-white"
        : "",
      tablePosition === "top" ? "lg:border-r lg:border-white" : "",
    ].filter(Boolean);

    return `${baseClasses} ${conditions.join(" ")}`;
  }

  if (position === "right") {
    const conditions = [
      "md:max-lg:p-2 md:max-lg:text-[20px]",
      "lg:border-l lg:border-white",
      tablePosition === "bottom" ? "md:max-lg:pl-24" : "",
    ].filter(Boolean);

    return `${baseClasses} ${conditions.join(" ")}`;
  }

  return baseClasses;
};

export const getTableContainerClasses = (
  position: "top" | "bottom"
): string => {
  const baseClasses = "w-full flex text-white border-t border-b border-white";
  const flexDirection = position === "top" ? "max-lg:flex-col" : "";

  return `${baseClasses} ${flexDirection}`;
};
