import { servicesLabels } from "./labels";
import { CalendlyEventType } from "../../../services/calendly-api";
import { ServiceItem } from "../../../types";

// Price mapping table by service URI
// This mapping allows associating a price to each Calendly service via its unique URI
const SERVICE_PRICE_MAPPING: Record<string, number> = {
  "https://api.calendly.com/event_types/6d59d259-279c-4118-a685-77f75f692727": 25,
  "https://api.calendly.com/event_types/bcbe8dd5-e018-4fa1-ab93-cd07157f2ff1": 60,
  "https://api.calendly.com/event_types/7b22856b-0987-4d45-ab2a-83a54ea78a8e": 40,
  "https://api.calendly.com/event_types/c326455f-168b-442f-a204-a9348b1ca3ff": 40,
  "https://api.calendly.com/event_types/eb6301b3-818a-415b-a0ff-6de45f816e01": 25,
  "https://api.calendly.com/event_types/01504ccf-9e71-4d57-9404-5ec5de4466bf": 15,
};

/**
 * Gets the price of a service based on its URI
 * @param serviceUri - Unique URI of the Calendly service
 * @returns Service price or 0 if not found
 */
const getServicePrice = (serviceUri: string): number =>
  SERVICE_PRICE_MAPPING[serviceUri] || 0;

/**
 * Converts HTML description to plain text, removing HTML tags
 * @param htmlDescription - HTML description from Calendly
 * @returns Plain text description without HTML tags
 */
const convertHtmlToPlainText = (htmlDescription: string): string =>
  htmlDescription
    .replace(/<p>/g, "")
    .replace(/<br>/g, "\n")
    .replace(/<\/p>/g, "\n")
    .trim();

export const convertEventTypeToService = (
  eventType: CalendlyEventType
): ServiceItem => ({
  id: eventType.uri,
  title: eventType.name,
  description: eventType.description_html
    ? convertHtmlToPlainText(eventType.description_html)
    : eventType.description_plain || servicesLabels.service.defaultDescription,
  price: getServicePrice(eventType.uri),
  duration: `${eventType.duration} min`,
});
