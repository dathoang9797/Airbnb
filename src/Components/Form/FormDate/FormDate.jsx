import * as Variable from '@Assets/Styles/Variables';
import { DatePicker } from 'antd';
import tw, { styled } from 'twin.macro';

const { colorPrimary, colorGreyTextDark } = Variable;

const FormDatePicker = styled(DatePicker)`
  ${tw`w-[80%] `}
  &.ant-picker-status-error.ant-picker,
  &.ant-picker-status-error.ant-picker:not([disabled]):hover {
    ${tw`border-gray-500 border-2 border-solid rounded-lg bg-transparent`};
  }

  &.ant-picker-status-error.ant-picker-focused,
  &.ant-picker-status-error.ant-picker:focus {
    box-shadow: none;
    outline: 0;
    ${tw` border-2 border-solid`};
    border-color: ${colorPrimary};
  }

  & .ant-picker-input-placeholder > input {
    color: ${colorGreyTextDark};
  }

  & input::placeholder {
    color: ${colorGreyTextDark};
  }

  & .ant-picker-suffix,
  & .ant-picker-clear {
    color: ${colorGreyTextDark};
  }
`;

export const FormDateCSS = {
  FormDatePicker,
};
