import { SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import { useMemo } from 'react';
import MuiImage from 'mui-image';

import { SliderProps } from '@/pages/MainPage/components/Slider/SliderTypes';
import {
  StyledSwiperWrapper,
  StyledSwiper,
  StyledLink,
} from '@/pages/MainPage/components/Slider/SliderStyled';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = ({ content }: SliderProps) => {
  const config = useMemo(() => {
    return content.map(({ _id, preview, title }) => (
      <SwiperSlide key={_id} style={{ position: 'relative' }}>
        <StyledLink to={_id}>{title}</StyledLink>
        <MuiImage src={preview} alt={title} duration={0} />
      </SwiperSlide>
    ));
  }, [content]);

  return (
    <StyledSwiperWrapper>
      <StyledSwiper
        speed={1000}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation={{ enabled: true }}
      >
        {config}
      </StyledSwiper>
    </StyledSwiperWrapper>
  );
};

export default Slider;
