import React from "react";
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from "../../../../../base-components";
import { servicesLabels } from "../../../../../labels/services";

interface CalendarLoadingProps {
  message?: string;
}

export const CalendarLoading: React.FC<CalendarLoadingProps> = ({
  message = servicesLabels.calendar.loadingSlots,
}) => <LoadingState message={message} useSpinner={true} />;

interface CalendarErrorProps {
  error: string;
  onBack: () => void;
}

export const CalendarError: React.FC<CalendarErrorProps> = ({
  error,
  onBack,
}) => (
  <div className="py-16">
    <ErrorState
      error={error}
      onAction={onBack}
      actionLabel={servicesLabels.calendar.backButton}
      errorColor="text-red-600"
    />
  </div>
);

interface CalendarEmptyProps {
  message?: string;
}

export const CalendarEmpty: React.FC<CalendarEmptyProps> = ({
  message = servicesLabels.calendar.noSlots,
}) => <EmptyState description={message} animate={false} />;
