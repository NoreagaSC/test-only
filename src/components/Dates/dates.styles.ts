import styled from 'styled-components';

const DateWrapper = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;

  height: 160px;
  width: 973px;

  font-size: 200px;
  font-weight: 700;
  line-height: 160px;

  display: flex;
  gap: 40px;

  z-index: -1;
`;

const NumberWrapper = styled.div`
  //overflow: hidden;
  //height: 200px;
  //display: flex;
  //align-items: center;

  display: flex;
  gap: 10px;
`;

const Digit = styled.div`
  position: relative;
  width: 100px;
  height: 160px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200px;
  font-weight: 700;
  line-height: 160px;
`;

const DateFrom = styled.span`
  color: #3877ee;
`;

const DateTo = styled.span`
  color: #ef5da8;
`;

export { DateFrom, DateTo, DateWrapper, Digit, NumberWrapper };
