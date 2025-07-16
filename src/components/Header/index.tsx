import React from "react";
import Navigation from "./Navigation";
import { bottomNavLabels } from "./labels";
import { HeaderProps } from "../../types";

import Logo from "../../assets/img/mla_logo_820x253.png";
import Ellipsis from "../../assets/img/mla_ellipse_mercilartiste_461x441.png";

const Header: React.FC<HeaderProps> = ({
  appointmentRef,
  contactRef,
  pricesRef,
}) => {
  const handleScrollToAppointment = (): void => {
    if (appointmentRef?.current) {
      appointmentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <div>
      <div className="p-8 flex">
        <div
          className="bg-cover bg-no-repeat w-[200px] h-[60px] md:w-[300px] md:h-[90px]"
          style={{
            backgroundImage: `url(${Logo})`,
            clear: "both",
          }}
        />
        <Navigation
          appointmentRef={appointmentRef}
          pricesRef={pricesRef}
          contactRef={contactRef}
        />
      </div>

      <div>
        <div
          className="bg-cover bg-no-repeat 
                     w-[208px] h-[200px] mt-16 mb-6 mr-auto -ml-[4.5rem]
                     md:w-[208px] md:h-[200px] md:mt-8 md:mb-6 md:mr-auto md:ml-16
                     lg:w-[217px] lg:h-[221px] lg:mt-20 lg:mr-40 lg:mb-8 lg:ml-auto"
          style={{
            backgroundImage: `url(${Ellipsis})`,
            clear: "both",
          }}
        />
      </div>

      <div className="w-[90%] lg:w-[47%] mx-auto text-2xl">
        <h1 className="text-[30px] lg:text-[40px] font-normal uppercase">
          {bottomNavLabels.title}
        </h1>

        <div className="text-justify py-[15px] text-sm md:text-lg">
          <span>{bottomNavLabels.firstSubtitle}</span>
          <br />
          <span>{bottomNavLabels.secondSubtitle}</span>
        </div>

        <button
          onClick={handleScrollToAppointment}
          className="text-base text-[#755018] border-[0.8px] border-[#755018] rounded-[1px] uppercase bg-inherit px-[0.7rem] py-[0.3rem] pb-[0.1rem] mt-8 lg:mt-12 hover:underline"
        >
          {bottomNavLabels.bookingCta}
        </button>
      </div>
    </div>
  );
};

export default Header;
