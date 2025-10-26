import React from "react";
import { EmptyState } from "../../../../base-components";
import { servicesLabels } from "../../../../labels/services";

const ServicesEmpty: React.FC = () => (
  <EmptyState
    title={servicesLabels.noResults.title}
    description={servicesLabels.noResults.description}
    icon="📅"
  />
);

export default ServicesEmpty;
