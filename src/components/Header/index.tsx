import { motion } from "framer-motion";
import React from "react";
import Navigation from "./Navigation";
import Ellipsis from "../../assets/img/header_double_ellipsis.png";
import Logo from "../../assets/img/logo.png";
import { Button } from "../../base-components";
import {
  ANIMATION_DELAYS,
  ANIMATION_DURATIONS,
  createSpringTransition,
} from "../../constants";
import { useNavigation } from "../../contexts";
import { useMediaQuery } from "../../hooks";
import { bottomNavLabels } from "../../labels/header";
import { handleScrollToRef } from "../../utils";

const Header: React.FC = React.memo(() => {
  const { appointmentRef } = useNavigation();
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <div>
      <div className="p-8 flex">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={createSpringTransition(ANIMATION_DELAYS.HEADER_LOGO)}
          className="bg-cover bg-no-repeat w-[200px] h-[60px] md:w-[300px] md:h-[90px]"
          style={{
            backgroundImage: `url(${Logo})`,
            clear: "both",
          }}
        />
        <Navigation />
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0, x: isDesktop ? 200 : -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={createSpringTransition(ANIMATION_DELAYS.HEADER_ELLIPSIS)}
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
          transition={createSpringTransition(ANIMATION_DELAYS.HEADER_TITLE)}
        >
          <h1 className="text-[30px] lg:text-[40px] font-normal uppercase">
            {bottomNavLabels.title}
          </h1>

          <div className="text-justify py-[15px] text-sm md:text-lg">
            <span className="whitespace-pre-line">
              {bottomNavLabels.subTitle}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={createSpringTransition(
            ANIMATION_DELAYS.HEADER_CTA,
            ANIMATION_DURATIONS.SLOW
          )}
        >
          <Button
            onClick={() => handleScrollToRef(appointmentRef)}
            variant="outline"
            className="text-base uppercase mt-8 lg:mt-12"
            animated={false}
          >
            {bottomNavLabels.bookingCta}
          </Button>
        </motion.div>
      </div>
    </div>
  );
});

Header.displayName = "Header";

export default Header;
