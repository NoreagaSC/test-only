import 'swiper/css';
import 'swiper/css/navigation';

import React, { type FC, type ReactElement } from 'react';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import { slides } from '../../constants';
import {
  NextButton,
  PrevButton,
  SlideDate,
  SlideDescription,
  SlideItem,
  SliderContainer,
  StyledSwiper,
} from './slider.styles';

export const Slider: FC = (): ReactElement => {
  return (
    <StyledSwiper
      modules={[Navigation]}
      spaceBetween={80}
      // slidesPerView='auto'
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
    >
      <SliderContainer>
        {slides.map(({ date, description }, index) => (
          <SwiperSlide key={index}>
            <SlideItem>
              <SlideDate>{date}</SlideDate>
              <SlideDescription>{description}</SlideDescription>
            </SlideItem>
          </SwiperSlide>
        ))}
      </SliderContainer>
      <PrevButton className='prev'>prev</PrevButton>
      <NextButton className='next'>next</NextButton>
    </StyledSwiper>
  );
};
