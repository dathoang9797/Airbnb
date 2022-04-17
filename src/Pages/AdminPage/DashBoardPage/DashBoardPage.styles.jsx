import tw, { styled } from 'twin.macro';

const Container = styled.section`
  ${tw`relative bg-gray-200  md:pt-14 pb-14 pt-12`}
`;

const Content = styled.div`
  ${tw`px-2 md:px-8 mx-auto w-full`}
`;

const Item = styled.div`
  ${tw`flex flex-wrap`}
`;

const CardStatsContent = styled.div`
  ${tw`w-full md:w-6/12  lg:w-6/12 xl:w-[20%] px-2`}
`;

export const DashBoardPageCSS = {
  Container,
  Content,
  Item,
  CardStatsContent,
};
