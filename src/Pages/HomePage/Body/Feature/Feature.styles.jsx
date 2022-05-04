// .img-hover:hover {
//   box-shadow: 0px 2px 70px 0px rgb(253 71 102 / 5%);
//   transform: translateY(-5px);
// }
import tw, { styled } from 'twin.macro';

const Container = tw.section`m-4 md:m-8`;

const FeatureHeader = styled.div`
  ${tw`container mx-auto p-4 my-6 space-y-2 text-center`};
  h1 {
    ${tw`text-5xl font-bold`};
  }
`;

const GridContainer = tw.div`
container mx-auto grid justify-center gap-3 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4
`;

const GirdItem = styled.div`
  ${tw`flex flex-col items-start p-4 h-64 rounded-lg bg-no-repeat bg-cover bg-center `};
  background-image: ${(props) => `url(${props.image})`};
  transition: transform 0.5s cubic-bezier(0.05, 0.2, 0.1, 1),
    box-shadow 0.5s cubic-bezier(0.05, 0.2, 0.1, 1);
 
 

  &:hover {
    ${tw`box-shadow[0px 2px 70px 0px rgb(253 71 102 / 5%)] transform[translateY(-5px)]`};
  }
`;

const GirdTitle = tw.h1`my-3 text-3xl font-semibold text-white`;

const GridDesc = tw.p`text-sm text-white`;

export const FeatureCSS = { Container, FeatureHeader, GridContainer, GirdItem, GirdTitle,GridDesc };
