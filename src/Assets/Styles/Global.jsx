// src/styles/GlobalStyles.js
import { fontCircular } from '@Assets/Fonts/circular';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { colorPrimary } from './Variables';

const { circularBold, circularMedium, circularBook, circularLight } = fontCircular;

const CustomStyles = createGlobalStyle`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: rgb(0, 0, 0) !important;
    transition: background-color 600000s 0s, white  600000s 0s;
    /* ${tw`dark:-webkit-text-fill-color[#fff !important]`} */
};



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


.ant-dropdown-arrow {
  --tw-bg-opacity: 1;
    background:${tw`dark:background-image[linear-gradient(135deg, transparent 40%, rgba(55, 65, 81, var(--tw-bg-opacity)) 40%)]`}
  
}
.ant-dropdown-arrow::before{
  --tw-bg-opacity: 1;
  background:${tw`dark:background-image[linear-gradient(to left, rgba(55, 65, 81, var(--tw-bg-opacity)) 50%, rgba(55, 65, 81, var(--tw-bg-opacity)) 50%) no-repeat -10px -10px]`}
}

.ant-modal-close-x {
    width: 30px;
    height: 30px;
    line-height: 30px;
    
}

.ant-modal {
  top: 60px;
}

.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    background-color: #fff;
}
.ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    ${tw`transition-all duration-300`}
    color:#fff;
    background-color:${colorPrimary};
    & .anticon {
    ${tw`transition-all duration-300`}
      color:#fff;
    }
}

.ant-select-dropdown{
  ${tw` mt-1 w-full bg-white  border-1 max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}
}
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
