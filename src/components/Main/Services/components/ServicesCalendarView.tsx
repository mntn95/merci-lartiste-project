import React from "react";
import {
  CalendlyEventType,
  CalendlyAvailableTime,
} from "../../../../services/calendly-api";
import { openCalendlyPopup } from "../../../../utils";
import Calendar from "../Calendar";

interface ServicesCalendarViewProps {
  eventType: CalendlyEventType;
  onBack: () => void;
}

const ServicesCalendarView: React.FC<ServicesCalendarViewProps> = ({
  eventType,
  onBack,
}) => {
  const handleTimeSlotClick = (timeSlot: CalendlyAvailableTime) => {
    openCalendlyPopup(timeSlot.scheduling_url);
  };

  return (
    <div className="container mx-auto py-16 lg:py-24 px-4">
      <Calendar
        eventType={eventType}
        onBack={onBack}
        onTimeSlotClick={handleTimeSlotClick}
      />
    </div>
  );
};

export default ServicesCalendarView;
