type Breakpoints = {
  [key: string]: number;
};

type MQ = {
  [key: string]: string;
};

const breakpoints: Breakpoints = {
  xs: 400,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440
};

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#111111',
    primary: '#1c1d27',
    lightGrey: '#c4c4cf',
    grey: '#333333',
    red: '#E50914'
  },

  mq: Object.keys(breakpoints).reduce((acc: MQ, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;

    return acc;
  }, {})
};
