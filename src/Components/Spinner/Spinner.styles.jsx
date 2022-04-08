import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`bg-black bg-opacity-30 fixed  h-screen w-screen flex justify-center items-center`}
  z-index: 2000;
`;

export const SpinnerCSS = {
  Container,
};
