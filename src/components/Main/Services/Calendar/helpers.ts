import { CalendlyAvailableTime } from "../../../../services/calendly-api";

export const generateFutureDates = (weekOffset = 0) => {
  const now = new Date();

  if (weekOffset === 0) {
    const startTime = new Date(now.getTime() + 5 * 60 * 1000); // +5 minutes

    const endDate = new Date(now);
    const dayOfWeek = endDate.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
    const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek; // Jours jusqu'au dimanche
    endDate.setDate(endDate.getDate() + daysUntilSunday);
    endDate.setHours(23, 59, 59, 999); // Fin du dimanche

    return {
      startTime: startTime.toISOString(),
      endTime: endDate.toISOString(),
    };
  } else {
    const startDate = new Date(now);

    const dayOfWeek = startDate.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
    const daysFromMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Jours depuis le lundi
    startDate.setDate(startDate.getDate() + daysFromMonday);

    startDate.setDate(startDate.getDate() + weekOffset * 7);
    startDate.setHours(0, 0, 0, 0); // Début du lundi

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6); // +6 jours pour aller au dimanche
    endDate.setHours(23, 59, 59, 999); // Fin du dimanche

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
