import type { FC } from "react";
import type { FallbackProps } from "react-error-boundary";
import Button from "@mui/material/Button";

const ErrorFallbackView: FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert">
      {error}
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
};

export default ErrorFallbackView;
