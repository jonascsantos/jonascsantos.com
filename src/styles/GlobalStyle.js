import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';
import mixins from './mixins';
import TransitionStyles from './TransitionStyles';
const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`

  ${TransitionStyles};

`;

export default GlobalStyle;
