import { Button, Stack, Typography } from '@mui/material';

import { StyledIcon404, StyledImage } from '@/components/ErrorBoundary/ErrorBoundaryStyled';

import Image404 from '@/images/Image404.gif';

import routes from '@/resources/routes';

type NotFoundProp = { hideIcon?: boolean };

const NotFound = ({ hideIcon = false }: NotFoundProp) => {
  return (
    <Stack direction='column' spacing={6} alignItems='center'>
      {!hideIcon && <StyledIcon404 />}
      <Typography textAlign='center' variant='h6'>
        Похоже вы заблудились 🙁 Вернитесь на главную
      </Typography>
      <StyledImage src={Image404} alt='logo' />
      <Button fullWidth variant='contained' href={routes.index.path} style={{ maxWidth: 240 }}>
        Вернуться
      </Button>
    </Stack>
  );
};

export default NotFound;
