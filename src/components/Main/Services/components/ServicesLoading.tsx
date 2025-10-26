import React from "react";
import { LoadingState } from "../../../../base-components";
import { servicesLabels } from "../../../../labels/services";

const ServicesLoading: React.FC = () => (
  <LoadingState message={servicesLabels.loading} />
);

export default ServicesLoading;
