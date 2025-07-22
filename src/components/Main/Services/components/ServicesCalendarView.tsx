import React, { useState } from "react";
import {
  CalendlyEventType,
  CalendlyAvailableTime,
} from "../../../../services/calendly-api";
import Calendar from "../Calendar";
/* import CalendlyModal from "../CalendlyModal";
 */
interface ServicesCalendarViewProps {
  eventType: CalendlyEventType;
  onBack: () => void;
}

const ServicesCalendarView: React.FC<ServicesCalendarViewProps> = ({
  eventType,
  onBack,
}) => {
  const [selectedTimeSlot, setSelectedTimeSlot] =
    useState<CalendlyAvailableTime | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTimeSlotClick = (timeSlot: CalendlyAvailableTime) => {
    setSelectedTimeSlot(timeSlot);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTimeSlot(null);
  };

  return (
    <div className="container mx-auto py-16 lg:py-24 px-4">
      <Calendar
        eventType={eventType}
        onBack={onBack}
        onTimeSlotClick={handleTimeSlotClick}
      />
      {/*       <CalendlyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        timeSlot={selectedTimeSlot}
      />
 */}{" "}
    </div>
  );
};

export default ServicesCalendarView;
