import tw, { styled } from 'twin.macro';

const SignInContentRightDesc = styled.div`
  ${tw`text-center mb-5`}
  h1 {
    ${tw`font-bold text-3xl text-gray-900`}
  }
`;

const SignInContentRight = styled.div`
  ${tw`w-full md:w-1/2 py-20 px-5 md:px-10`}
`;

const SignInContentLeft = styled.div`
  ${tw`hidden md:block w-1/2 bg-indigo-500 py-10 px-10`}
`;

const SignInContent = styled.div`
  ${tw`md:flex w-full`}
`;

const SignInForm = styled.div`
  max-width: 1000px;
  ${tw`bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden`}
`;

const SignInContainer = styled.div`
  ${tw`min-w-full min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5`}
`;

export const SignInStyle = {
  SignInContainer,
  SignInForm,
  SignInContent,
  SignInContentLeft,
  SignInContentRight,
  SignInContentRightDesc,
};
