import { Pagination as PaginationAnt, Layout } from 'antd';
import tw, { styled } from 'twin.macro';

const { Sider } = Layout;

const Map = styled.div`
  ${tw`background-color[pink] w-[ calc(100% - 840px)] absolute right-0 top-0 bottom-0 transition-all duration-300`}
`;

const MainContent = styled.div`
  ${tw`height[100vh] flex items-center justify-center sticky top-0`}
`;

const Pagination = styled(PaginationAnt)`
  ${tw`flex justify-center items-center`}
`;

const List = styled.div``;

const Scarcity = styled.div`
  ${tw`flex items-center pt-[30px] pb-5`};
  img {
    ${tw` mr-[15px]`};
  }
  span span {
    ${tw` font-bold`}
  }
`;

const Filter = styled.div`
  ${tw`pt-[15px]`}

  button {
    ${tw`mr-1.5 py-2 px-4 outline-none bg-transparent m-0 border-1 border-color[#b0b0b0] border-radius[30px] transition-all duration-300`}
    &:hover {
      ${tw`border-color[var(--color-text-light)]`}
    }
  }
`;

const ContentSider = styled(Sider)`
  ${tw`min-h-[calc(100vh - 80px) !important] max-width[100% !important] width[100% !important] padding[60px 24px 0 !important] background-color[white !important] min-width[840px !important]
   flex[0 0 200px !important]
  `}

  @media (max-width: 860px) {
    ${tw` min-width[100% !important] `};
  }

  &.ant-layout-sider {
    ${tw`transition-all duration-300`}
  }

  &.ant-layout-sider-collapsed {
    ${tw`min-h-[0 !important] max-width[0 !important] width[0 !important] padding[0!important] background-color[white !important] min-width[0 !important]
   flex[0 0 0 !important]
    `}
    .ant-layout-sider-children,
    ${Filter} {
      ${tw`transition-all duration-300 opacity-0 invisible`}
    }
  }

  &.ant-layout-sider-collapsed ~ ${Map} {
    width: 100%;
  }

  .ant-layout-sider-children,
  ${Filter} {
    ${tw`transition-all duration-300 opacity-100 visible`}
  }

  h1 {
    ${tw`mt-[18px ] font-size[34px ]`}
  }
`;

const Container = styled.main`
  ${tw`relative pt-20 pb-6 font-family[Circular]`}

  .ant-pagination-item-active {
    font-weight: 500;
    background: #fff;
    border-color: var(--color-primary);
  }

  .ant-pagination-item:hover {
    border-color: var(--color-primary);
    transition: all 0.3s;
  }

  .ant-pagination-prev:hover .ant-pagination-item-link,
  .ant-pagination-next:hover .ant-pagination-item-link {
    color: var(--color-primary);
    border-color: var(--color-primary);
  }

  #scroll-top {
    right: 45px;
    bottom: 23px;

    @media (max-width: 1050px) {
      right: 0;
    }
  }
`;

const ButtonCollapse = styled.button`
  ${tw`items-center border[2px solid transparent] inline-flex px-[14px] color[rgb(34, 34, 34)] rounded-lg outline-none whitespace-nowrap absolute ml-6 mt-6 top[15%] left-0 z-10 transition-all duration-300 bg-white h-10 flex-row box-shadow[rgb(0 0 0 / 12%) 0px 6px 16px] justify-center`}

  &:focus {
    ${tw`outline-none`}
  }

  /* @media (max-width: 1100px) {
    ${tw`display[none !important]`};
  } */

  svg {
    ${tw`block fill[none] h-4 w-4 stroke-current stroke-width[4] overflow-visible`}
  }
`;

const ButtonShowRoom = styled(ButtonCollapse)`
  span {
    ${tw`font-semibold pl-1`}
  }
`;

export const RoomCSS = {
  Container,
  ContentSider,
  Filter,
  Scarcity,
  List,
  Pagination,
  Map,
  MainContent,
  ButtonCollapse,
  ButtonShowRoom,
};
