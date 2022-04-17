import { Dropdown, Layout, Menu as MenuAnt } from 'antd';
import tw, { styled } from 'twin.macro';

const { Header } = Layout;

const Container = styled(Header)`
  ${tw` flex items-center justify-end z-10 py-4 px-8 bg-white shadow-md dark:bg-gray-800 `}
`;

const Content = styled.div`
  ${tw`w-full flex items-center justify-end h-full  mx-auto text-purple-600 dark:text-purple-300`}
`;

const Dropdowns = styled(Dropdown)`
  button {
    ${tw`align-middle rounded-full  focus:outline-none`}
  }

  img {
    ${tw`object-cover  rounded-full`}
  }
`;

const Menu = styled(MenuAnt)``;

const MenuItem = styled(MenuAnt.Item)`
  ${tw`rounded-full m-2 px-2 py-1 text-[#9e9e9e] hover:text-[#000] transition-all duration-300`}
`;

export const HeaderCSS = {
  Container,
  Content,
  Menu,
  MenuItem,
  Dropdowns,
};
