import React from "react";
import Loader from "./loader";
import {
  useResponsiveBackground,
  backgroundImages,
} from "../../hooks/useResponsiveBackground";
import { LayoutProps } from "../../types";

const Layout: React.FC<LayoutProps> = ({
  children,
  isLoading,
  setIsLoading,
}) => {
  const backgroundImage = useResponsiveBackground(backgroundImages);

  return (
    <>
      <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
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
