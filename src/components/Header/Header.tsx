import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';

import { StyledHeader, StyledButton, StyledLogo } from '@/components/Header/HeaderStyled';

import ImageLogo from '@/images/ImageLogo.png';

import routes from '@/resources/routes';

import clearAllCache from '@/utils/clearAllCache';

import useAuthorization from '@/hooks/useAuthorization';

import ModalLogin from '@/modals/ModalLogin/ModalLogin';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthorized } = useAuthorization();

  const redirectToMainPage = () => navigate(routes.index.path);

  const onLogin = () => {
    if (isAuthorized) {
      clearAllCache(dispatch);
      return;
    }

    ModalLogin.show();
  };

  const buttonLabel = isAuthorized ? 'Выйти' : 'Войти';
  const buttonVariant = isAuthorized ? 'text' : 'outlined';

  return (
    <StyledHeader>
      <StyledLogo src={ImageLogo} alt='logo' onClick={redirectToMainPage} />
      <Typography
        variant='h2'
        color='primary.dark'
        sx={{ cursor: 'pointer' }}
        onClick={redirectToMainPage}
      >
        Помощник садовода
      </Typography>
      <StyledButton variant={buttonVariant} onClick={onLogin}>
        {buttonLabel}
      </StyledButton>
    </StyledHeader>
  );
};

export default Header;
