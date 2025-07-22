import React from "react";
import {
  CalendlyEventType,
  CalendlyAvailableTime,
} from "../../../../services/calendly-api";
import { ModalContent } from "../../../../types";
import Calendar from "../Calendar";

interface ServicesCalendarViewProps {
  eventType: CalendlyEventType;
  onBack: () => void;
  showModal: (content: ModalContent) => void;
}

const ServicesCalendarView: React.FC<ServicesCalendarViewProps> = ({
  eventType,
  onBack,
  showModal,
}) => {
  const handleTimeSlotClick = (timeSlot: CalendlyAvailableTime) => {
    sessionStorage.setItem("selectedTimeSlot", JSON.stringify(timeSlot));
    showModal("servicesBooking");
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
