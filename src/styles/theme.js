import { hex2rgba } from '../utils';

const ACCENT = 'black';
const DARK_BG = '#f6f6f6';
const BG = '#f6f6f6';

const theme = {
  colors: {
    darkNavy: DARK_BG,
    navy: BG,
    lightNavy: '#172a45',
    lightestNavy: '#303C55',
    slate: '#8892b0',
    lightSlate: '#a8b2d1',
    lightestSlate: '#ccd6f6',
    white: '#f6f6f6',
    gray: '#f1f1f1',
    green: ACCENT,
    black: 'black',
    transGreen: hex2rgba(ACCENT, 0.07),
    shadowNavy: hex2rgba(DARK_BG, 0.7),
    boxShadow: 'rgba(0, 0, 0, 0.1)',
  },

  fonts: {
    Raleway: 'Raleway',
  },

  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  navDelay: 1000,
  loaderDelay: 2000,
};

export default theme;
