export const COLORS: Record<string, string> = {
  light_blue: '#5d5fef',
  pink: '#ef5da8',
};

export const DOTS_COUNT = 6;

/** Константы для анимации. */
export const BASE_SPEED = 0.05;
export const SLOWDOWN_FACTOR = 30;

const BREAKPOINTS = {
  mobile: 320,
  desktop: 1440,
};

export const MEDIA = {
  mobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.mobile + 1}px)`,
};
