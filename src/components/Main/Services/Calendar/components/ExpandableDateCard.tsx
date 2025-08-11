import React from "react";
import { motion } from "framer-motion";
import { CalendlyAvailableTime } from "../../../../../services/calendly-api";
import DateHeader from "./DateHeader";
import TimeSlotList from "./TimeSlotList";

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
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: dateIndex * 0.1 }}
      className="bg-white/30 backdrop-blur-sm rounded-sm shadow-sm overflow-hidden"
    >
      <DateHeader date={date} isExpanded={isExpanded} onToggle={onToggle} />
      <TimeSlotList
        timeSlots={timeSlots}
        onTimeSlotClick={onTimeSlotClick}
        isVisible={isExpanded}
      />
    </motion.div>
  );
};

export default ExpandableDateCard;
