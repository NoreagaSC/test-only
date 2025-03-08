import { MEDIA } from 'shared';
import styled from 'styled-components';

const PaginationLayout = styled.div`
  ${MEDIA.desktop} {
    position: absolute;
    top: 697px;
    left: 78px;

    width: 120px;
    height: 88px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  ${MEDIA.mobile} {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
`;

const Counter = styled.span`
  ${MEDIA.desktop} {
    position: relative;
    height: 18px;

    color: #42567a;

    font-size: 14px;
    font-weight: 400;
  }

  ${MEDIA.mobile} {
    margin-bottom: 10px;
  }
`;

const NavigationButtonWrapper = styled.div`
  display: flex;

  ${MEDIA.desktop} {
    justify-content: space-between;
    width: 100%;
  }

  ${MEDIA.mobile} {
    gap: 10px;
  }
`;

const NavigationButton = styled.button`
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

  ${MEDIA.desktop} {
    width: 50px;
    height: 50px;
  }

  ${MEDIA.mobile} {
    width: 25px;
    height: 25px;
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
