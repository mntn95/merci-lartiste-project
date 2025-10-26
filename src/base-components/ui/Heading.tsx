import React from "react";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "custom";
export type HeadingFontFamily = "default" | "botanika";
export type HeadingFontWeight = "normal" | "semibold" | "bold";

export interface HeadingProps {
  children: React.ReactNode;
  as?: HeadingLevel;
  size?: HeadingSize;
  fontFamily?: HeadingFontFamily;
  fontWeight?: HeadingFontWeight;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  as = "h3",
  size,
  fontFamily,
  fontWeight,
  className = "",
}) => {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    custom: "",
  };

  const fontFamilyClasses = {
    default: "",
    botanika: "!font-botanika",
  };

  const fontWeightClasses = {
    normal: "font-normal",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const sizeClass = size ? sizeClasses[size] : "";
  const fontFamilyClass = fontFamily ? fontFamilyClasses[fontFamily] : "";
  const fontWeightClass = fontWeight ? fontWeightClasses[fontWeight] : "";

  const classes =
    `${sizeClass} ${fontFamilyClass} ${fontWeightClass} ${className}`.trim();

  const Component = as;
  return <Component className={classes}>{children}</Component>;
};

export default Heading;
