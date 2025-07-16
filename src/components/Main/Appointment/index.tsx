import React, { useRef, useEffect } from "react";
import { InlineWidget } from "react-calendly";

import { appointmentLabels } from "./labels";
import { AppointmentComponentProps } from "../../../types";

const Appointment: React.FC<AppointmentComponentProps> = ({
  setAppointmentRef,
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setAppointmentRef(ref);
  }, [setAppointmentRef]);

  return (
    <section id="appointment" ref={ref}>
      <div className="pb-32">
        <div className="min-h-[200px]" />

        <div className="mx-auto w-[70%] md:w-[60%] lg:w-[40%]">
          <div className="font-bold lg:font-normal text-[30px] uppercase">
            <h2>{appointmentLabels.title}</h2>
          </div>

          <div className="text-lg 2xl:w-[60%]">
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
          </div>
        </div>
      </div>

      <div className="w-full md:w-auto">
        <InlineWidget
          url="https://calendly.com/merci-lartiste?background_color=DAD2C2&text_color=755018"
          styles={{
            width: "90%",
            height: "1000px",
            overflow: "hidden",
            margin: "auto",
          }}
        />
      </div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </section>
  );
};

export default Appointment;
