import React from "react";
import Loader from "./loader";
import { LayoutProps } from "../../types";

import mainBackground from "../../assets/img/background.png";

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Loader />
    <div
      className="overflow-hidden min-h-[900px] text-text-primary font-botanika [&_h1]:font-neue-haas [&_h2]:font-neue-haas [&_h3]:font-neue-haas [&_h4]:font-neue-haas"
      style={{
        backgroundImage: `url(${mainBackground})`,
      }}
    >
      {children}
    </div>
  </>
);

export default Layout;
