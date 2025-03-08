import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderWrapper = styled.div<{ $isAnimating: boolean }>`
  position: absolute;
  height: 135px;

  top: 841px;
  left: 78px;
  right: 78px;

  opacity: ${({ $isAnimating }) => ($isAnimating ? 0 : 1)};
`;

const StyledSwiper = styled(Swiper)<{ $isAnimating: boolean }>`
  position: relative;

  height: 135px;
`;

const SlideItem = styled(SwiperSlide)`
  min-width: 320px;
  max-width: 400px;
  overflow: hidden;

  text-align: left;
`;

const SlideDate = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  color: #3877ee;
  font-size: 25px;
  font-weight: 400;

  line-height: 30px;

  height: 30px;
  margin-bottom: 5px;
`;

const SlideDescription = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  height: 90px;
  color: #42567a;

  letter-spacing: 1px;
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
  PrevButton,
  SlideDate,
  SlideDescription,
  SlideItem,
  SliderWrapper,
  StyledSwiper,
};
