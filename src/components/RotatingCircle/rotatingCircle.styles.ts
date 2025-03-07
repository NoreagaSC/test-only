import styled from 'styled-components';

const StyledCircle = styled.div`
  position: absolute;
  width: 530px;
  height: 530px;
  inset: 0;
  margin: auto;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.2);
`;

const Dot = styled.div<{
  $x: number;
  $y: number;
  $isActive: boolean;
  $isHovered: boolean;
  $compensatingAngle: number;
}>`
  position: absolute;
  width: ${({ $isActive, $isHovered }) =>
    $isActive || $isHovered ? '56px' : '6px'};
  height: ${({ $isActive, $isHovered }) =>
    $isActive || $isHovered ? '56px' : '6px'};
  background-color: ${({ $isActive, $isHovered }) =>
    $isActive || $isHovered ? 'white' : '#42567A'};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ $isActive, $isHovered }) =>
    $isActive || $isHovered ? '16px' : '0px'};
  color: ${({ $isActive, $isHovered }) =>
    $isActive || $isHovered ? '#42567a' : 'white'};
  border: ${({ $isActive, $isHovered }) =>
    $isActive || $isHovered ? '1px solid rgba(66, 86, 122, 0.2)' : 'none'};
  transition: all 0.3s ease-in-out;

  left: ${({ $x, $isActive, $isHovered }) =>
    `${$x - ($isActive || $isHovered ? 28 : 3)}px`};
  top: ${({ $y, $isActive, $isHovered }) =>
    `${$y - ($isActive || $isHovered ? 28 : 3)}px`};
  cursor: pointer;
`;

const DotTextWrapper = styled.span<{
  $compensatingAngle: number;
}>`
  //
  transform: rotate(${({ $compensatingAngle }) => -$compensatingAngle}deg);
  transition: transform 0.3s ease-in-out;
`;

export { Dot, DotTextWrapper, StyledCircle };
