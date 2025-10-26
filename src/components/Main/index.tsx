import React from "react";

const Main: React.FC = React.memo(() => {
  const VideoComponent = React.lazy(() => import("./Video"));
  const Appointment = React.lazy(() => import("./Appointment"));
  const Prices = React.lazy(() => import("./Prices"));

  return (
    <main className="mt-44">
      <React.Suspense fallback={<div>Chargement...</div>}>
        <VideoComponent />
        <Appointment />
        <Prices />
      </React.Suspense>
    </main>
  );
});

Main.displayName = "Main";

export default Main;
