import { Dropdown, Layout, Menu } from 'antd';
import tw, { styled } from 'twin.macro';

const { Header } = Layout;

const Container = styled(Header)`
  ${tw` flex items-center justify-end z-10 py-4 bg-white shadow-md dark:bg-gray-800 p-0`}
`;

const Content = styled.div`
  ${tw`w-full flex items-center justify-end h-full px-8 mx-auto text-purple-600 dark:text-purple-300`}
`;

const Dropdowns = styled(Dropdown)``;

const Menus = styled(Menu)`
  ${tw`w-56  space-y-2  bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:bg-gray-800 p-0 text-[#9e9e9e]`}
`;

const MenuItem = styled(Menu.Item)`
  ${tw`text-[#9e9e9e]`}
  button {
    ${tw`flex  items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-200`}
  }
  &.ant-dropdown-menu-item:hover {
    ${tw`bg-transparent`}
  }
`;

export const HeaderCSS = {
  Container,
  Content,
  Menus,
  MenuItem,
  Dropdowns,
};
