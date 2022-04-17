import tw, { styled } from 'twin.macro';
import FormInput from '@Components/Form/FormInput';

const Container = styled.div`
  ${tw`flex justify-center flex-1  h-8`};
`;

const Content = styled.div`
  ${tw`relative w-full max-w-xl mr-6`};
`;

const Item = styled.div`
  ${tw`absolute inset-y-0 flex items-center pl-2 w-full `};

  &:focus-within svg {
    ${tw`transition-all duration-300 color[var(--color-primary) !important]`};
  }
  svg {
    ${tw`text-[#9e9e9e]`};
  }
`;

const Input = styled(FormInput)``;

export const SearchInputCSS = {
  Container,
  Content,
  Item,
  Input,
};
