import tw, { styled } from 'twin.macro';
import * as Variable from '@Assets/Styles/Variables';
import { Input } from 'antd';

const { colorPrimary } = Variable;

const FormSpan = styled.span`
  ${tw`inline-block text-sm relative top-0 -translate-y-1/2`}
`;

const FormLegend = styled.legend`
  ${tw` block  h-0 p-0 max-w-0 invisible transition-all duration-300`};
  width: auto !important;
  > ${FormSpan} 
`;

const FormFieldSet = styled.fieldset`
  transform: translateZ(1px);

  ${tw`text-left absolute bottom-0 right-0 top-0 left-0 m-0 pointer-events-none overflow-hidden border-gray-500 border-2 border-solid padding[0 30px] `}
  border-radius: 10px;
`;

const FormLabel = styled.label`
  ${tw`transition-all duration-300 absolute top-1/2 -translate-y-1/2 text-sm cursor-text m-0 left[40px]`}
  color: rgba(0, 0, 0, 0.5);
`;

const FormInput = styled(Input)`
  ${tw`w-full h-full pr-3 rounded-lg   relative z-10 transition duration-300 bg-transparent border-0 outline-none outline-offset[0]  pl-10 pt-2.5 pb-2.5
  `}

  &.ant-input:focus,
  &.ant-input-focused,
  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus {
    ${tw`border-transparent  bg-transparent shadow-none border-r-0 outline-none`}
  }
  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
    ${tw` border-transparent bg-transparent`}
  }

  &.ant-input:hover {
    ${tw` border-transparent bg-transparent`}
  }

  &:focus ~ fieldset,
  &:not(:placeholder-shown) ~ fieldset,
  &:-webkit-autofill ~ fieldset {
    ${tw` border-2 border-solid `};
    border-color: ${colorPrimary};
    ${FormLegend} {
      ${tw`max-w-full`}
    }
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label,
  &:-webkit-autofill ~ label {
    ${tw`absolute top-0 left-[36px] block transition-all duration-300  pointer-events-none text-xs -translate-y-1/2  `}
    color: ${colorPrimary};
  }
`;

export const FormInputCSS = {
  FormSpan,
  FormLegend,
  FormFieldSet,
  FormLabel,
  FormInput,
};
