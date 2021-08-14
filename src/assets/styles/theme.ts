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
  '2xl': 1440,
  '3xl': 1600
};

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#111111',
    primary: '#1c1d27',
    lightGrey: '#c4c4cf',
    mercuryGrey: '#e5e5e5',
    grey: '#333333',
    red: '#E50914',
    gold: '#FDB402'
  },

  mq: Object.keys(breakpoints).reduce((acc: MQ, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;

    return acc;
  }, {})
};
