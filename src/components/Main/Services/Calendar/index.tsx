import React, { useState, useEffect, useCallback } from "react";
import {
  CalendlyEventType,
  CalendlyAvailableTime,
  calendlyApi,
} from "../../../../services/calendly-api";
import { SearchDirection } from "../../../../types";
import { servicesLabels } from "../labels";
import {
  CalendarHeader,
  CalendarNavigation,
  TimeSlotGrid,
  CalendarLoading,
  CalendarError,
  CalendarEmpty,
} from "./components";
import { generateFutureDates } from "./helpers";

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
  const [weekOffset, setWeekOffset] = useState(0); // 0 = semaine courante, 1 = semaine suivante, etc.
  const [firstAvailableWeek, setFirstAvailableWeek] = useState<number | null>(
    null
  ); // Première semaine avec des créneaux

  const fetchAvailableTimes = useCallback(
    async (startOffset = 0, searchDirection: SearchDirection = "forward") => {
      try {
        setLoading(true);
        let currentOffset = startOffset;
        let foundResults = false;
        const maxAttempts = 10;

        for (let attempt = 0; attempt < maxAttempts; attempt++) {
          if (currentOffset < 0) {
            currentOffset = 0;
          }

          const { startTime, endTime } = generateFutureDates(currentOffset);

          const response = await calendlyApi.getAvailableTimes(
            eventType.uri,
            startTime,
            endTime
          );

          if (response.collection && response.collection.length > 0) {
            setAvailableTimes(response.collection);
            setWeekOffset(currentOffset);

            if (firstAvailableWeek === null) {
              setFirstAvailableWeek(currentOffset);
            }

            foundResults = true;
            break;
          } else {
            if (searchDirection === "forward") {
              currentOffset++;
            } else {
              currentOffset--;
              if (currentOffset < 0) {
                currentOffset = 0;
                searchDirection = "forward";
              }
            }
          }
        }

        if (!foundResults) {
          setAvailableTimes([]);
        }

        setError(null);
      } catch (err) {
        console.error("Erreur lors du chargement des créneaux:", err);
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
    if (weekOffset > (firstAvailableWeek ?? 0)) {
      const newOffset = weekOffset - 1;
      fetchAvailableTimes(newOffset, "backward");
    }
  };

  const handleNextWeek = () => {
    const newOffset = weekOffset + 1;
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
          visible={weekOffset > (firstAvailableWeek ?? 0)}
        />
      </div>

      <div className="space-y-8 min-h-[300px]">
        {loading ? (
          <CalendarLoading />
        ) : availableTimes.length === 0 ? (
          <CalendarEmpty />
        ) : (
          <TimeSlotGrid
            availableTimes={availableTimes}
            onTimeSlotClick={onTimeSlotClick}
          />
        )}
      </div>

      <div className="flex justify-center mt-6">
        <CalendarNavigation
          direction="down"
          onClick={handleNextWeek}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default Calendar;
