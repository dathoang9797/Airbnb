import tw, { styled } from 'twin.macro';

const Content = styled.div`
  --content-mini-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.32), 0px 2px 4px rgba(0, 0, 0, 0.18);
  ${tw`flex items-center cursor-pointer  relative h-7 scale-100 origin-[50% 50%] transition-transform duration-150 ease-in-out
  
  `};

  div {
    ${tw`bg-white rounded-[28px] text-[rgb(34, 34, 34)] h-[30px] relative scale-100 origin-[50% 50%]
    transition-transform duration-[250ms]  ease-in-out shadow-[rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px]
    `}
  }

  div div {
    ${tw`flex items-center justify-center h-full opacity-100 transition-opacity duration-[250ms]  whitespace-normal px-2 ease-in-out`};
  }

  div div span {
    ${tw`font-extrabold text-sm `}
  }
`;

const Button = styled.button`
  ${tw`border-none m-0 p-0 bg-transparent w-auto overflow-visible font[inherit] color[inherit]`}
`;

const Container = styled.div`
  ${tw`absolute bottom-0 z-0 pointer-events-auto translate[calc(-50% + 0px), calc(50% + 0px)] transition-transform duration-200 ease-in-out left-1/2 font-family['Circular Bold']`}
`;

export const CardPopupCSS = {
  Container,
  Content,
  Button,
};
