import { progressPeriods } from './periods';

export const parseYearRange = (
  yearRange: string,
): { startDate: number; endDate: number } => {
  const [start, end] = yearRange.split(' - ');

  return {
    startDate: Number(start),
    endDate: Number(end),
  };
};

export const getDatePeriods = (): string[] =>
  progressPeriods.map((progressPeriod) => progressPeriod.period);

export const getEventsById = (id: number) =>
  progressPeriods.map((progressPeriod) => progressPeriod.events)[id];
