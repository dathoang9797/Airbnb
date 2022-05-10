import tw, { styled } from 'twin.macro';
import { ButtonScrollTopCSS } from '@/Components/ButtonScrollTop/ButtonScrollTop.styles';

const { LinkCSS } = ButtonScrollTopCSS;

const Container = styled.div`
  & ${LinkCSS} {
    ${tw`bottom-12  left-0 m-0 translate-x-0  z-index[9999]`};
    ${tw`lg:left-2.5`};
  }

  
`;

export const AdminTemplateCSS = {
  Container,
};
