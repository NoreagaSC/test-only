import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useScreenSize } from 'hooks';
import React, {
  type Dispatch,
  type FC,
  type ReactElement,
  type SetStateAction,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { getEventsById, getTitles } from 'shared';
import { Navigation, Pagination } from 'swiper/modules';
import { type SwiperRef, SwiperSlide } from 'swiper/react';

import { NextArrow, PrevArrow } from '../UI';
import {
  NextButton,
  PeriodTitle,
  PrevButton,
  SlideDate,
  SlideDescription,
  SlideItem,
  SliderWrapper,
  StyledSwiper,
} from './slider.styles';

interface IProps {
  activePeriod: number;
  isAnimating: boolean;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
}

export const Slider: FC<IProps> = ({
  activePeriod,
  isAnimating,
}): ReactElement => {
  const { isMobile } = useScreenSize();

  const titles = useMemo(() => getTitles(), [getTitles]);

  const events = getEventsById(activePeriod);

  const swiperRef = useRef<SwiperRef | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  const swiperInstance = swiperRef.current?.swiper;

  const updateNavigationButtons = () => {
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
  };

  useEffect(() => {
    if (!swiperInstance) return;

    updateNavigationButtons();
    swiperInstance.on('slideChange', updateNavigationButtons);

    return () => {
      swiperInstance.off('slideChange', updateNavigationButtons);
    };
  }, [updateNavigationButtons]);

  useEffect(() => {
    /** При смене активного периода скинуть до первого слайда. */
    if (swiperInstance) {
      swiperInstance.slideTo(0, 0);
    }
  }, [activePeriod]);

  return (
    <SliderWrapper $isAnimating={isAnimating}>
      {isMobile && (
        <PeriodTitle $isAnimating={isAnimating}>
          {titles[activePeriod]}
        </PeriodTitle>
      )}
      <StyledSwiper
        ref={swiperRef}
        $isAnimating={isAnimating}
        modules={[Navigation, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: false,
          },
          321: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        pagination={{ clickable: true, enabled: isMobile }}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
      >
        {events.map(({ date, description }, index) => (
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
    </SliderWrapper>
  );
};
