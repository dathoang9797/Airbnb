import { Form } from 'antd';
import tw, { css, styled } from 'twin.macro';
import * as Variable from '@Assets/Styles/Variables';

const { colorPrimary } = Variable;

const FormItem = styled(Form.Item)`
  ${tw`mb-5`}
  & .ant-form-item-explain-error {
    ${tw`relative top[5px]`}
  }
  &:focus-within svg {
    ${tw`transition-all duration-300`}
    color: ${colorPrimary} !important;
  }
`;
const FormGroup = styled.div`
  ${tw`w-full px-3 relative`}
`;

const FormControl = styled.div`
  ${tw`flex  mb-1.5 w-full`}
`;

const FormContainer = styled(Form)``;

export const FormCSS = {
  FormGroup,
  FormItem,
  FormControl,
  FormContainer,
};
