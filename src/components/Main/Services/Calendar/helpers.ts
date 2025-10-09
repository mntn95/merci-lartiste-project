import {
  CalendlyAvailableTime,
  calendlyApi,
} from "../../../../services/calendly-api";
import { SearchDirection } from "@/types";

const validateAndCorrectDateRange = (
  startTime: string,
  endTime: string
): string => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  const diffMs = end.getTime() - start.getTime();
  const maxDiffMs = 7 * 24 * 60 * 60 * 1000 - 1;

  if (diffMs > maxDiffMs) {
    const correctedEnd = new Date(start.getTime() + maxDiffMs);
    console.warn(
      `Date range too long (${diffMs}ms), corrected to ${maxDiffMs}ms`
    );
    return correctedEnd.toISOString();
  }

  return endTime;
};

const calculateStartDate = (now: Date, weekOffset: number): Date => {
  if (weekOffset === 0) {
    return new Date(now.getTime() + 5 * 60 * 1000);
  }

  const date = new Date(now);
  const dayOfWeek = date.getDay();
  const daysFromMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  date.setDate(date.getDate() + daysFromMonday);
  date.setDate(date.getDate() + weekOffset * 7);
  date.setHours(0, 0, 0, 0);
  return date;
};

const calculateEndDate = (
  now: Date,
  startDate: Date,
  weekOffset: number
): Date => {
  if (weekOffset === 0) {
    const date = new Date(now);
    const dayOfWeek = date.getDay();
    const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
    date.setDate(date.getDate() + daysUntilSunday);
    date.setHours(23, 59, 59, 0);
    return date;
  }

  const date = new Date(startDate);
  date.setDate(date.getDate() + 7);
  date.setTime(date.getTime() - 1);
  return date;
};

export const generateFutureDates = (weekOffset = 0) => {
  const now = new Date();
  const startDate = calculateStartDate(now, weekOffset);
  const endDate = calculateEndDate(now, startDate, weekOffset);

  const startTimeStr = startDate.toISOString();
  const endTimeStr = endDate.toISOString();

  return {
    startTime: startTimeStr,
    endTime: validateAndCorrectDateRange(startTimeStr, endTimeStr),
  };
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

export const isValidPreviousWeekOffset = (
  currentOffset: number,
  firstAvailableWeek: number | null
): boolean => {
  return currentOffset > (firstAvailableWeek ?? 0);
};

export const getNextWeekOffset = (currentOffset: number): number => {
  return currentOffset + 1;
};

export const getPreviousWeekOffset = (currentOffset: number): number => {
  return Math.max(0, currentOffset - 1);
};
