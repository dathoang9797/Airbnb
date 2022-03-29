import tw, { styled } from 'twin.macro';
import * as Variable from '@Assets/Styles/Variables';
const { colorPrimary } = Variable;

const SignUpContentRight = styled.div`
  ${tw`w-full md:w-1/2 py-10 px-5 md:px-10`}
`;

const SignUpContentLeft = styled.div`
  ${tw`hidden md:block w-1/2 bg-indigo-500 py-10 px-10`}
  background:${colorPrimary}
`;

const SignUpContent = styled.div`
  ${tw`md:flex w-full`}
`;

const SignUpForm = styled.div`
  max-width: 1000px;
  ${tw`bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden`}
`;

const SignUpContainer = styled.div`
  ${tw`min-w-full min-h-screen bg-gray-400  flex items-center justify-center px-1 py-1`}
`;

export const SignUpStyle = {
  SignUpContainer,
  SignUpForm,
  SignUpContent,
  SignUpContentLeft,
  SignUpContentRight,
};
