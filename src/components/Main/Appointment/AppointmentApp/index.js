import { useFela } from "react-fela";

const appointmentApp = () => ({
  minHeight: "30rem",
});

const AppointmentApp = () => {
  const { css } = useFela();

  return <div className={css(appointmentApp)} />;
};

export default AppointmentApp;
