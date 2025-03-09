import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, {
  type Dispatch,
  type FC,
  type ReactElement,
  type SetStateAction,
  useState,
} from 'react';
import { BASE_SPEED, padAndSplit, SLOWDOWN_FACTOR } from 'shared';

import { DateWrapper, NumberWrapper } from './dates.styles';
import { renderDigits } from './utils';

interface IProps {
  dateFrom: number;
  dateTo: number;
  prevFrom: number;
  prevTo: number;
  maxSteps: number;
  isAnimating: boolean;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
}

export const Dates: FC<IProps> = ({
  dateFrom,
  dateTo,
  prevFrom,
  prevTo,
  maxSteps,
  isAnimating,
  setIsAnimating,
}): ReactElement => {
  const [fromDigits, setFromDigits] = useState<string[]>(padAndSplit(dateFrom));

  const [toDigits, setToDigits] = useState<string[]>(padAndSplit(dateTo));

  useGSAP(() => {
    const startFrom = prevFrom;
    const startTo = prevTo;
    prevFrom = dateFrom;
    prevTo = dateTo;

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
      onStart: () => {
        if (!isAnimating) {
          setIsAnimating(true);
        }
      },
      onUpdate: () => {
        const currentVal = padAndSplit(Math.round(toObj.value));

        setToDigits(currentVal);
      },
      onComplete: () => {
        setIsAnimating(false);
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
