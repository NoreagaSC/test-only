import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { type FC, type ReactElement, useRef, useState } from 'react';
import { padAndSplit } from 'shared';

import { DateWrapper, NumberWrapper } from './dates.styles';
import { renderDigits } from './utils';

interface IProps {
  dateFrom: number;
  dateTo: number;
}

export const Dates: FC<IProps> = ({ dateFrom, dateTo }): ReactElement => {
  const [fromDigits, setFromDigits] = useState<string[]>(padAndSplit(dateFrom));

  const [toDigits, setToDigits] = useState<string[]>(padAndSplit(dateTo));

  /* Запоминаем предыдущие значения, чтобы изменять только нужные цифры */
  const currentFrom = useRef(dateFrom);
  const currentTo = useRef(dateTo);

  useGSAP(() => {
    const startFrom = currentFrom.current;
    const startTo = currentTo.current;
    currentFrom.current = dateFrom;
    currentTo.current = dateTo;

    /* Максимальное количество шагов для анимации. */
    const maxSteps = Math.max(
      Math.abs(dateFrom - startFrom),
      Math.abs(dateTo - startTo),
    );

    const baseSpeed = 0.05;
    const slowDownFactor = 30;
    const duration = baseSpeed * maxSteps * (1 + slowDownFactor / maxSteps);

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
