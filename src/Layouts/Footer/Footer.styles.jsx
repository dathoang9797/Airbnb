import tw, { styled } from 'twin.macro';
import * as Variables from '@Assets/Styles/Variables';

const { colorLinearGradient, colorPrimary } = Variables;

const FooterMenuItem = styled.section`
  ${tw`xl:flex-grow xl:flex-shrink-0 xl:flex-basis[0%] px-3 `}

  &:not(:last-child) {
    ${tw`xl:pb-0 xl:m-0 xl:border-0 pb-6 mb-6 border-b-1 md:pb-3`}
    border-color: rgb(221, 221, 221) !important;
  }
   
    div{
        ${tw`text-sm font-bold`}
        color: rgb(34, 34, 34) !important;
        h1 {
    ${tw`my-0 text-base`}
    }
    }
  
  ul {
    ${tw`xl:block xl:mx-0 md:flex md:flex-wrap md:mx-0 list-none m-0 p-0`}
    li {
      ${tw` transition-all duration-300 py-2 md:flex-basis[33.3%] `}
      a {
        padding: 5px 0;
        color: rgb(34, 34, 34)
        ${tw`text-sm transition-all duration-300 relative  text-decoration[none] font-family[inherit] font-style[inherit] font-variant[inherit] outline-none md:py-1.5  `}
        &:after {
          ${tw`transition-all duration-300 content absolute left-0 bottom-0 w-0 `}
          height: ${tw`sm:h-[1px] xl:h-0.5`}
          background: ${colorLinearGradient(114.58)};
        }
      }
      &:hover a {
        color: ${colorPrimary};
        &:after {
          width: 100%;
        }
      }
    }
  }
`;
const FooterCopyRight = styled.div`
  ${tw`flex justify-center items-center mt-0 xl:flex-row  md:mt-2  md:flex-col sm:flex-col`}
  span,a {
    ${tw`mr-4 transition-all  duration-300  md:pb-0.5`}
    color: rgb(34, 34, 34);
    &:hover {
      color: ${colorPrimary};
      &:after {
        width: 100%;
      }
    }
  }
`;
const FooterSocial = styled.div`
  ${tw`flex justify-center items-center `}
  span,a {
    ${tw`mr-4 transition-all  duration-300 `}
    color: rgb(34, 34, 34);
    &:hover {
      color: ${colorPrimary};
    }
    & span {
      ${tw`text-xl mr-0`}
    }
    &:hover span {
      color: ${colorPrimary};
    }
  }
`;

const FooterBottom = styled.div`
  ${tw`container m-auto py-6 border-t-1 border-gray-300 flex justify-between items-center xl:flex-grow px-3 xl:flex-row lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse `}
`;

const FooterTop = styled.div`
  -webkit-box-direction: normal !important;
  -webkit-box-orient: horizontal !important;
  ${tw`container
  xl:flex 
  xl:flex-row 
  xl:py-12 
  xl:m-auto
  md:flex 
  md:flex-direction[column] 
  md:py-10
  sm:mr-0 
  sm:max-w-full`}
`;

const FooterContainer = styled.footer`
  ${tw`xl:py-0 bg-gray-100 text-center md:text-left md:py-0 sm:text-left sm:py-8`}
`;

export const FooterStyle = {
  FooterContainer,
  FooterBottom,
  FooterTop,
  FooterMenuItem,
  FooterCopyRight,
  FooterSocial,
};
