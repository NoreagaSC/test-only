import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { COLORS } from '../../constants';

const StyledSwiper = styled(Swiper)`
  position: absolute;
  border: 1px dashed red;
  top: 841px;
  left: 78px;
  right: 78px;

  height: 135px;
    
    //overflow: visible;

  // .swiper-button-prev,
  // .swiper-button-next {
  //   color: ${COLORS.light_blue};
  //   transition: color 0.3s ease;
  //
  //   &:hover {
  //     color: ${COLORS.pink};
  //   }
  }
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

const SliderContainer = styled.div`
  border: 1px solid greenyellow;
  overflow: hidden;
`;

const PrevButton = styled.button`
  position: absolute;
  left: -20px;

  color: ${COLORS.light_blue};
  transition: color 0.3s ease;

  overflow: unset;

  &:hover {
    color: ${COLORS.pink};
  }
`;

const NextButton = styled.button`
  position: absolute;
  right: -20px;

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
  SliderContainer,
  StyledSwiper,
};
