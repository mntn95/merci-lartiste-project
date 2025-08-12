import {
  CalendlyAvailableTime,
  calendlyApi,
} from "../../../../services/calendly-api";
import { SearchDirection } from "@/types";

export const generateFutureDates = (weekOffset = 0) => {
  const now = new Date();

  if (weekOffset === 0) {
    const startTime = new Date(now.getTime() + 5 * 60 * 1000); // +5 minutes

    const endDate = new Date(now);
    const dayOfWeek = endDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek; // Days until Sunday
    endDate.setDate(endDate.getDate() + daysUntilSunday);
    endDate.setHours(23, 59, 59, 999); // End of Sunday

    return {
      startTime: startTime.toISOString(),
      endTime: endDate.toISOString(),
    };
  } else {
    const startDate = new Date(now);

    const dayOfWeek = startDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const daysFromMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Days since Monday
    startDate.setDate(startDate.getDate() + daysFromMonday);

    startDate.setDate(startDate.getDate() + weekOffset * 7);
    startDate.setHours(0, 0, 0, 0); // Beginning of Monday

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6); // +6 days to go to Sunday
    endDate.setHours(23, 59, 59, 999); // End of Sunday

    return {
      startTime: startDate.toISOString(),
      endTime: endDate.toISOString(),
    };
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const groupTimesByDate = (times: CalendlyAvailableTime[]) => {
  return times.reduce((acc, time) => {
    const date = new Date(time.start_time).toDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(time);
    return acc;
  }, {} as Record<string, CalendlyAvailableTime[]>);
};

/**
 * Core logic for fetching available times from Calendly API

 * @param eventTypeUri - URI of the Calendly event type
 * @param startOffset - Starting week offset
 * @param searchDirection - Direction to search (forward/backward)
 * @param maxAttempts - Maximum number of search attempts
 * @returns Promise with search result and metadata
 */
export const fetchAvailableTimesLogic = async (
  eventTypeUri: string,
  startOffset = 0,
  searchDirection: SearchDirection = "forward",
  maxAttempts = 10
) => {
  let currentOffset = startOffset;
  let foundResults = false;
  let foundWeekOffset = 0;
  let availableTimes: CalendlyAvailableTime[] = [];

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (currentOffset < 0) {
      currentOffset = 0;
    }

    const { startTime, endTime } = generateFutureDates(currentOffset);

    const response = await calendlyApi.getAvailableTimes(
      eventTypeUri,
      startTime,
      endTime
    );

    if (response.collection && response.collection.length > 0) {
      availableTimes = response.collection;
      foundWeekOffset = currentOffset;
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

  return {
    success: foundResults,
    availableTimes,
    weekOffset: foundWeekOffset,
    searchDirection,
    attempts: Math.min(maxAttempts, foundResults ? 1 : maxAttempts),
  };
};

/**
 * Validates if a week offset is valid for navigation
 * @param currentOffset - Current week offset
 * @param firstAvailableWeek - First week with available times
 * @returns Whether the offset is valid for previous navigation
 */
export const isValidPreviousWeekOffset = (
  currentOffset: number,
  firstAvailableWeek: number | null
): boolean => {
  return currentOffset > (firstAvailableWeek ?? 0);
};

/**
 * Calculates the next week offset for forward navigation
 * @param currentOffset - Current week offset
 * @returns Next week offset
 */
export const getNextWeekOffset = (currentOffset: number): number => {
  return currentOffset + 1;
};

/**
 * Calculates the previous week offset for backward navigation
 * @param currentOffset - Current week offset
 * @returns Previous week offset
 */
export const getPreviousWeekOffset = (currentOffset: number): number => {
  return Math.max(0, currentOffset - 1);
};
