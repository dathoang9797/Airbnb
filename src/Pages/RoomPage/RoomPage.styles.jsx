import { Pagination as PaginationAnt } from 'antd';
import tw, { styled } from 'twin.macro';

const Map = styled.div`
  ${tw`background-color[pink] w-[ calc(100% - 840px)] absolute right-0 top-0 bottom-0`}
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

const Content = styled.div`
  ${tw`min-h-[calc(100vh - 80px)] max-width[840px] w-full padding[60px 24px 0]`}
  h1 {
    ${tw`mt-[18px] font-size[34px]`}
  }
`;

const Container = styled.main`
  ${tw`relative pt-20 pb-6 font-family[Circular]`}
`;

export const RoomCSS = {
  Container,
  Content,
  Filter,
  Scarcity,
  List,
  Pagination,
  Map,
  MainContent,
};
