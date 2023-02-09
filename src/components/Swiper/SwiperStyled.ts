import { Swiper } from 'swiper/react';
import { styled } from '@mui/material';

export const StyledSwiperWrapper = styled('div')`
  width: 460px;
  height: 300px;
`;

export const StyledSwiper = styled(Swiper)`
  height: 100%;
  border-radius: 20px;
  border: 1px solid #eee;
`;

export const StyledImageWrapper = styled('div')`
  width: 100%;
  height: 100%;

  & > img {
    width: 100%;
  }
`;
