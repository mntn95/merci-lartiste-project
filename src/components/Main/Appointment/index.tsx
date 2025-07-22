import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { appointmentLabels } from "./labels";
import { AppointmentComponentProps } from "../../../types";
import Services from "../Services";

const Appointment: React.FC<AppointmentComponentProps> = ({
  setAppointmentRef,
  showModal,
}) => {
  const ref = useRef<HTMLElement>(null);

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
          </motion.div>
        </div>
      </div>
      <Services showModal={showModal} />
    </section>
  );
};

export default Appointment;
