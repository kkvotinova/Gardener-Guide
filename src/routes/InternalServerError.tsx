import { useNavigate } from 'react-router';
import { FallbackProps } from 'react-error-boundary';
import { useCallback } from 'react';
import { Button, Stack, Typography } from '@mui/material';

import { StyledIcon500 } from '@/components/ErrorBoundary/ErrorBoundaryStyled';

const InternalServerError = ({
  resetErrorBoundary,
}: Partial<Pick<FallbackProps, 'resetErrorBoundary'>>) => {
  const navigate = useNavigate();

  const handleReloadPage = useCallback(() => {
    if (resetErrorBoundary) {
      resetErrorBoundary();
      return;
    }

    navigate(0);
  }, [navigate, resetErrorBoundary]);

  return (
    <Stack direction='column' spacing={6} alignItems='center'>
      <StyledIcon500 />
      <Typography textAlign='center' variant='h6'>
        Что-то пошло не так 🙁 Обновите страницу
      </Typography>
      <Button fullWidth variant='contained' onClick={handleReloadPage} style={{ maxWidth: 240 }}>
        Обновить
      </Button>
    </Stack>
  );
};

export default InternalServerError;
