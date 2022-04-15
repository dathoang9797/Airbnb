import tw, { styled } from 'twin.macro';

const Container = styled.div`
  & #scroll-button-top a {
    ${tw`absolute bottom-0 right-0 m-0 left-[5%] w-[2.5rem] h-[2.5rem]`};
  }
`;

export const AdminTemplateCSS = {
  Container,
};
