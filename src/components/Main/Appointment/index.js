import { useFela } from "react-fela";

import AppointmentApp from "./AppointmentApp";
import { appointmentTranslation } from "../intl";

const appointment = () => ({
  paddingBottom: "8rem",
});

const appointmentSpace = () => ({
  minHeight: "30vh",
});

const appointmentSpan = () => ({
  margin: "auto",
  width: "40%",
});

const appointmentTitle = () => ({
  fontWeight: "normal",
  fontSize: "30px",
  textTransform: "uppercase",
});

const appointmentDesc = () => ({
  fontSize: "22px",
});

const Appointment = () => {
  const { css } = useFela();

  return (
    <div className={css(appointment)}>
      <div className={css(appointmentSpace)} />
      <div className={css(appointmentSpan)}>
        <div className={css(appointmentTitle)}>
          <h3>{appointmentTranslation.title}</h3>
        </div>
        <div className={css(appointmentDesc)}>
          {appointmentTranslation.desc_one}
          <br />
          {appointmentTranslation.desc_two}
        </div>
      </div>
      <AppointmentApp />
    </div>
  );
};

export default Appointment;
