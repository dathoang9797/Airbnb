import tw, { css } from 'twin.macro';

//Everything in below can't access direct in component so we set css in like the global
export const ResetCSS = css`
  html {
    --antd-wave-shadow-color: var(--color-primary);
    --scroll-bar: 0;
  }

  body {
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
    font-size: 14px;
    line-height: 1.43;
    color: #484848;
    background-color: #fff;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-weight: 600;
    overflow: visible !important;
    width: 100% !important;
    position: relative;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: rgb(0, 0, 0) !important;
    transition: background-color 600000s 0s, white 600000s 0s;
    /* ${tw`dark:-webkit-text-fill-color[#fff !important]`} */
  }

  button:focus {
    outline: 0px dotted;
    outline: 0px auto transparent;
  }
`;
