import tw, { styled } from 'twin.macro';
import { BsShieldFillCheck } from 'react-icons/bs';

const Container = tw.main`w-full  py-32 px-5 m-auto flex  flex-wrap justify-center
md:px-7 md:flex-nowrap
lg:px-20 lg:flex-nowrap
`;

const ContentLeft = styled.div`
  ${tw`w-96 relative flex flex-col min-w-0 break-words bg-white bg-clip-border border[1px solid rgba(0,0,0,.125)] border-radius[0.25rem] py-4 px-6`}
  .ant-upload {
    ${tw`w-full`}
  }

  #spinner-dot {
    ${tw`mt-4 static left-0 translate-y-0 translate-x-0`}
  }
`;

const CardImage = styled.div`
  ${tw`rounded-full`};
  img,
  svg {
    ${tw`rounded-full h-20 w-20 m-auto `};
  }
`;

const CardBody = tw.div`mt-8 `;

const CardTitle = styled.h1`
  ${tw`text-black  text-center font-semibold`}
`;

const CardTitleUploadImage = styled(CardTitle)`
  ${tw`underline mt-4`}
`;

const CardIconShield = styled(BsShieldFillCheck)`
  ${tw`m-auto`};
`;

const CardText = tw.p`mt-2`;

const CardButton = tw.button`px-3 py-3 font-semibold   dark:border-gray-100 dark:text-gray-100 border-2  border-dark my-6 rounded-lg transition-all duration-300 hover:background-color[rgba(0,0,0,.5)] hover:text-white 
  md:px-6 md:py-3 w-full
`;

const CardConfirm = styled.div`
  ${tw`py-6  relative`}
  &:after {
    ${tw`absolute top-0  content border-t-1 border-solid border-gray-400 w-full`}
  }
  div {
    ${tw`flex items-center mt-4`}
  }
`;

const CardConfirmTitle = tw.h1`font-semibold`;

const CardConfirmText = tw.span`ml-2 `;

const CardTextUnderline = styled.button`
  ${tw`underline text-black mt-2 font-semibold`};
`;

const ContentRight = styled.div`
  ${tw`ml-20 w-full mt-10  md:text-left md:mt-0`};

  ${CardTitle} {
    ${tw`text-2xl text-left`};
  }

  ${CardTitle}:nth-child(4) {
    ${tw`my-6`};
  }

  ${CardTextUnderline}:last-child {
    ${tw`py-8 mt-0 relative`}
    &:after {
      ${tw`absolute left-0 top-0  content border-t-1 border-solid border-gray-600 w-full`}
    }
    &:before {
      ${tw`absolute left-0 bottom-0  content border-b-1 border-solid border-gray-600 w-full`}
    }
  }
`;

const ButtonClose = styled.span`
  ${tw`appearance[none] flex justify-center items-center border-radius[50%] border-none outline-none m-0 p-0 color[rgb(34, 34, 34)] cursor-pointer touch-action[manipulation] relative bg-transparent transition-all duration-300`}
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

export const ProfilePageCSS = {
  Container,
  ContentLeft,
  CardImage,
  CardBody,
  CardTitle,
  CardIconShield,
  CardText,
  CardButton,
  CardConfirm,
  CardConfirmTitle,
  CardConfirmText,
  ContentRight,
  CardTitleUploadImage,
  CardTextUnderline,
  ButtonClose,
};
