import { Layout, Menu } from 'antd';
import tw, { styled } from 'twin.macro';

const { Sider } = Layout;

const Menus = styled(Menu)`
  ${tw`mt-6 bg-white dark:bg-gray-800`}

  &.ant-menu-inline,&.ant-menu-vertical {
    ${tw`border-r-0`}
  }

  &.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    ${tw`bg-white dark:bg-gray-800`}

    svg {
      color: var(--color-primary);
    }
    span a {
      color: var(--color-primary);
    }
  }

  & .ant-menu-item {
    ${tw`transition-all duration-300`};
    ${tw`sm:text-xs sm:px-0`};
    ${tw`md:text-xs md:px-2`};
    ${tw`lg:text-sm lg:px-4`};
    ${tw`xl:text-sm xl:px-6`};

    span,
    svg {
      color: var(--color-text-dark);
      ${tw`vertical-align[baseline]`}
      ${tw`sm:text-xs`};
      ${tw`md:text-xs`};
      ${tw`lg:text-sm `};
      ${tw`xl:text-sm `};
    }
    span a {
      color: var(--color-text-dark);
      ${tw`vertical-align[baseline]`}
      ${tw`sm:text-xs`};
      ${tw`md:text-xs`};
      ${tw`lg:text-sm `};
      ${tw`xl:text-sm `};
    }

    &:hover {
      span svg,
      svg {
        ${tw`transition-all duration-300`};
        color: var(--color-primary);
      }
      span a {
        ${tw`transition-all duration-300`};
        color: var(--color-primary);
      }
    }

    &:active,
    .ant-menu-submenu-title:active {
      ${tw`bg-gray-200`}
    }

    &::after {
      ${tw`inset-y-0  w-1 rounded-tr-lg rounded-br-lg left-0 border-l-[3px] border-solid border-r-0`}
      border-color: var(--color-primary);
    }

    &.ant-menu-item-selected::after {
      transform: scaleY(1);
      opacity: 1;
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
`;

const SiderBar = styled(Sider)`
  ${tw`z-20  overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 flex-none border-t-1 border-r-1  w-full`};
  ${tw`lg:min-width[230px !important]`};

  &.ant-layout-sider-collapsed {
    color: var(--color-primary);
    ${tw`min-w-[60px !important] max-w-[60px !important] w-[100% !important]`}

    div.ant-layout-sider-trigger {
      ${tw`bg-white dark:bg-gray-800 border-t-1 border-r-1 dark:border-gray-600 `}
      width: 60px !important;
    }
  }

  div.ant-layout-sider-children {
    ${tw`py-4 text-gray-500 dark:text-gray-400 `}
    div {
      ${tw` md:px-1.5 sm:px-2`}
    }

    div img {
      ${tw`m-auto `}
    }
  }
  div.ant-layout-sider-trigger {
    color: var(--color-primary);
    ${tw`bg-white dark:bg-gray-800 border-t-1 border-r-1 dark:border-gray-600`}

    ${tw`lg:width[230px !important]`};
  }
`;

export const SiderBarCSS = {
  SiderBar,
  Menus,
};
