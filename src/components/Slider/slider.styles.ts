import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { COLORS } from '../../constants';

const StyledSwiper = styled(Swiper)`
  position: absolute;
  border: 1px dashed red;
  top: 841px;
  left: 78px;
  right: 78px;

  height: 135px; /* Оставляем фиксированную высоту */

  .swiper-button-prev,
  .swiper-button-next {
    color: ${COLORS.light_blue};
    transition: color 0.3s ease;

    &:hover {
      color: ${COLORS.pink};
    }
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 24px;
  }
`;

const SlideItem = styled(SwiperSlide)`
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  min-width: 320px;
  max-width: 400px;
`;

export { SlideItem, StyledSwiper };
