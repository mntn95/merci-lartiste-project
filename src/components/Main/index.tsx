import React from "react";
import { MainProps } from "../../types";
import Appointment from "./Appointment";
import Prices from "./Prices";
import VideoComponent from "./Video";

const Main: React.FC<MainProps> = ({
  setAppointmentRef,
  setPricesRef,
  showModal,
}) => {
  return (
    <>
      <main className="mt-44">
        <VideoComponent />
        <Appointment
          setAppointmentRef={setAppointmentRef}
          showModal={showModal}
        />
        <Prices setPricesRef={setPricesRef} showModal={showModal} />
      </main>
    </>
  );
};

export default Main;
