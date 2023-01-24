import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { Button, Stack, Typography } from '@mui/material';

import { StyledErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundaryStyled';

import Icon500 from '@/icons/Icon500';
import Icon404 from '@/icons/Icon404';

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
            <Icon404 />
            <Typography variant='h6'>Страница не найдена 🙁 Вернитесь на главную</Typography>
            <img src='https://media.giphy.com/media/cjbfyJrICOaKIXBWyG/giphy.gif' alt='logo' />
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
        <Icon500 />
        <Typography variant='h6'>Что-то пошло не так 🙁 Обновите страницу</Typography>
        <Button fullWidth variant='contained' onClick={handleReloadPage} style={{ maxWidth: 240 }}>
          Обновить
        </Button>
      </Stack>
    );
  }, [error, handleReloadPage]);

  return <StyledErrorBoundary>{errorContent}</StyledErrorBoundary>;
};

export default ErrorBoundary;
