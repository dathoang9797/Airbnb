import tw, { styled } from 'twin.macro';

const SignUpContentRightDesc = styled.div`
  ${tw`text-center mb-10`}
  h1 {
    ${tw`font-bold text-3xl text-gray-900`}
  }
`;

const SignUpContentRight = styled.div`
  ${tw`w-full md:w-1/2 py-10 px-5 md:px-10`}
`;

const SignUpContentLeft = styled.div`
  ${tw`hidden md:block w-1/2 bg-indigo-500 py-10 px-10`}
`;

const SignUpContent = styled.div`
  ${tw`md:flex w-full`}
`;

const SignUpForm = styled.div`
  max-width: 1000px;
  ${tw`bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden`}
`;

const SignUpContainer = styled.div`
  ${tw`min-w-full min-h-screen bg-gray-900 flex items-center justify-center px-1 py-1`}
`;

export const SignUpStyle = {
  SignUpContainer,
  SignUpForm,
  SignUpContent,
  SignUpContentLeft,
  SignUpContentRight,
  SignUpContentRightDesc,
};
