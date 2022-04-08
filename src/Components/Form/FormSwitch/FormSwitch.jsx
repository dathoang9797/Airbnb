import tw, { styled } from 'twin.macro';
import * as Variable from '@Assets/Styles/Variables';
import { Switch } from 'antd';

const { colorPrimary } = Variable;

const FormSwitch = styled(Switch)`
  &.ant-switch {
    ${tw`bg-gray-500 `}
  }

  &.ant-switch-checked {
    background-color: ${colorPrimary};
  }

  &.ant-switch-checked:focus {
    box-shadow: 0 0 0 2px ${colorPrimary};
  }
`;

export const FromSwitchCSS = {
  FormSwitch,
};
