import { Outlet } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import {
  StyledContentWrapper,
  StyledIconButton,
  StyledLink,
  StyledSideBar,
  StyledWrapper,
  StyledDrawer,
} from '@/pages/ProfilePage/ProfilePageStyled';

import { profileRoutes } from '@/resources/constants';

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const config = useMemo(() => {
    return profileRoutes.map(({ label, path }) => {
      return (
        <StyledLink key={label} to={path} end>
          <Typography variant='subtitle1'>{label}</Typography>
        </StyledLink>
      );
    });
  }, []);

  return (
    <>
      <Stack justifyContent='space-between' direction='row' sx={{ mb: 6 }} alignItems='center'>
        <Typography variant='h5'>Мой огород</Typography>

        <StyledIconButton size='large' onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </StyledIconButton>
      </Stack>

      <StyledContentWrapper>
        <StyledSideBar>{config}</StyledSideBar>

        <StyledWrapper>
          <Outlet />
        </StyledWrapper>
      </StyledContentWrapper>

      <StyledDrawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
        {config}
      </StyledDrawer>
    </>
  );
};

export default ProfilePage;
