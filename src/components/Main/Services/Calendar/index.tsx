import React, { useState, useEffect, useCallback } from "react";
import {
  CalendlyEventType,
  CalendlyAvailableTime,
} from "../../../../services/calendly-api";
import { SearchDirection } from "@/types";
import { servicesLabels } from "../labels";
import {
  CalendarHeader,
  CalendarNavigation,
  TimeSlotGrid,
  CalendarLoading,
  CalendarError,
  CalendarEmpty,
} from "./components";
import {
  fetchAvailableTimesLogic,
  isValidPreviousWeekOffset,
  getNextWeekOffset,
  getPreviousWeekOffset,
} from "./helpers";

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
  const [weekOffset, setWeekOffset] = useState(0);
  const [firstAvailableWeek, setFirstAvailableWeek] = useState<number | null>(
    null
  );

  const fetchAvailableTimes = useCallback(
    async (startOffset = 0, searchDirection: SearchDirection = "forward") => {
      try {
        setLoading(true);

        const result = await fetchAvailableTimesLogic(
          eventType.uri,
          startOffset,
          searchDirection
        );

        if (result.success) {
          setAvailableTimes(result.availableTimes);
          setWeekOffset(result.weekOffset);

          if (firstAvailableWeek === null) {
            setFirstAvailableWeek(result.weekOffset);
          }
        } else {
          setAvailableTimes([]);
        }

        setError(null);
      } catch (err) {
        console.error("Error loading time slots:", err);
        setError(servicesLabels.calendar.errorSlots);
        setAvailableTimes([]);
      } finally {
        setLoading(false);
      }
    },
    [eventType.uri, firstAvailableWeek]
  );

  useEffect(() => {
    fetchAvailableTimes(0, "forward");
  }, [fetchAvailableTimes]);

  const handlePreviousWeek = () => {
    if (isValidPreviousWeekOffset(weekOffset, firstAvailableWeek)) {
      const newOffset = getPreviousWeekOffset(weekOffset);
      fetchAvailableTimes(newOffset, "backward");
    }
  };

  const handleNextWeek = () => {
    const newOffset = getNextWeekOffset(weekOffset);
    fetchAvailableTimes(newOffset, "forward");
  };

  if (error) {
    return <CalendarError error={error} onBack={onBack} />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <CalendarHeader eventType={eventType} onBack={onBack} />

      <div className="flex justify-center mb-6">
        <CalendarNavigation
          direction="up"
          onClick={handlePreviousWeek}
          disabled={loading}
          visible={isValidPreviousWeekOffset(weekOffset, firstAvailableWeek)}
        />
      </div>

      <div className="space-y-8 min-h-[300px]">
        {loading ? (
          <CalendarLoading />
        ) : availableTimes.length > 0 ? (
          <TimeSlotGrid
            availableTimes={availableTimes}
            onTimeSlotClick={onTimeSlotClick}
          />
        ) : (
          <CalendarEmpty />
        )}
      </div>

      <div className="flex justify-center mt-6">
        <CalendarNavigation
          direction="down"
          onClick={handleNextWeek}
          disabled={loading}
          visible={true}
        />
      </div>
    </div>
  );
};

export default Calendar;
