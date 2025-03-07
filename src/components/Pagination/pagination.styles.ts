import styled from 'styled-components';

const PaginationLayout = styled.div`
  position: absolute;
  top: 697px;
  left: 78px;

  width: 120px;
  height: 88px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Counter = styled.span`
  position: relative;
  height: 18px;

  color: #42567a;

  font-size: 14px;
  font-weight: 400;
`;

const NavigationButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const NavigationButton = styled.button`
  //position: relative;
  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 1px solid black;
  z-index: 1;

  cursor: pointer;

  &:hover {
    background: none;
  }

  svg {
    pointer-events: none;
  }
`;

const PrevButton = styled(NavigationButton)``;

const NextButton = styled(NavigationButton)``;

export {
  Counter,
  NavigationButtonWrapper,
  NextButton,
  PaginationLayout,
  PrevButton,
};
