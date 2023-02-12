import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { useMemo } from 'react';

import { StyledErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundaryStyled';

import NotFound from '@/routes/NotFound';
import InternalServerError from '@/routes/InternalServerError';

const ErrorBoundary = () => {
  const error = useRouteError();

  const errorContent = useMemo(() => {
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) return <NotFound />;
    }

    return <InternalServerError />;
  }, [error]);

  return <StyledErrorBoundary>{errorContent}</StyledErrorBoundary>;
};

export default ErrorBoundary;
