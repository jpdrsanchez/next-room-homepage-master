import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${reset};

  :root {
    /* Typography */
    --main-font: 'Spartan', sans-serif;

    /* Colors */
    --black: #000;
    --white: #fff;
    --grey: #a0a0a0;
    --dark-grey: #444;

    /* Units */
    --gutter: .9375rem; // 15px
    --container-xl: 71.25rem; // 1140px
    --container-lg: 60rem; // 960px
    --container-md: 45rem; // 720px
    --container-sm: 33.75rem; // 540px
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    color: var(--black);
    font-family: var(--main-font);
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
    display: block;
  }
`;

export default GlobalStyles;
