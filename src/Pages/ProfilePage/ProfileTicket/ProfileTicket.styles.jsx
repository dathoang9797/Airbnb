import tw, { styled } from 'twin.macro';

const Container = tw.div`text-gray-600  overflow-y-auto h-full container  py-5 mx-auto sm:max-w-full sm:m-0 md:max-w-full md:m-0  md:pr-2`;

const TicketContent = tw.div`-my-8 divide-y-2 divide-gray-100`;

const TicketItem = tw.div`py-8 flex flex-wrap md:flex-nowrap`;

const TicketContentLeft = tw.div`md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col w-full h-full`;

const TicketContentRight = tw.div`md:flex-grow ml-4 `;

const TicketImageRoom = tw.img` h-52 w-full object-cover rounded-xl  lg:h-48 `;

const TicketDateBook = tw.span`mt-2 text-gray-500 text-sm text-center color[var(--color-text-dark)]`;

const TicketNameRoom = tw.h1`text-2xl font-semibold text-gray-900  mb-2`;

const TicketService = styled.div`
  ${tw`flex items-center flex-wrap`}
  & > span {
    ${tw` flex items-center flex-wrap`};
    & > span{
        ${tw`mr-1`}
    }
    &:not(:last-child){
        ${tw`mr-2`};
    }
  }
`;

export const ProfileTicketCSS = {
  Container,
  TicketContent,
  TicketItem,
  TicketContentLeft,
  TicketContentRight,
  TicketImageRoom,
  TicketDateBook,
  TicketNameRoom,
  TicketService,
};
