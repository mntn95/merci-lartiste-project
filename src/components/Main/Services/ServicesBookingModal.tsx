import React, { useEffect, useState } from "react";
import { CalendlyAvailableTime } from "../../../services/calendly-api";

const ServicesBookingModal: React.FC = () => {
  const [timeSlot, setTimeSlot] = useState<CalendlyAvailableTime | null>(null);

  useEffect(() => {
    const storedTimeSlot = sessionStorage.getItem("selectedTimeSlot");
    if (storedTimeSlot) {
      try {
        const parsedTimeSlot = JSON.parse(storedTimeSlot);
        setTimeSlot(parsedTimeSlot);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du créneau horaire:",
          error
        );
      }
    }
  }, []);

  if (!timeSlot) return <div>Chargement...</div>;

  const schedulingUrl = timeSlot.scheduling_url;

  return (
    <div className="p-4">
      <iframe
        src={`${schedulingUrl}?embed_domain=${window.location.hostname}&embed_type=Inline`}
        className="w-full h-[600px] rounded-xl"
        title="Calendly - Prise de rendez-vous"
        frameBorder="0"
      />
    </div>
  );
};

export default ServicesBookingModal;
