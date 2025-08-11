import React from "react";
import { MainProps } from "@/types";
import Appointment from "./Appointment";
import Prices from "./Prices";
import VideoComponent from "./Video";

const Main: React.FC<MainProps> = ({ setAppointmentRef, setPricesRef }) => (
  <main className="mt-44">
    <VideoComponent />
    <Appointment setAppointmentRef={setAppointmentRef} />
    <Prices setPricesRef={setPricesRef} />
  </main>
);

export default Main;
