import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, MouseEvent } from 'react';
import { ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

import {
  StyledHeader,
  StyledButton,
  StyledLogo,
  StyledIconButton,
} from '@/components/Header/HeaderStyled';

import ImageLogo from '@/images/ImageLogo.png';

import routes from '@/resources/routes';

import clearAllCache from '@/utils/clearAllCache';

import useAuthorization from '@/hooks/useAuthorization';

import ModalLogin from '@/modals/ModalLogin/ModalLogin';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    clearAllCache(dispatch);
  };

  const { isAuthorized, userInfo } = useAuthorization();

  const redirectToMainPage = () => navigate(routes.index.path);

  const onLogin = (e: MouseEvent<HTMLButtonElement>) => {
    if (isAuthorized) {
      setAnchorEl(e.currentTarget);
      return;
    }

    ModalLogin.show();
  };

  const buttonLabel = isAuthorized ? userInfo?.username : 'Войти';
  const buttonVariant = isAuthorized ? 'text' : 'outlined';
  const ButtonIcon = isAuthorized ? <PersonIcon /> : <LoginIcon />;

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

      <div>
        <StyledButton
          startIcon={ButtonIcon}
          variant={buttonVariant}
          onClick={onLogin}
          sx={isAuthorized ? { fontSize: 16 } : undefined}
        >
          {buttonLabel}
        </StyledButton>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText>Выйти</ListItemText>
          </MenuItem>
        </Menu>
      </div>

      <StyledIconButton color='primary' size='large' onClick={onLogin}>
        {ButtonIcon}
      </StyledIconButton>
    </StyledHeader>
  );
};

export default Header;
