import tw, { css } from 'twin.macro';

export const DropDownCSS = css`
  .dropdown-province {
    height: 300px;
    width: 700px;
    overflow-y: auto;
    border-radius: 12px;
    ${tw`lg:w-[300px]`};

    .ant-dropdown-menu li.ant-dropdown-menu-item {
      ${tw`transition-colors duration-150`};
    }

    .ant-dropdown-menu-item:hover {
      background-color: var(--color-primary);
      color: #fff !important;
    }
  }

  .select-location,
  .select-province {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
