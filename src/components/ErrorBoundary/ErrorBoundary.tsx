import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { Button, Stack, Typography } from '@mui/material';

import {
  StyledErrorBoundary,
  StyledIcon404,
  StyledIcon500,
  StyledImage,
} from '@/components/ErrorBoundary/ErrorBoundaryStyled';

import Image404 from '@/images/Image404.gif';

import routes from '@/resources/routes';

const ErrorBoundary = () => {
  const navigate = useNavigate();

  const error = useRouteError();

  const handleReloadPage = useCallback(() => navigate(0), [navigate]);

  const errorContent = useMemo(() => {
    if (isRouteErrorResponse(error)) {
      if (error.status === 404)
        return (
          <Stack direction='column' spacing={6} alignItems='center'>
            <StyledIcon404 />
            <Typography textAlign='center' variant='h6'>
              Страница не найдена 🙁 Вернитесь на главную
            </Typography>
            <StyledImage src={Image404} alt='logo' />
            <Button
              fullWidth
              variant='contained'
              href={routes.index.path}
              style={{ maxWidth: 240 }}
            >
              Вернуться
            </Button>
          </Stack>
        );
    }

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
  }, [error, handleReloadPage]);

  return <StyledErrorBoundary>{errorContent}</StyledErrorBoundary>;
};

export default ErrorBoundary;
