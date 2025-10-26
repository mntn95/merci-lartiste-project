import React from "react";
import DateHeader from "./DateHeader";
import TimeSlotList from "./TimeSlotList";
import { GlassCard } from "../../../../../base-components";
import { CalendlyAvailableTime } from "../../../../../services/calendly-api";

interface ExpandableDateCardProps {
  date: string;
  timeSlots: CalendlyAvailableTime[];
  isExpanded: boolean;
  onToggle: () => void;
  onTimeSlotClick: (timeSlot: CalendlyAvailableTime) => void;
  dateIndex: number;
}

const ExpandableDateCard: React.FC<ExpandableDateCardProps> = ({
  date,
  timeSlots,
  isExpanded,
  onToggle,
  onTimeSlotClick,
  dateIndex,
}) => (
  <GlassCard animated={true} delay={dateIndex * 0.1}>
    <DateHeader date={date} isExpanded={isExpanded} onToggle={onToggle} />
    <TimeSlotList
      timeSlots={timeSlots}
      onTimeSlotClick={onTimeSlotClick}
      isVisible={isExpanded}
    />
  </GlassCard>
);

export default ExpandableDateCard;
