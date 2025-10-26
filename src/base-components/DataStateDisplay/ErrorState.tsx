import React from "react";
import { Button } from "../ui";

interface ErrorStateProps {
  error: string;
  onAction?: () => void;
  actionLabel?: string;
  errorColor?: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  error,
  onAction,
  actionLabel,
  errorColor = "text-amber-600",
}) => (
  <div className="text-center py-4 mb-4">
    <p className={`${errorColor} text-sm`}>{error}</p>
    {onAction && actionLabel && (
      <Button onClick={onAction} className="mt-4" animated={true}>
        {actionLabel}
      </Button>
    )}
  </div>
);

export default ErrorState;
