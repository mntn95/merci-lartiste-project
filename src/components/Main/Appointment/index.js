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
        marginLeft: "auto",
        marginRight: "4rem",
        width: "60%",
      },
      "@media (min-width: 1024px)": {
        margin: "auto",
        width: "40%",
      },
      margin: "auto",
      width: "40%",
      "&-title": {
        "@media (max-width: 767px)": {
          fontWeight: "bold",
          fontSize: "24px",
        },
        fontWeight: "normal",
        fontSize: "30px",
        textTransform: "uppercase",
      },
      "&-desc": {
        "@media (max-width: 767px)": {
          fontSize: "14px",
        },
        fontSize: "22px",
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
            <span>{appointmentTranslation.title}</span>
          </div>
          <div className="appointment--span-desc">
            {appointmentTranslation.desc}
            <br />
            <a
              className="appointment--span-desc_link"
              href="https://www.picktime.com/777108fc-5fb7-4d4e-b853-822c2fe9ae27"
              rel="noreferrer"
              target="_blank"
            >
              {appointmentTranslation.desc_link}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
