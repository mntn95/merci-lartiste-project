import { CircularProgress } from "@mui/material";
import React from "react";

interface LoadingStateProps {
  message?: string;
  useSpinner?: boolean;
  textColor?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({
  message,
  useSpinner = false,
  textColor = "#755018",
}) => {
  if (useSpinner) {
    return (
      <div className="flex justify-center items-center py-16">
        <CircularProgress size={40} sx={{ color: textColor }} />
        {message && (
          <span className="ml-4 text-lg" style={{ color: textColor }}>
            {message}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="text-center py-8">
      {message && <p style={{ color: textColor }}>{message}</p>}
    </div>
  );
};

export default LoadingState;
