import { useFela } from "react-fela";

const appointmentApp = () => ({
  minHeight: "30rem",
});

const AppointmentApp = () => {
  const { css } = useFela();

  return <section className={css(appointmentApp)} />;
};

export default AppointmentApp;
