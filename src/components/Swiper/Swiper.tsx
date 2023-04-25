import { Pagination, Autoplay } from 'swiper';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import MuiImage from 'mui-image';

import { SwiperProps } from '@/components/Swiper/SwiperTypes';
import {
  StyledSwiper,
  StyledSwiperSlide,
  StyledImageWrapper,
  StyledSwiperWrapper,
} from '@/components/Swiper/SwiperStyled';

import 'swiper/css';
import 'swiper/css/pagination';

const Swiper = ({ altText, items }: SwiperProps) => {
  const { id } = useParams();

  const config = useMemo(() => {
    return items.map((src, i) => (
      <StyledSwiperSlide key={`${altText}-${i}`}>
        <StyledImageWrapper>
          <MuiImage src={src} alt={altText} showLoading duration={0} />
        </StyledImageWrapper>
      </StyledSwiperSlide>
    ));
  }, [altText, items]);

  return (
    <StyledSwiperWrapper>
      <StyledSwiper
        key={id}
        speed={750}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{ delay: 2000 }}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
      >
        {config}
      </StyledSwiper>
    </StyledSwiperWrapper>
  );
};

export default Swiper;
