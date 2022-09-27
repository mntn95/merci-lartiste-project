import { useRef, useEffect } from "react";
import { useFela } from "react-fela";
import { appointmentTranslation } from "../intl";

const appointment = {
  paddingBottom: "8rem",
  "& .appointment": {
    "&--space": {
      minHeight: "300px",
    },
    "&--span": {
      "@media (max-width: 767px)": {
        margin: "auto",
        width: "70%",
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        margin: "auto",
        width: "60%",
      },
      "@media (min-width: 1024px)": {
        margin: "auto",
        width: "40%",
      },
      margin: "auto",
      width: "40%",
      "&-title": {
        "@media (max-width: 1023px)": {
          fontWeight: "bold",
          fontSize: "30px",
        },
        fontWeight: "normal",
        fontSize: "30px",
        textTransform: "uppercase",
      },
      "&-desc": {
        fontSize: "18px",
        "@media (min-width: 1441px)": {
          width: "60%",
        },
        "&_link": {
          display: "block",
          margin: "4rem 0 4rem 0",
          color: "inherit",
          fontStyle: "italic",
        },
      },
    },
  },
};

const calendarContainer = {
  "@media (max-width: 767px)": {
    width: "100%",
  },
};

const Appointment = ({ setAppointmentRef }) => {
  const { css } = useFela();
  const ref = useRef(null);

  useEffect(() => {
    setAppointmentRef(ref);
  }, [setAppointmentRef]);

  return (
    <section id="appointment" ref={ref}>
      <div className={css(appointment)}>
        <div className="appointment--space" />
        <div className="appointment--span">
          <div className="appointment--span-title">
            <h2>{appointmentTranslation.title}</h2>
          </div>
          <div className="appointment--span-desc">
            {appointmentTranslation.desc}
            <br />
            {/*             <a
              className="appointment--span-desc_link"
              href="https://www.picktime.com/777108fc-5fb7-4d4e-b853-822c2fe9ae27"
              rel="noreferrer"
              target="_blank"
              >
              {appointmentTranslation.desc_link}
              </a>
            */}{" "}
            {/* <!-- Début de widget en ligne Calendly --> */}
            {/* <!-- Fin de widget en ligne Calendly --> */}
          </div>
        </div>
      </div>
      <div className={css(calendarContainer)}>
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/mattngtn?background_color=DAD2C2&text_color=755018"
          style={{
            width: "90%",
            height: "700px",
            overflow: "hidden",
            margin: "auto",
          }}
        ></div>
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
