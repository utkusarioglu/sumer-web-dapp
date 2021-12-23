import type { FC } from "react";
import type { FallbackProps } from "react-error-boundary";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const ErrorFallbackView: FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Container role="alert">
      {error.message}
      <Button onClick={resetErrorBoundary} variant="contained">
        Try again
      </Button>
    </Container>
  );
};

export default ErrorFallbackView;
