import React, { useState } from "react";
import { CalendlyAvailableTime } from "../../../../../services/calendly-api";
import { groupTimesByDate } from "../helpers";
import ExpandableDateCard from "./ExpandableDateCard";

interface TimeSlotGridProps {
  availableTimes: CalendlyAvailableTime[];
  onTimeSlotClick: (timeSlot: CalendlyAvailableTime) => void;
}

const TimeSlotGrid: React.FC<TimeSlotGridProps> = ({
  availableTimes,
  onTimeSlotClick,
}) => {
  const [expandedDate, setExpandedDate] = useState<string | null>(null);

  const toggleDate = (date: string) => {
    setExpandedDate(expandedDate === date ? null : date);
  };

  const groupedTimes = groupTimesByDate(availableTimes);
  const sortedDates = Object.keys(groupedTimes).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  return (
    <div className="space-y-4">
      {sortedDates.map((date, dateIndex) => (
        <ExpandableDateCard
          key={date}
          date={groupedTimes[date][0].start_time}
          timeSlots={groupedTimes[date]}
          isExpanded={expandedDate === date}
          onToggle={() => toggleDate(date)}
          onTimeSlotClick={onTimeSlotClick}
          dateIndex={dateIndex}
        />
      ))}
    </div>
  );
};

export default TimeSlotGrid;
