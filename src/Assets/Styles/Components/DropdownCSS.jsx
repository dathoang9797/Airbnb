import tw, { css } from 'twin.macro';

export const DropDownCSS = css`
  .dropdown-province {
    height: 300px;
    max-width: 700px;
    width: 100%;
    overflow-y: auto;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
