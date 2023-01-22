import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import { StyledHeader, StyledButton, StyledLogo } from '@/components/Header/HeaderStyled';

import logo from '@/images/logo.png';

import routes from '@/resources/routes';

import ModalLogin from '@/modals/ModalLogin/ModalLogin';

const Header = () => {
  const navigate = useNavigate();

  const isAuthorized = false;

  const redirectToMainPage = () => navigate(routes.index.path);

  const onLogin = () => {
    if (isAuthorized) return;

    ModalLogin.show();
  };

  const buttonLabel = isAuthorized ? 'Выйти' : 'Войти';

  return (
    <StyledHeader>
      <StyledLogo src={logo} alt='logo' onClick={redirectToMainPage} />
      <Typography
        variant='h2'
        color='primary.dark'
        sx={{ cursor: 'pointer' }}
        onClick={redirectToMainPage}
      >
        Помощник садовода
      </Typography>
      <StyledButton variant='outlined' onClick={onLogin}>
        {buttonLabel}
      </StyledButton>
    </StyledHeader>
  );
};

export default Header;
