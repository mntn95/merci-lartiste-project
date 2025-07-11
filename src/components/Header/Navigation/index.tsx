import React, { useState } from "react";
import { NavigationProps } from "../../../types";
import { navTranslation } from "../intl";

const Navigation: React.FC<NavigationProps> = ({
  appointmentRef,
  contactRef,
  pricesRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToRef = (
    ref: React.RefObject<HTMLElement> | null
  ): void => {
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex ml-auto mr-0 gap-20 text-xl relative">
      <div className="absolute right-0 text-right">
        <button
          className="lg:hidden border-none bg-transparent p-2 text-[#755018]"
          onClick={toggleMenu}
          aria-controls="responsive-navbar-nav"
          aria-expanded={isMenuOpen}
        >
          <span className="block w-6 h-0.5 bg-[#755018] mb-1"></span>
          <span className="block w-6 h-0.5 bg-[#755018] mb-1"></span>
          <span className="block w-6 h-0.5 bg-[#755018]"></span>
        </button>

        <nav className={`lg:block ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col lg:flex-row">
            <div
              className="text-[#755018] m-4 hover:underline cursor-pointer"
              onClick={() => handleScrollToRef(appointmentRef)}
            >
              <div className="bg-inherit px-2 py-1 hover:underline">
                {navTranslation.booking}
              </div>
            </div>
            <div
              className="text-[#755018] m-4 hover:underline cursor-pointer"
              onClick={() => handleScrollToRef(pricesRef)}
            >
              <div className="bg-inherit px-2 py-1 hover:underline">
                {navTranslation.pricesCta}
              </div>
            </div>
            <div
              className="text-[#755018] m-4 hover:underline cursor-pointer"
              onClick={() => handleScrollToRef(contactRef)}
            >
              <div className="bg-inherit px-2 py-1 hover:underline">
                {navTranslation.contact}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
