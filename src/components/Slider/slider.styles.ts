import { MEDIA } from 'shared';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderWrapper = styled.div<{ $isAnimating: boolean }>`
  ${MEDIA.desktop} {
    position: absolute;
    height: 135px;

    top: 841px;
    left: 78px;
    right: 78px;

    opacity: ${({ $isAnimating }) => ($isAnimating ? 0 : 1)};
  }

  ${MEDIA.mobile} {
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 20px;

    opacity: ${({ $isAnimating }) => ($isAnimating ? 0 : 1)};
  }
`;

const PeriodTitle = styled.div<{ $isAnimating: boolean }>`
  ${MEDIA.desktop} {
    display: none;
  }

  ${MEDIA.mobile} {
    font-family: 'Bebas Neue', sans-serif;
    color: #42567a;
    font-weight: 700;
    font-size: 16px;

    padding-bottom: 20px;
    border-bottom: 1px solid #c7cdd9;
    
    opacity: ${({ $isAnimating }) => ($isAnimating ? 0 : 1)};
`;

const StyledSwiper = styled(Swiper)<{ $isAnimating: boolean }>`
  position: relative;
  margin-top: 20px;

  ${MEDIA.mobile} {
    width: 100%;
    height: 170px;

    .swiper-pagination {
      left: -20px; // Компенсация отступа слева для всего блока с пагинацией.
      opacity: ${({ $isAnimating }) => ($isAnimating ? 0 : 1)};
    }

    .swiper-slide {
      width: unset; // // Ширина слайдов управляется только внутренним контейнером SlideItem
    }
  }
`;

const SlideItem = styled(SwiperSlide)`
  overflow: hidden;

  text-align: left;
  ${MEDIA.desktop} {
    min-width: 320px;
    max-width: 400px;
  }
  ${MEDIA.mobile} {
    max-width: 200px;
  }
`;

const SlideDate = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  color: #3877ee;
  font-weight: 400;

  ${MEDIA.desktop} {
    font-size: 25px;

    line-height: 30px;

    height: 30px;
    margin-bottom: 5px;
  }

  ${MEDIA.mobile} {
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 10px;
  }
`;

const SlideDescription = styled.div`
  font-weight: 400;
  color: #42567a;

  ${MEDIA.desktop} {
    font-size: 20px;
    line-height: 30px;
    height: 90px;

    letter-spacing: 1px;
  }

  ${MEDIA.mobile} {
    font-size: 14px;
    height: 80px;
  }
`;

const NavigationButton = styled.button`
  width: 40px;
  height: 40px;

  position: relative;
  z-index: 1;
  bottom: 90px;

  border-radius: 50%;

  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border: none;
  background: none;

  transition: color 0.3s ease;

  cursor: pointer;

  svg {
    pointer-events: none;
  }

  ${MEDIA.mobile} {
    display: none;
  }
`;

const PrevButton = styled(NavigationButton)`
  right: 60px;
  opacity: 0;
`;

const NextButton = styled(NavigationButton)`
  left: 1260px;
`;

export {
  NextButton,
  PeriodTitle,
  PrevButton,
  SlideDate,
  SlideDescription,
  SlideItem,
  SliderWrapper,
  StyledSwiper,
};
