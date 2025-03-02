import styled from 'styled-components';

import { DOT_SIZE } from './constants';

const StyledCircle = styled.div`
  position: absolute;
  width: 536px;
  height: 530px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.2);
`;

export const Dot = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  width: ${DOT_SIZE}px;
  height: ${DOT_SIZE}px;
  background-color: #42567a;
  border-radius: 50%;
  left: ${({ $x }) => `${$x}px`};
  top: ${({ $y }) => `${$y}px`};
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;

  &:hover {
    width: 56px;
    height: 56px;
    font-size: 20px;
    opacity: 1;
    border: 1px solid rgba(66, 86, 122, 0.2);
    transition: all 0.3s ease-in-out;
    background-color: white;
  }

  &:hover span {
    opacity: 1;
    font-size: 20px;
  }

  span {
    opacity: 0;
    transition:
      opacity 0.3s ease-in-out,
      font-size 0.3s ease-in-out;
  }
`;

export { StyledCircle };
