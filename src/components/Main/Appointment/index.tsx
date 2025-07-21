import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
/* import { InlineWidget } from "react-calendly";
 */
/* import { useMediaQuery } from "@mui/material";
 */
import { appointmentLabels } from "./labels";
import { AppointmentComponentProps } from "../../../types";
import Services from "../Services";

const Appointment: React.FC<AppointmentComponentProps> = ({
  setAppointmentRef,
}) => {
  const ref = useRef<HTMLElement>(null);
  /*   const isWideDesktop = useMediaQuery("(min-width:1440px)");
   */
  useEffect(() => {
    setAppointmentRef(ref);
  }, [setAppointmentRef]);

  const commonMotionParams = {
    initial: { opacity: 0, x: -200 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
  };

  return (
    <section id="appointment" ref={ref}>
      <div className="pb-32">
        <div className="min-h-[200px]" />

        <div className="mx-auto w-[70%] md:w-[60%] lg:w-[40%]">
          <motion.div
            {...commonMotionParams}
            transition={{
              duration: 0.5,
            }}
            className="font-bold lg:font-normal text-[30px] uppercase"
          >
            <h2>{appointmentLabels.title}</h2>
          </motion.div>

          <motion.div
            {...commonMotionParams}
            initial={{ opacity: 0, x: 200 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="text-lg 2xl:w-[60%]"
          >
            {appointmentLabels.desc}
            <br />
            {/*             <a
              className="appointment--span-desc_link"
              href="https://www.picktime.com/777108fc-5fb7-4d4e-b853-822c2fe9ae27"
              rel="noreferrer"
              target="_blank"
              >
              {appointmentLabels.desc_link}
              </a>
            */}
            {/* <!-- Début de widget en ligne Calendly --> */}
            {/* <!-- Fin de widget en ligne Calendly --> */}
          </motion.div>
        </div>
      </div>
      <Services />

      {/* <motion.div
        {...commonMotionParams}
        transition={{
          delay: 0.4,
          duration: 1,
          type: "spring",
          stiffness: 40,
        }}
        className="w-full md:w-auto"
      >
        <InlineWidget
          url="https://calendly.com/merci-lartiste?background_color=DAD2C2&text_color=755018"
          styles={{
            width: "90%",
            height: isWideDesktop ? "1000px" : "1200px",
            overflow: "hidden",
            margin: "auto",
          }}
        />
      </motion.div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script> */}
    </section>
  );
};

export default Appointment;
