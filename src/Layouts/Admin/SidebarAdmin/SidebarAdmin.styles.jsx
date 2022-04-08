import * as Variable from '@Assets/Styles/Variables';
import { Layout, Menu } from 'antd';
import tw, { styled } from 'twin.macro';

const { Sider } = Layout;
const { colorPrimary, colorGreyTextDark } = Variable;

const MenuItem = styled(Menu.Item)`
  ${tw`sm:text-xs sm:px-0`};
  ${tw`md:text-xs md:px-2`};
  ${tw`lg:text-sm lg:px-4`};
  ${tw`xl:text-sm xl:px-6`};

  span,
  svg {
    color: ${colorGreyTextDark};
    ${tw`vertical-align[baseline]`}
    ${tw`sm:text-xs`};
    ${tw`md:text-xs`};
    ${tw`lg:text-sm `};
    ${tw`xl:text-sm `};
  }
  span a {
    color: ${colorGreyTextDark};
    ${tw`vertical-align[baseline]`}
    ${tw`sm:text-xs`};
    ${tw`md:text-xs`};
    ${tw`lg:text-sm `};
    ${tw`xl:text-sm `};
  }

  .ant-menu:not(.ant-menu-horizontal) &.ant-menu-item-selected {
    ${tw`bg-white dark:bg-gray-800`}

    span svg {
      color: ${colorPrimary};
    }
    span a {
      color: ${colorPrimary};
    }
  }

  &.ant-menu-item:active,
  .ant-menu-submenu-title:active {
    ${tw`bg-gray-200`}
  }

  &.ant-menu-item::after {
    ${tw`inset-y-0  w-1 rounded-tr-lg rounded-br-lg`}
    left: 0;
    border-left: 3px solid;
    border-right: none;
    border-color: ${colorPrimary};
  }
  &.ant-menu-item-selected::after {
    transform: scaleY(1);
    opacity: 1;
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .ant-menu-light &.ant-menu-item:hover {
    span svg,
    svg {
      color: ${colorPrimary};
    }
    span a {
      color: ${colorPrimary};
    }
  }
`;

const Menus = styled(Menu)`
  ${tw`mt-6 bg-white dark:bg-gray-800`}

  &.ant-menu-inline,&.ant-menu-vertical {
    border-right: none;
  }
`;

const SiderBar = styled(Sider)`
  ${tw`z-20  w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 flex-none border-t-1 border-r-1 transition-all duration-300`}
  width: 100% !important;
  ${tw`lg:min-width[230px !important]`};

  &.ant-layout-sider-collapsed {
    color: ${colorPrimary};
    min-width: 60px !important;
    max-width: 60px !important;
    width: 100% !important;
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
    color: ${colorPrimary};
    ${tw`bg-white dark:bg-gray-800 border-t-1 border-r-1 dark:border-gray-600`}

    ${tw`lg:width[230px !important]`};
  }
`;

export const SiderBarCSS = {
  SiderBar,
  Menus,
  MenuItem,
};
