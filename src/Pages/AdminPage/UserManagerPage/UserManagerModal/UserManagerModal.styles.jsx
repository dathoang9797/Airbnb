import tw, { styled } from 'twin.macro';
import * as Variable from '@Assets/Styles/Variables';
import { Button } from 'antd';

const { colorPrimary, colorGreyTextLight } = Variable;

const UserContentButton = styled.div`
  ${tw`dark:bg-gray-700`};
  ${tw`sm:text-sm sm:py-1 sm:px-10`};
  ${tw`md:text-base md:py-1 md:px-12`};
  ${tw`lg:text-lg lg:py-2 lg:px-14`};
  ${tw`xl:text-xl xl:py-3 xl:px-16`};
`;

const UserButton = styled(Button)`
  color: ${colorGreyTextLight};
  ${tw`flex items-center justify-start `};
  border: none;
  &.ant-btn:hover,
  &.ant-btn:focus {
    background-color: transparent;
    color: ${colorPrimary};
  }
`;

const UserModalContainer = styled.div``;

export const UserStyle = {
  UserContentButton,
  UserButton,
  UserModalContainer,
};
