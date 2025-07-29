import React, { useState, useEffect, useRef } from "react";
import {
  ServicesComponentProps,
  ServiceItem as ServiceItemType,
} from "../../../types";
import { calendlyApi, CalendlyEventType } from "../../../services/calendly-api";
import { servicesLabels } from "./labels";
import { handleScrollToRef } from "../../../utils";
import {
  ServicesLoading,
  ServicesError,
  ServicesEmpty,
  ServicesList,
  ServicesCalendarView,
} from "./components";

const Services: React.FC<ServicesComponentProps> = ({ showModal }) => {
  const [eventTypes, setEventTypes] = useState<CalendlyEventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEventType, setSelectedEventType] =
    useState<CalendlyEventType | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchEventTypes = async () => {
      try {
        setLoading(true);
        const response = await calendlyApi.getEventTypes();
        setEventTypes(response.collection);
        setError(null);
      } catch (err) {
        console.error("Erreur lors du chargement des prestations:", err);
        setError(servicesLabels.errorLoading);
      } finally {
        setLoading(false);
      }
    };

    fetchEventTypes();
  }, []);

  const handleServiceClick = (service: ServiceItemType) => {
    if (service.isApiData) {
      const eventType = eventTypes.find((et) => et.uri === service.id);
      if (eventType) {
        handleScrollToRef(containerRef);
        setSelectedEventType(eventType);
      }
    }
  };

  if (selectedEventType) {
    return (
      <ServicesCalendarView
        eventType={selectedEventType}
        onBack={() => setSelectedEventType(null)}
        showModal={showModal}
      />
    );
  }

  return (
    <div ref={containerRef} className="container mx-auto py-16 lg:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {loading && <ServicesLoading />}

        {error && <ServicesError error={error} />}

        {eventTypes.length > 0 ? (
          <ServicesList
            eventTypes={eventTypes}
            onServiceClick={handleServiceClick}
          />
        ) : !loading ? (
          <ServicesEmpty />
        ) : null}
      </div>
    </div>
  );
};

export default Services;
