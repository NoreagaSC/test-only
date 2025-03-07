import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { type FC, type ReactElement, useState } from 'react';
import { BASE_SPEED, padAndSplit, SLOWDOWN_FACTOR } from 'shared';

import { DateWrapper, NumberWrapper } from './dates.styles';
import { renderDigits } from './utils';

interface IProps {
  dateFrom: number;
  dateTo: number;
  prevFrom: number;
  prevTo: number;
  maxSteps: number;
}

export const Dates: FC<IProps> = ({
  dateFrom,
  dateTo,
  prevFrom,
  prevTo,
  maxSteps,
}): ReactElement => {
  const [fromDigits, setFromDigits] = useState<string[]>(padAndSplit(dateFrom));

  const [toDigits, setToDigits] = useState<string[]>(padAndSplit(dateTo));

  /* Запоминаем предыдущие значения, чтобы изменять только нужные цифры */
  // const currentFrom = useRef(dateFrom);
  // const currentTo = useRef(dateTo);

  useGSAP(() => {
    const startFrom = prevFrom;
    const startTo = prevTo;
    prevFrom = dateFrom;
    prevTo = dateTo;

    // /* Максимальное количество шагов для анимации. */
    // const maxSteps = Math.max(
    //   Math.abs(dateFrom - startFrom),
    //   Math.abs(dateTo - startTo),
    // );

    // const baseSpeed = 0.05;
    // const slowDownFactor = 30;
    const duration = BASE_SPEED * maxSteps * (1 + SLOWDOWN_FACTOR / maxSteps);

    let fromObj = { value: startFrom };
    let toObj = { value: startTo };

    // Анимация для первого числа
    gsap.to(fromObj, {
      value: dateFrom,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        const currentVal = padAndSplit(Math.round(fromObj.value));

        setFromDigits(currentVal);
      },
    });

    // Анимация для второго числа
    gsap.to(toObj, {
      value: dateTo,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        const currentVal = padAndSplit(Math.round(toObj.value));

        setToDigits(currentVal);
      },
    });
  }, [dateFrom, dateTo]);

  return (
    <DateWrapper>
      <NumberWrapper color='light_blue'>
        {renderDigits(fromDigits, 'from')}
      </NumberWrapper>
      <NumberWrapper color='pink'>{renderDigits(toDigits, 'to')}</NumberWrapper>
    </DateWrapper>
  );
};
