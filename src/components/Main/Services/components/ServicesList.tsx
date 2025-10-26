import React from "react";
import { GlassCard } from "../../../../base-components";
import { servicesLabels } from "../../../../labels/services";
import { CalendlyEventType } from "../../../../services/calendly-api";
import { convertEventTypeToService } from "../transformers";
import ServiceItem from "./ServiceItem";
import { ServiceItem as ServiceItemType } from "../../../../types";

interface ServicesListProps {
  eventTypes: CalendlyEventType[];
  onServiceClick: (service: ServiceItemType) => void;
}

const ServicesList: React.FC<ServicesListProps> = ({
  eventTypes,
  onServiceClick,
}) => (
  <>
    <GlassCard animated={false} className="space-y-0">
      {eventTypes.map((eventType, index) => (
        <ServiceItem
          key={eventType.uri}
          service={convertEventTypeToService(eventType)}
          index={index}
          onServiceClick={onServiceClick}
        />
      ))}
    </GlassCard>

    <p className="text-center text-sm text-gray-500 mt-8 italic">
      {servicesLabels.clickInstruction}
    </p>
  </>
);

export default ServicesList;
