import { appointmentTranslation } from "../intl";

const Appointment = () => (
  <div className="appointment">
    <div className="appointment-space" />
    <div className="appointment-span">
      <div className="appointment-title">
        <h3>{appointmentTranslation.title}</h3>
      </div>
      <div className="appointment-desc">
        {appointmentTranslation.desc_one}
        <br />
        {appointmentTranslation.desc_two}
      </div>
    </div>
  </div>
);

export default Appointment;
