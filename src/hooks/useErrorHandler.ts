import { useCallback, useEffect, useState } from "react";

/**
 * Custom hook to handle errors in functional components
 * Throws errors to be caught by the nearest ErrorBoundary
 *
 * @returns Function to handle errors
 *
 */
export const useErrorHandler = () => {
  const [error, setError] = useState<Error | null>(null);

  const handleError = useCallback((error: Error | string) => {
    const errorObj = typeof error === "string" ? new Error(error) : error;
    if (!errorObj) {
      throw new Error("Unknown error");
    }
    setError(errorObj);
  }, []);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return handleError;
};
