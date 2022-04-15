import tw, { styled } from 'twin.macro';

const SignUpContentRight = styled.div`
  ${tw`w-full py-10 px-5 `};
  ${tw`md:w-1/2 md:px-10`};
`;

const SignUpContentLeft = styled.div`
  ${tw`hidden w-1/2 bg-indigo-500 py-10 px-10`};
  ${tw` md:block`};
  background: var(--color-primary);
`;

const SignUpContent = styled.div`
  ${tw`w-full`};
  ${tw`md:flex`};
`;

const SignUpForm = styled.div`
  max-width: 1000px;
  ${tw`bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden`};
`;

const SignUpContainer = styled.div`
  ${tw`min-w-full min-h-screen bg-gray-400  flex items-center justify-center px-1 pt-24 pb-14`};
`;

export const SignUpStyle = {
  SignUpContainer,
  SignUpForm,
  SignUpContent,
  SignUpContentLeft,
  SignUpContentRight,
};
