import tw, { css } from 'twin.macro';

//Everything in below can't access direct in component so we set css in like the global
export const ResetCSS = css`
 html {
    --antd-wave-shadow-color: var(--color-primary)
    --scroll-bar: 0;
}

  body {
    font-family:Circular, Roboto, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif !important;
    font-size: 14px;
    line-height: 1.43;
    color: #484848;
    background-color: #fff;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-weight: 600;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: rgb(0, 0, 0) !important;
    transition: background-color 600000s 0s, white 600000s 0s;
    /* ${tw`dark:-webkit-text-fill-color[#fff !important]`} */
  }

  .ant-dropdown-arrow {
    --tw-bg-opacity: 1;
    ${tw`dark:background-image[linear-gradient(135deg, transparent 40%, rgba(55, 65, 81, var(--tw-bg-opacity)) 40%)]`};
  }

  .ant-dropdown-arrow::before {
    --tw-bg-opacity: 1;
    ${tw`dark:background-image[linear-gradient(to left, rgba(55, 65, 81, var(--tw-bg-opacity)) 50%, rgba(55, 65, 81, var(--tw-bg-opacity)) 50%) no-repeat -10px -10px]`};
  }

  .ant-modal-close-x {
    ${tw` width[30px] height[30px] line-height[30px]`};
  }

  .ant-modal {
    ${tw`top[60px]`};
  }

  .ant-select-dropdown {
    ${tw` mt-1 w-full bg-white  border-1 max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`};
  }

  .ant-image-preview-img {
    ${tw`inline-block mx-auto`};
  }

  .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
    ${tw`border-color[var(--color-primary)]`}
  }

  .ant-picker-today-btn {
    ${tw`color[var(--color-primary)]`}
  }

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    ${tw` bg-white font-weight[500] color[rgba(0, 0, 0, 0.85)]`};
  }

  .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    ${tw`transition-all duration-300 text-white background-color[var(--color-primary)]`};
    .anticon {
      ${tw`transition-all duration-300 text-white`};
    }
  }

  .ant-dropdown-menu-item-selected,
  .ant-dropdown-menu-submenu-title-selected {
    ${tw`color[var(--color-primary)] bg-[var(--color-primary-blur)]`};
  }

  .ant-btn-link {
    ${tw`color[var(--color-primary)]`};
  }

  .ant-btn-primary,
  .ant-checkbox-checked .ant-checkbox-inner {
    ${tw`bg-[var(--color-primary)] border-[var(--color-primary)]`};
  }

  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    ${tw`border-[var(--color-primary)]`};
  }

  .ant-checkbox-checked::after {
    ${tw`border-[var(--color-primary)]`};
  }

  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    ${tw`color[var(--color-primary)] border-[var(--color-light)] bg-[var(--color-white)]`}
  }
  .ant-dropdown-menu  {
    ${tw`rounded-lg`}
    li.ant-dropdown-menu-item {
      ${tw`rounded-full mx-2 my-1 px-2 py-1 text-[var(--color-text-light)] text-sm hover:text-[#000] transition-all duration-300`};
    }
}
`;
