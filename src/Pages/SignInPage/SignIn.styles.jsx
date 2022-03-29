import tw, { styled } from 'twin.macro';
import * as Variable from '@Assets/Styles/Variables';

const { colorPrimary } = Variable;

const SignInContentRight = styled.div`
  ${tw`w-full md:w-1/2 py-20 px-5 md:px-10 relative`}
`;

const SignInContentLeft = styled.div`
  ${tw`hidden md:block w-1/2 bg-indigo-500 py-10 px-10`}
  background:${Variable.colorPrimary}
`;

const SignInContent = styled.div`
  ${tw`md:flex w-full`}
`;

const SignInForm = styled.div`
  max-width: 1000px;
  ${tw`bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden`}
`;

const SignInContainer = styled.div`
  ${tw`min-w-full min-h-screen bg-gray-400 flex items-center justify-center px-5 py-5`}
`;

export const SignInStyle = {
  SignInContainer,
  SignInForm,
  SignInContent,
  SignInContentLeft,
  SignInContentRight,
};
