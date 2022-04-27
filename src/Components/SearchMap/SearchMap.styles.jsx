import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`whitespace-nowrap z-10 absolute mt-6 left-1/2 -translate-x-1/2`};
`;

const Spinner = styled.span`
  div {
    ${tw`h-10 flex-row background-color[rgb(255 255 255) !important]  rounded-lg inline-flex items-center justify-center transition-all duration-300`};

    &:hover {
      ${tw`background-color[rgb(247, 247, 247) !important]`};
    }
  }
`;

const SpinnerButton = styled.button`
  button {
    ${tw`inline-flex items-center justify-center h-full w-full  bg-none border-2 border-transparent py-0 px-3.5  color[rgb(34, 34, 34) !important] rounded-lg outline-none`};

    div {
      ${tw`-webkit-box-pack[center] -webkit-box-align[center] flex items-center justify-center h-full  w-10`};
      span {
        & > :first-child {
          ${tw`background-color[#222] w-2 h-2 mx-0.5 rounded-[100%] inline-block animation-name[spinner-search] animation-duration[ 0.8s] animation-iteration-count[infinite] animation-timing-function[linear] animation-fill-mode[both] animation-delay[-0.3s] align-middle`};
        }

        & ~ :nth-child(2) {
          ${tw`background-color[#222] w-2 h-2 mx-0.5 rounded-[100%] inline-block animation-name[spinner-search] animation-duration[ 0.8s] animation-iteration-count[infinite] animation-timing-function[linear] animation-fill-mode[both] animation-delay[-0.15s] align-middle`};
        }

        & ~ :last-child {
          ${tw`background-color[#222] w-2 h-2 mx-0.5 rounded-[100%] inline-block animation-name[spinner-search] animation-duration[ 0.8s] animation-iteration-count[infinite] animation-timing-function[linear] animation-fill-mode[both]  align-middle`};
        }
      }
    }
  }
`;

const Move = styled(Spinner)`
  div {
    & > div {
      ${tw`whitespace-nowrap color[rgb(34,34,34) ] px-3 table-cell`};
    }
  }
`;

const MoveLabel = styled.label`
  ${tw`-webkit-box-align[center] flex items-center cursor-pointer`};
`;

const MoveSpan = styled.span`
  ${tw`relative inline-block cursor-pointer p-0`};

  & > input {
    ${tw`absolute opacity-0 `};
  }

  & > span {
    ${tw`inline-block border-1 h-6 w-6 text-center overflow-hidden align-top border-radius[4px] 
    text-white border-color[rgb(34, 34, 34)] background-color[rgb(34, 34, 34)]`};
    span {
      ${tw`--webkit-box-pack[center] --webkit-box-align[center] block items-center justify-center w-full h-full mt-0.5 margin-left[3px] text-white`}
      svg {
        ${tw`block fill[none] h-4 w-4 stroke[currentColor] stroke-width[4] overflow-visible`}
      }
    }
  }
`;

const MoveContentSearch = styled.div`
  ${tw`ml-2`}
  span {
    ${tw`text-sm m-0 overflow-wrap[break-word] font-semibold`}
  }
`;

export const SearchMapCSS = {
  Container,
  Spinner,
  Move,
  SpinnerButton,
  MoveContentSearch,
  MoveSpan,
  MoveLabel,
};
