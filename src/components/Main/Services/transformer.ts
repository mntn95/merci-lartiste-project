import { ServiceItem } from "../../../types";
import { CalendlyEventType } from "../../../services/calendly-api";
import { servicesLabels } from "./labels";

/**
 * Convertit un CalendlyEventType en ServiceItem
 * utilisable par les composants de l'interface
 */
export const convertEventTypeToService = (
  eventType: CalendlyEventType
): ServiceItem => ({
  id: eventType.uri,
  title: eventType.name,
  description:
    eventType.description_plain || servicesLabels.service.defaultDescription,
  price: 0, // Les prix ne sont pas fournis par l'API Calendly
  duration: `${eventType.duration} min`,
  isApiData: true,
});

/**
 * Convertit une liste de CalendlyEventType en liste de ServiceItem
 */
export const convertEventTypesToServices = (
  eventTypes: CalendlyEventType[]
): ServiceItem[] => {
  return eventTypes.map(convertEventTypeToService);
};
