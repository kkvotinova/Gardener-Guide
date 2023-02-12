import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { Button, Stack, Typography } from '@mui/material';

import { StyledIcon500 } from '@/components/ErrorBoundary/ErrorBoundaryStyled';

const InternalServerError = () => {
  const navigate = useNavigate();

  const handleReloadPage = useCallback(() => navigate(0), [navigate]);

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
