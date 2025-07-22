import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import {
  CalendlyEventType,
  CalendlyAvailableTime,
  calendlyApi,
} from "../../../../services/calendly-api";
import { servicesLabels } from "../labels";

interface CalendarProps {
  eventType: CalendlyEventType;
  onBack: () => void;
  onTimeSlotClick: (timeSlot: CalendlyAvailableTime) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  eventType,
  onBack,
  onTimeSlotClick,
}) => {
  const [availableTimes, setAvailableTimes] = useState<CalendlyAvailableTime[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      try {
        setLoading(true);

        const startTime = new Date().toISOString();
        const endTime = new Date(
          Date.now() + 7 * 24 * 60 * 60 * 1000
        ).toISOString();

        const response = await calendlyApi.getAvailableTimes(
          eventType.uri,
          startTime,
          endTime
        );

        setAvailableTimes(response.collection);
        setError(null);
      } catch (err) {
        console.error("Erreur lors du chargement des créneaux:", err);
        setError(servicesLabels.calendar.errorSlots);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailableTimes();
  }, [eventType.uri]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const groupTimesByDate = (times: CalendlyAvailableTime[]) => {
    return times.reduce((acc, time) => {
      const date = new Date(time.start_time).toDateString();
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(time);
      return acc;
    }, {} as Record<string, CalendlyAvailableTime[]>);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <CircularProgress size={40} sx={{ color: "#755018" }} />
        <span className="ml-4 text-lg text-[#755018]">
          {servicesLabels.calendar.loadingSlots}
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-600 mb-4">{error}</p>
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="px-4 py-2 bg-transparent border-1 border-[#755018] text-[#755018] rounded-sm hover:bg-transparent transition-colors duration-200"
        >
          {servicesLabels.calendar.backButton}
        </motion.button>
      </div>
    );
  }

  const groupedTimes = groupTimesByDate(availableTimes);
  const sortedDates = Object.keys(groupedTimes).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* En-tête */}
      <div className="text-center mb-8">
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="mb-3 px-4 py-2 bg-transparent border-1 border-[#755018] text-[#755018] rounded-sm hover:bg-transparent transition-colors duration-200"
        >
          {servicesLabels.calendar.backButtonArrow}
        </motion.button>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bold text-[24px] lg:text-[30px] mb-2 text-[#755018]"
        >
          {eventType.name}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600"
        >
          {servicesLabels.calendar.duration} {eventType.duration} minutes
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[2px] bg-[#755018] mx-auto mt-4 w-[100px]"
        />
      </div>

      {/* Créneaux par jour */}
      <div className="space-y-8">
        {sortedDates.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">{servicesLabels.calendar.noSlots}</p>
          </div>
        ) : (
          sortedDates.map((date, dateIndex) => (
            <motion.div
              key={date}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: dateIndex * 0.1 }}
              className="space-y-0 bg-white/30 backdrop-blur-sm rounded-sm p-6 shadow-sm overflow-hidden"
            >
              <h3 className="text-lg !font-botanika font-bold text-[#755018] mb-4 capitalize">
                {formatDate(groupedTimes[date][0].start_time)}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {groupedTimes[date].map((timeSlot, index) => (
                  <motion.button
                    key={timeSlot.start_time}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: dateIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onTimeSlotClick(timeSlot)}
                    className="p-3 border-1 border-[#755018] rounded-sm text-center"
                  >
                    <div className="font-medium text-[#755018]">
                      {formatTime(timeSlot.start_time)}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Calendar;
