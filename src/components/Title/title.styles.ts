import { MEDIA } from 'shared';
import styled from 'styled-components';

const StyledTitleLayout = styled.div`
  color: #42567a;
  font-weight: 700;

  ${MEDIA.desktop} {
    position: absolute;
    margin-top: 170px; // Отступ между блоком с надписью и верхней частью экрана
    height: 134px; // Высота блока с надписью
    width: 431px; // 353px надпись + 78px отступ между градиентной полосой и блоком с надписью

    display: flex;
    align-items: center;
    padding-left: 78px;

    font-size: 56px;

    border-left: 5px solid transparent;
    border-image: linear-gradient(180deg, #3877ee, #ef5da8) 1;
  }

  // ${MEDIA.mobile} {
  //   position: relative;
  //   top: 59px;
  //   left: 20px;
  //
  //   font-size: 20px;
  //   max-width: 123px;
  // }
`;

export { StyledTitleLayout };
