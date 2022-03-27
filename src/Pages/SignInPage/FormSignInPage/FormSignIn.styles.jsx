import tw, { styled, css } from 'twin.macro';
import * as AntIcon from '@ant-design/icons';
import { Form, Input } from 'antd';

const { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeOutlined } = AntIcon;

const FormIcon = css`
  &.anticon {
    ${tw`text-sm absolute left[4%] top-1/2 -translate-y-1/2`}
  }
`;

const FormIconEyeShowPass = css`
  &.anticon {
    ${tw`text-sm absolute left-auto top-1/2 cursor-pointer z-50  -translate-y-1/2 right[5%]`}
  }
`;

const FormEyeOutlined = styled(EyeOutlined)`
  ${FormIconEyeShowPass}
`;

const FormEyeInvisibleOutlined = styled(EyeInvisibleOutlined)`
  ${FormIconEyeShowPass}
`;

const FormUserOutlined = styled(UserOutlined)`
  ${FormIcon}
`;
const FormLockOutlined = styled(LockOutlined)`
  ${FormIcon}
`;

const FormSpan = styled.span`
  ${tw`inline-block text-sm relative top-0 -translate-y-1/2`}
`;

const FormLegend = styled.legend`
  ${tw` block  h-0 p-0 max-w-0 invisible transition-all duration-300`};
  width: auto !important;
  > ${FormSpan} 
`;

const FormFieldSet = styled.fieldset`
  ${tw`text-left absolute bottom-0 right-0 top-0 left-0 m-0 pointer-events-none overflow-hidden border-gray-500 border-2 border-solid `}
  border-radius: 10px;
  padding: 0 30px;
`;

const FormLabel = styled.label`
  ${tw`transition-all duration-300 absolute top-1/2 -translate-y-1/2 text-sm cursor-text m-0 left[40px]`}
  color: rgba(0, 0, 0, 0.5);
`;

const FormInput = styled(Input)`
  &.ant-input:focus,
  &.ant-input-focused,
  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus {
    ${tw`border-transparent shadow-none border-r-0 outline-none`}
  }
  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
    ${tw`bg-transparent border-transparent`}
  }

  ${tw`w-full h-full pr-3 rounded-lg   relative z-10 transition duration-300 bg-transparent border-0 outline-none outline-offset[0] pt-2.5 pb-2.5 pl-10
  `}
  color: rgba(0, 0, 0, 0.5);

  &:focus ~ fieldset,
  &:not(:placeholder-shown) ~ fieldset,
  &:-webkit-autofill ~ fieldset {
    ${tw`border-indigo-500 border-2 border-solid`};
    ${FormLegend} {
      ${tw`max-w-full`}
    }
    ${FormUserOutlined}, ${FormLockOutlined} {
      ${tw`text-indigo-500`};
    }
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label,
  &:-webkit-autofill ~ label {
    ${tw`absolute top-0 left-[8.8%] block transition-all duration-300 text-indigo-500 pointer-events-none text-xs  -translate-y-1/2`}
  }
`;

const FormButton = styled.button`
  ${tw`block w-full max-w-xs mx-auto  text-white rounded-lg px-2 py-2 font-semibold transition-all duration-300 bg-origin-border background-size[200% !important] filter[drop-shadow(22.9008px 11.4504px 68.7023px rgba(83, 125, 236, 0.1))] `}
  background: linear-gradient(
    90deg,
    rgb(61, 84, 160) 0,
    rgb(61, 84, 250) 51%,
    rgb(61, 84, 160) 100%
  );

  &:focus {
    ${tw`outline-none shadow-none`}
  }

  &:hover {
    ${tw`text-white background-position[right center] box-shadow[0px 10px 15px 0px rgb(123 110 246 / 50%)]`};
  }
`;

const FormItem = styled(Form.Item)`
  ${tw`mb-5`}
  & .ant-form-item-explain-error {
    ${tw`relative top[5px]`}
  }
`;
const FormGroup = styled.div`
  ${tw`w-full px-3 relative`}
`;

const FormControl = styled.div`
  ${tw`flex -mx-3 mb-1.5`}
`;

const FormContainer = styled(Form)``;

export const FormStyle = {
  FormUserOutlined,
  FormLockOutlined,
  FormGroup,
  FormItem,
  FormControl,
  FormContainer,
  FormButton,
  FormInput,
  FormLabel,
  FormLegend,
  FormFieldSet,
  FormSpan,
  FormEyeInvisibleOutlined,
  FormEyeOutlined,
};
