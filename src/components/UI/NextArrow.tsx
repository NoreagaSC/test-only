import React, { type FC, type ReactElement } from 'react';

interface IProps {
  color?: string;
}

export const NextArrow: FC<IProps> = ({ color = '#42567A' }): ReactElement => {
  return (
    <svg
      width='8'
      height='12'
      viewBox='0 0 8 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1 1L6 6L1 11' stroke={color} stroke-width='2' />
    </svg>
  );
};
