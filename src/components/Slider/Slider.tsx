import 'swiper/css';
import 'swiper/css/navigation';

import React, {
  type FC,
  type ReactElement,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { Navigation } from 'swiper/modules';
import { type SwiperRef, SwiperSlide } from 'swiper/react';

import { slides } from '../../constants';
import { NextArrow, PrevArrow } from '../UI';
import {
  NextButton,
  PrevButton,
  SlideDate,
  SlideDescription,
  SlideItem,
  StyledSwiper,
} from './slider.styles';

export const Slider: FC = (): ReactElement => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  const swiperInstance = swiperRef.current?.swiper;

  const updateNavigationButtons = useCallback(() => {
    if (!swiperInstance) return;

    if (prevButtonRef.current && nextButtonRef.current) {
      prevButtonRef.current.style.opacity = swiperInstance.isBeginning
        ? '0'
        : '1';
      prevButtonRef.current.style.pointerEvents = swiperInstance.isBeginning
        ? 'none'
        : 'auto';

      nextButtonRef.current.style.opacity = swiperInstance.isEnd ? '0' : '1';
      nextButtonRef.current.style.pointerEvents = swiperInstance.isEnd
        ? 'none'
        : 'auto';
    }
  }, []);

  useEffect(() => {
    if (!swiperInstance) return;

    updateNavigationButtons();
    swiperInstance.on('slideChange', updateNavigationButtons);

    return () => {
      swiperInstance.off('slideChange', updateNavigationButtons);
    };
  }, [updateNavigationButtons]);

  return (
    <>
      <StyledSwiper
        ref={swiperRef}
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
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
      >
        {slides.map(({ date, description }, index) => (
          <SwiperSlide key={index}>
            <SlideItem>
              <SlideDate>{date}</SlideDate>
              <SlideDescription>{description}</SlideDescription>
            </SlideItem>
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <PrevButton ref={prevButtonRef}>
        <PrevArrow />
      </PrevButton>
      <NextButton ref={nextButtonRef}>
        <NextArrow />
      </NextButton>
    </>
  );
};
