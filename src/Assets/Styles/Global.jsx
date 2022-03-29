// src/styles/GlobalStyles.js
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';
import { fontCircular } from '@Assets/Fonts/circular';

const { circularBold, circularMedium, circularBook, circularLight } = fontCircular;

const CustomStyles = createGlobalStyle`
  body {
    font-family: 'Circular Book';
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: rgba(0, 0, 0, 0.5); !important;
}

@font-face {
  font-family: 'Circular Medium';
  src: url(${circularMedium});
}
@font-face {
  font-family: 'Circular Book';
  src: url(${circularBook});
}
@font-face {
  font-family: 'Circular Bold';
  src: url(${circularBold});
}
@font-face {
  font-family: 'Circular Light';
  src: url(${circularLight});
}

`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
