import tw, { styled } from 'twin.macro';

const Container = tw.div`
  h-full w-full m-auto
`;

const Content = tw.div`
py-12 border-top-color[rgb(221, 221, 221)] border-t-1 border-solid
`;

const ButtonClose = styled.span`
  ${tw`appearance[none] inline-block border-radius[50%] border-none outline-none m-0 p-0 color[rgb(34, 34, 34)] cursor-pointer touch-action[manipulation] relative bg-transparent transition-all duration-300`}
  &:before {
    ${tw`content block absolute top-1/2 left-1/2 transform[translate(-50%, -50%)] w-8 h-8 border-radius[50%] z-index[-1] transition-all duration-300`};
  }
  &:hover {
    ${tw`transition-all duration-300 color[rgb(0, 0, 0)]`}
  }
  &:hover:before {
    ${tw`transition-all duration-300 background-color[rgb(247, 247, 247)]`}
  }
`;

const ButtonOpen = styled.button`
  ${tw` mt-10 text-center rounded-lg border-1 border-solid py-[14px] px-6 transition-shadow duration-300 border-color[#222] color[#222] bg-white font-semibold`};
  &:hover {
    ${tw`underline cursor-pointer border-black bg-white`};
  }
`;

export const BookingDetailReviewCSS = {
  Container,
  Content,
  ButtonOpen,
  ButtonClose,
};
