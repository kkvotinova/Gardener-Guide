import { SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { useMemo } from 'react';
import MuiImage from 'mui-image';

import { SwiperProps } from '@/components/Swiper/SwiperTypes';
import {
  StyledSwiperWrapper,
  StyledSwiper,
  StyledImageWrapper,
} from '@/components/Swiper/SwiperStyled';
import 'swiper/css';
import 'swiper/css/pagination';

const Swiper = ({ altText, items }: SwiperProps) => {
  const config = useMemo(() => {
    return items.map((src, i) => (
      <SwiperSlide key={`${altText}-${i}`}>
        <StyledImageWrapper>
          <MuiImage src={src} alt={altText} showLoading duration={0} />
        </StyledImageWrapper>
      </SwiperSlide>
    ));
  }, [altText, items]);

  return (
    <StyledSwiperWrapper>
      <StyledSwiper
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
