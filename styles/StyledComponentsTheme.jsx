import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';

export const theme = {
  // These sizes are from ant design default theme
  // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
  breakpoints: {
    xs: '(min-width: 480px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)',
  },
  pallette: {
    white: '#ffffff',
    grey: '#f8f8f8',
    dark: 'black',

    primary: {
      base: '#048e7e',
      light: {
        shade1: '#34A497',
        shade2: '#64B9B0',
        shade3: '#EFF8F4',
      },
      dark: {
        shade1: '#048173',
        shade2: '#047569',
        shade3: '#046A5F',
      },
    },
    secondary: {
      base: '#8F2F04',
      light: {
        shade1: '#8F2F04',
        shade2: '#99421B',
        shade3: '#A25330',
        shade4: '#AA6343',
      },
      dark: {
        shade1: '#762704',
        shade2: '#6B2304',
        shade3: '#581D04',
        shade4: '#491804',
        shade5: '#3C1404',
      },
    },
    alerts: {
      headsUp: '#4BB1CF',
      danger: '#ED4F32',
      warn: '#EDE04D',
      wellDone: '#15CD72',
      misc: '#C700FF',
      mute: '#ECECEC',
    },
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
