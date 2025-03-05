import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { COLORS } from '../../constants';

const StyledSwiper = styled(Swiper)`
  position: absolute;
  //border: 1px dashed red;
  top: 841px;
  left: 78px;
  right: 78px;

  height: 135px;
`;

const SlideItem = styled(SwiperSlide)`
  min-width: 320px;
  max-width: 400px;

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
  left: 20px;
  bottom: 160px;

  color: ${COLORS.light_blue};

  &:hover {
    color: ${COLORS.pink};
  }
`;

const NextButton = styled(NavigationButton)`
  left: 660px;
  bottom: 160px;

  color: ${COLORS.light_blue};
  transition: color 0.3s ease;

  &:hover {
    color: ${COLORS.pink};
  }
`;

export {
  NextButton,
  PrevButton,
  SlideDate,
  SlideDescription,
  SlideItem,
  StyledSwiper,
};
