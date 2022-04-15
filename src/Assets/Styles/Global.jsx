import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';
import { Abstracts } from './Abstracts';
import { Base } from './Base';
import { Vendors } from './Vendors';
import 'antd/dist/antd.css';
import 'animate.css';
import '@/index.css';

const CustomStyles = createGlobalStyle`
  ${Base};
  ${Abstracts};
  ${Vendors};
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
