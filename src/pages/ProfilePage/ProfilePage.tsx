import { Outlet } from 'react-router-dom';
import { useMemo } from 'react';
import { Typography, Stack } from '@mui/material';

import { StyledLink, StyledSideBar, StyledWrapper } from '@/pages/ProfilePage/ProfilePageStyled';

import { profileRoutes } from '@/resources/constants';

const ProfilePage = () => {
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
      <Typography variant='h5' sx={{ mb: 6 }}>
        Мой огород
      </Typography>
      <Stack direction='row' spacing={8}>
        <StyledSideBar>{config}</StyledSideBar>
        <StyledWrapper>
          <Outlet />
        </StyledWrapper>
      </Stack>
    </>
  );
};

export default ProfilePage;
