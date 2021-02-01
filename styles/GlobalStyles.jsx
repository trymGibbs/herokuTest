import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 0.75rem;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    p {
      font-size: 1rem;
    }
    h1 {
      font-size: 1.5rem;
    }
    a {
      font-size: 1.3rem;
    }
  }
  ${normalize}
`;
