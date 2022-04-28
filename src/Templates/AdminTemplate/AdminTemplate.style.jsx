import tw, { styled } from 'twin.macro';
import { ButtonScrollTopCSS } from '@/Components/ButtonScrollTop/ButtonScrollTop.styles';

const { LinkCSS } = ButtonScrollTopCSS;

const Container = styled.div`
  & ${LinkCSS} {
    ${tw`bottom-0 right-0 m-0 left-[180px] w-[2.5rem] h-[3rem] z-index[9999]`};
    ${tw`lg:left-[210px]`}
  }
`;

export const AdminTemplateCSS = {
  Container,
};
