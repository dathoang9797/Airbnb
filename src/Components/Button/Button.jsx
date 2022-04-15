import tw, { styled } from 'twin.macro';
import { Button } from 'antd';
import { Mixins } from '@Assets/Styles/Abstracts/Mixins';

const ShowProfile = styled.button`
  ${tw`inline-block  border-2 border-green-500 text-green-500 font-medium  leading-tight uppercase rounded  hover:bg-green-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out px-1.5 py-1.5 text-[10px] mr-1`};
  ${tw`lg:text-xs`};
`;

const Edit = styled.button`
  ${tw`inline-block  border-2 border-blue-600 text-blue-600 font-bold  leading-tight uppercase rounded hover:bg-blue-600  hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out px-1.5 py-1.5 text-[10px] mr-1`};
  ${tw`lg:text-xs`};
`;

const Delete = styled.button`
  ${tw`inline-block  border-2 border-red-600 text-red-600 font-bold leading-tight uppercase rounded hover:bg-red-600 hover:text-white  focus:outline-none focus:ring-0 transition duration-150 ease-in-out px-1.5 py-1.5 text-[10px]`};
  ${tw`lg:text-xs`};
`;

const Add = styled(Button)`
  ${tw`flex items-center justify-start border-none color[var(--color-grey-text-light)]`};

  &.ant-btn:hover,
  &.ant-btn:focus {
    ${tw`bg-transparent color[var(--color-primary)]`};
  }
`;

const Primary = styled(Button)`
  ${tw`block w-full max-w-xs mx-auto  text-white rounded-lg px-2 py-2 font-semibold transition-all duration-300 bg-origin-border background-size[400% !important] filter[drop-shadow(22.9008px 11.4504px 68.7023px rgba(255, 56, 92, 0.1))] `};
  ${Mixins.backgroundLinearGradient(90)};

  &.ant-btn:focus {
    ${tw`outline-none shadow-none border-color[transparent] background[transparent] text-white`};
  }

  &.ant-btn:hover {
    ${tw`text-white background-position[right center] box-shadow[0px 10px 15px 0px rgb(255 56 92 / 50%)]  border-color[transparent]`};
  }

  &.ant-btn[disabled],
  &.ant-btn[disabled]:hover,
  &.ant-btn[disabled]:focus,
  &.ant-btn[disabled]:active {
    ${tw`color[#00000040] border-color[#d9d9d9 ] background[#f5f5f5 !important] text-shadow[none] box-shadow[none]`};
  }
`;

export const ButtonCSS = {
  ShowProfile,
  Edit,
  Delete,
  Add,
  Primary,
};
