import React, { useState, useEffect } from "react";
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

const Services: React.FC<ServicesComponentProps> = ({ appointmentRef }) => {
  const [eventTypes, setEventTypes] = useState<CalendlyEventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEventType, setSelectedEventType] =
    useState<CalendlyEventType | null>(null);

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

  useEffect(() => {
    if (selectedEventType) {
      handleScrollToRef(appointmentRef);
    }
  }, [selectedEventType, appointmentRef]);

  const handleServiceClick = (service: ServiceItemType) => {
    const eventType = eventTypes.find((et) => et.uri === service.id);
    if (eventType) {
      setSelectedEventType(eventType);
    }
  };

  if (selectedEventType) {
    return (
      <ServicesCalendarView
        eventType={selectedEventType}
        onBack={() => setSelectedEventType(null)}
      />
    );
  }

  return (
    <div className="container mx-auto py-16 lg:py-24 px-4">
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
