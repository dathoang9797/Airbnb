import tw, { styled } from 'twin.macro';

const Container = tw.div`
  relative mb-4 rounded-lg bg-white font-family[Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif]
`;

const Content = tw.div`
  flex relative w-full

`;

const Item = styled.div`
  ${tw`w-full flex[1 1 0%] inset[0px 0px -1px] border-radius[8px 8px 0px 0px] border-color[#b0b0b0]  border-1 z-0  border-b-0`};
  &:focus-within {
    ${tw`border-color[#222] border-2`};
  }
`;

const Button = tw.button`
  relative flex w-full m-0 border-none border-transparent bg-transparent text-black rounded-none shadow-none cursor-pointer p-0 text-left`;

const CheckIn = styled.div`
  ${tw`relative p-0  flex[1 1 0%] overflow-hidden`};

  h1 {
    ${tw`absolute top-3 left-3 right-3 p-0 m-0 pointer-events-none font-size[10px] line-height[12px]
    color[rgb(34, 34, 34)] uppercase font-extrabold max-w-full overflow-hidden text-overflow[ellipsis] whitespace-nowrap
    `};
  }
  span {
    ${tw`min-height[56px] w-full  border-none outline-none m-0 padding[26px 12px 10px] bg-transparent color[inherit] font-family[inherit] text-sm font-weight[inherit] appearance-none overflow-hidden text-overflow[ellipsis] whitespace-nowrap block`}
  }
`;

const CheckOut = styled(CheckIn)`
  border-left: 1px solid rgb(176, 176, 176);
`;

const Title = styled.div`
  ${tw`-webkit-box-align[start] -webkit-box-pack[justify] flex justify-between items-start pb-4`}
`;

const Heading = styled.div`
  ${tw`order-1 pb-6 color[#222] font-semibold text-2xl`};
  h1 {
    ${tw`m-0 p-0`};
  }
  div {
    ${tw`color[#717171] font-normal text-sm`};
    p {
      ${tw` line-height[18px] overflow-hidden display[-webkit-box] -webkit-line-clamp[2]-webkit-box-orient[vertical] h-9`};
    }
  }
`;

export const BookingDetailPriceDateCSS = {
  Container,
  Content,
  Item,
  Button,
  CheckIn,
  CheckOut,
  Title,
  Heading,
};
