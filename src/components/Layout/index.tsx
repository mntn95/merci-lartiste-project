import React from "react";
import Loader from "./loader";
import { LayoutProps } from "@/types";
import {
  useResponsiveBackground,
  backgroundImages,
} from "../../hooks/useResponsiveBackground";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const backgroundImage = useResponsiveBackground(backgroundImages);

  return (
    <>
      <Loader />
      <div
        className="overflow-hidden min-h-[900px] text-text-primary font-botanika [&_h1]:font-neue-haas [&_h2]:font-neue-haas [&_h3]:font-neue-haas [&_h4]:font-neue-haas"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
