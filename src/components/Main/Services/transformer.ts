import { ServiceItem } from "../../../types";
import { CalendlyEventType } from "../../../services/calendly-api";
import { servicesLabels } from "./labels";

export const convertEventTypeToService = (
  eventType: CalendlyEventType
): ServiceItem => ({
  id: eventType.uri,
  title: eventType.name,
  description:
    eventType.description_plain || servicesLabels.service.defaultDescription,
  price: 0,
  duration: `${eventType.duration} min`,
  isApiData: true,
});

export const convertEventTypesToServices = (
  eventTypes: CalendlyEventType[]
): ServiceItem[] => {
  return eventTypes.map(convertEventTypeToService);
};
