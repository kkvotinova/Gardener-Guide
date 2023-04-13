import { Swiper } from 'swiper/react';
import { styled } from '@mui/material';

export const StyledSwiperWrapper = styled('div')`
  width: 100%;
  height: 72vw;

  @media (min-width: 460px) {
    width: 460px;
    height: 300px;
  }
`;

export const StyledSwiper = styled(Swiper)`
  height: 100%;
  border-radius: 20px;
  border: 1px solid #eee;

  & .swiper-pagination .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const StyledImageWrapper = styled('div')`
  width: 100%;
  height: 100%;

  & > img {
    width: 100%;
  }
`;
