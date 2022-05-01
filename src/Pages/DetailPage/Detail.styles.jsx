import tw, { styled } from 'twin.macro';

const DetailContainer = styled.main`
  ${tw`relative m-auto  pt-24 color[var(--color-text-dark)] font-weight[400 ] font-size[16px ] line-height[20px ]`};
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;

  @media (min-width: 375px) {
    ${tw`px-6`};
  }

  @media (min-width: 744px) {
    ${tw`px-10`};
  }

  @media (min-width: 1128px) {
    ${tw`px-20`};
  }
`;

const ContentLeft = styled.div`
  ${tw`  w-full mx-auto`};
  ${tw`xl:relative xl:width[58.333333333333336%] xl:mx-0`};
`;

const ContentRight = styled.div`
  ${tw` w-full ml-[8.332%] mx-auto`};
  ${tw`xl:relative xl:width[33.333333333333336%] xl:mr-0`};
`;

const BookingContainer = styled.div`
  ${tw`display[--webkit-box] flex items-stretch justify-start flex-col w-full mx-auto -webkit-box-align[stretch] -webkit-box-pack[start]`}
  ${tw`xl:flex-wrap xl:flex-row`};
`;

export const DetailPageCSS = {
  DetailContainer,
  BookingContainer,
  ContentLeft,
  ContentRight,
};
