import 'swiper/css';
import 'swiper/css/navigation';

import React, { type FC, type ReactElement } from 'react';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import { slides } from '../../constants';
import { SlideItem, StyledSwiper } from './slider.styles';

export const Slider: FC = (): ReactElement => {
  return (
    <StyledSwiper
      modules={[Navigation]}
      spaceBetween={80}
      slidesPerView='auto'
      navigation
    >
      {slides.map(({ description }, index) => (
        <SwiperSlide key={index}>
          <SlideItem>{description}</SlideItem>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};
