import { useFela } from "react-fela";
import { appointmentTranslation } from "../intl";

const appointment = {
  paddingBottom: "8rem",
  "& .appointment": {
    "&--space": {
      minHeight: "30vh",
    },
    "&--span": {
      margin: "auto",
      width: "40%",
      "&-title": {
        fontWeight: "normal",
        fontSize: "30px",
        textTransform: "uppercase",
      },
      "&-desc": {
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

const Appointment = () => {
  const { css } = useFela();

  return (
    <section id="appointment">
      <div className={css(appointment)}>
        <div className="appointment--space" />
        <div className="appointment--span">
          <div className="appointment--span-title">
            <h3>{appointmentTranslation.title}</h3>
          </div>
          <div className="appointment--span-desc">
            {appointmentTranslation.desc_one}
            <br />
            {appointmentTranslation.desc_two}
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
