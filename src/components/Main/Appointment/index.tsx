import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { appointmentLabels } from "./labels";
import Services from "../Services";
import { useNavigation } from "../../../contexts";

const Appointment: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { setAppointmentRef } = useNavigation();

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
      <div className="pb-4">
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
      <Services appointmentRef={ref} />
    </section>
  );
};

export default Appointment;
