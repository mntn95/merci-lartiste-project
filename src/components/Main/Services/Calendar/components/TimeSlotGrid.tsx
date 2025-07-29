import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KeyboardArrowDown } from "@mui/icons-material";
import { CalendlyAvailableTime } from "../../../../../services/calendly-api";
import { formatDate, formatTime, groupTimesByDate } from "../helpers";

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
        <motion.div
          key={date}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: dateIndex * 0.1 }}
          className="bg-white/30 backdrop-blur-sm rounded-sm shadow-sm overflow-hidden"
        >
          <motion.div
            onClick={() => toggleDate(date)}
            className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/10 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg !font-botanika font-bold text-[#755018] capitalize">
              {formatDate(groupedTimes[date][0].start_time)}
            </h3>

            <motion.div
              animate={{
                rotate: expandedDate === date ? 180 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-[#755018]"
            >
              <KeyboardArrowDown fontSize="large" />
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {expandedDate === date && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {groupedTimes[date].map((timeSlot, index) => (
                      <motion.button
                        key={timeSlot.start_time}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onTimeSlotClick(timeSlot)}
                        className="p-3 border-1 border-[#755018] rounded-sm text-center hover:bg-[#755018] hover:text-white transition-colors duration-200"
                      >
                        <div className="font-medium">
                          {formatTime(timeSlot.start_time)}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default TimeSlotGrid;
