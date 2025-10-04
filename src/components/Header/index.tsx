import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

import Navigation from "./Navigation";
import { bottomNavLabels } from "./labels";
import { HeaderProps } from "@/types";
import { handleScrollToRef } from "../../utils";

import Logo from "../../assets/img/logo.png";
import Ellipsis from "../../assets/img/header_double_ellipsis.png";

const Header: React.FC<HeaderProps> = ({
  appointmentRef,
  contactRef,
  pricesRef,
}) => {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <div>
      <div className="p-8 flex">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
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
        <motion.div
          initial={{ opacity: 0, x: isDesktop ? 200 : -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 2,
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
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
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 2.5,
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
        >
          <div className="text-bold py-[40px] text-md md:text-xl">
            <span className="whitespace-pre-line">
              INFORMATION IMPORTANTE: A partir du 20 Octobre 2025, nous vous
              accueillerons au 31 rue jean jaures, 60570 Andeville
            </span>
          </div>
          <h1 className="text-[30px] lg:text-[40px] font-normal uppercase">
            {bottomNavLabels.title}
          </h1>

          <div className="text-justify py-[15px] text-sm md:text-lg">
            <span className="whitespace-pre-line">
              {bottomNavLabels.subTitle}
            </span>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 3.5,
            duration: 1.5,
            type: "spring",
            stiffness: 50,
          }}
          onClick={() => handleScrollToRef(appointmentRef)}
          className="text-base text-[#755018] border-[0.8px] border-[#755018] rounded-[1px] uppercase bg-inherit px-[0.7rem] py-[0.3rem] pb-[0.1rem] mt-8 lg:mt-12 hover:underline"
        >
          {bottomNavLabels.bookingCta}
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
