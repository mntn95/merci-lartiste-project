import React from "react";
import { ErrorState } from "../../../../base-components";

interface ServicesErrorProps {
  error: string;
}

const ServicesError: React.FC<ServicesErrorProps> = ({ error }) => (
  <ErrorState error={error} />
);

export default ServicesError;
