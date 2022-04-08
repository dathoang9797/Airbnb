import tw, { styled } from 'twin.macro';
import * as Variable from '@Assets/Styles/Variables';
import { Select } from 'antd';

const { Option } = Select;
const { colorGreyTextDark } = Variable;

const FormSelect = styled(Select)`
  &.ant-select {
    ${tw`border-gray-500 border-2 border-solid w-3/5`}
  }
  &.ant-select .ant-select-selection-item,
  &.ant-select .ant-select-arrow {
    color: ${colorGreyTextDark};
  }

  border-radius: 10px;
`;

const FormOption = styled(Option)``;

export const FormSelectCSS = { FormSelect, FormOption };
