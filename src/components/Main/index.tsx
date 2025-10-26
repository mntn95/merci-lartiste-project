import React from "react";
import Appointment from "./Appointment";
import Prices from "./Prices";
import VideoComponent from "./Video";

const Main: React.FC = React.memo(() => (
  <main className="mt-44">
    <VideoComponent />
    <Appointment />
    <Prices />
  </main>
));

Main.displayName = "Main";

export default Main;
