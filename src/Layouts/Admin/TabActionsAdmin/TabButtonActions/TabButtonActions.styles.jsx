import tw, { styled } from 'twin.macro';
import { ButtonCSS } from '@Components/Button/Button';

const { Primary } = ButtonCSS;

const Container = styled.div`
  ${tw`dark:bg-gray-700 flex`};
  ${tw`sm:text-sm sm:py-1 sm:px-10`};
  ${tw`md:text-base md:py-1 md:px-12`};
  ${tw`lg:text-lg lg:py-2 lg:px-14`};
  ${tw`xl:text-xl xl:py-3 xl:px-16`};

  ${Primary} {
    ${tw`m-0 w-auto py-0 text-sm`}
  }
`;

export const TabButtonActionsCSS = {
  Container,
};
