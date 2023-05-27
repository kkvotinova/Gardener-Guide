import { Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

export const StyledSwiperWrapper = styled('div')`
  width: 880px;

  @media (max-width: 1114px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  border-radius: 12px;

  & .swiper-pagination .swiper-pagination-bullet {
    margin: 0 6px;
    height: 12px;
    width: 12px;
    background-color: ${({ theme }) => theme.palette.common.white};
  }
  & .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.palette.common.black};
  }
`;

export const StyledLink = styled(Link)`
  padding: 10px;
  width: 60%;

  z-index: 1;
  top: 38%;
  left: 10%;
  position: absolute;

  line-height: 1.2;
  font-size: 40px;
  border-radius: ${({ theme }) => theme.shape.borderRadiusSecond};
  background-color: rgba(255, 255, 255, 0.7);

  &:hover {
    color: ${({ theme }) => theme.palette.primary.dark};
  }

  @media (max-width: 700px) {
    font-size: 24px;
    top: 20%;
  }
`;
