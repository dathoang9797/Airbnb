import tw, { styled } from 'twin.macro';

const ContentRight = styled.div`
  ${tw`w-full  py-20 px-5  relative`};
  ${tw`md:w-1/2 md:px-10`};
  form {
    ${tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-max-w-114`};
  }
`;

const ContentLeft = styled.div`
  ${tw`hidden  w-1/2 bg-indigo-500 py-10 px-10`};
  ${tw`md:block`};
  background: var(--color-primary);
`;

const Content = styled.div`
  ${tw`w-full`}
  ${tw`md:flex`};
`;

const Form = styled.div`
  ${tw`bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-width[1000px]`}
`;

const Container = styled.div`
  ${tw`min-w-full min-h-screen bg-gray-400 flex items-center justify-center px-5 py-5`}
`;

export const SignInCSS = {
  Container,
  Form,
  Content,
  ContentLeft,
  ContentRight,
};
