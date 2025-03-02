import styled from 'styled-components';

const StyledTitleLayout = styled.div`
  position: absolute;
  margin-top: 170px; // Отступ между блоком с надписью и верхней частью экрана
  height: 134px; // Высота блока с надписью
  width: 431px; // 353px надпись + 78px отступ между градиентной полосой и блоком с надписью

  display: flex;
  align-items: center;
  padding-left: 78px;

  font-size: 56px;
  font-weight: 700;
  color: #42567a;

  border-left: 5px solid transparent;
  border-image: linear-gradient(180deg, #3877ee, #ef5da8) 1;
`;

export { StyledTitleLayout };
