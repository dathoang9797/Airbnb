import tw, { styled } from 'twin.macro';
import FormInput from '@Components/Form/FormInput';
import * as Variable from '@Assets/Styles/Variables';

const { colorPrimary } = Variable;

const Container = styled.div`
  ${tw`flex justify-center flex-1 lg:mr-32 h-8 transition-all duration-300`}
`;

const Content = styled.div`
  ${tw`relative w-full max-w-xl mr-6  `}
`;

const Item = styled.div`
  ${tw`absolute inset-y-0 flex items-center pl-2 w-full `}

  &:focus-within svg {
    ${tw`transition-all duration-300`}
    color: ${colorPrimary} !important;
  }
  svg {
    color: #9e9e9e;
  }
`;

const Input = styled(FormInput)`
  color: #9e9e9e;
  padding-left: 1rem;
  & ~ label,
  & ~ fieldset span {
    color: #9e9e9e;
    ${tw`text-sm`}
  }
  &:focus ~ label,
  &:not(:placeholder-shown) ~ label,
  &:-webkit-autofill ~ label {
    ${tw`text-xs left-[50px]`}
  }
`;

export const SearchInputCSS = {
  Container,
  Content,
  Item,
  Input,
};
