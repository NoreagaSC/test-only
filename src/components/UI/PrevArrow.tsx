import React, { type FC, type ReactElement } from 'react';

interface IProps {
  color?: string;
}

export const PrevArrow: FC<IProps> = ({ color = '#42567A' }): ReactElement => {
  return (
    <svg
      width='8'
      height='12'
      viewBox='0 0 8 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M7 1L2 6L7 11' stroke={color} stroke-width='2' />
    </svg>
  );
};
