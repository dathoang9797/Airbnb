import * as AntIcon from '@ant-design/icons';
import { colorPrimary } from '@Assets/Styles/Variables';
import tw, { css, styled } from 'twin.macro';

const {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  PhoneOutlined,
  HomeOutlined,
  MailOutlined,
  CheckOutlined,
} = AntIcon;

const FormIcon = css`
  &.anticon {
    ${tw`text-sm absolute left[4%] top-1/2 -translate-y-1/2`}
  }
`;

const FormCheckOutlined = styled(CheckOutlined)`
  ${FormIcon}
  &.anticon {
    left: auto;
    right: 0;
    right: 10%;
    width: 0;
    color: ${colorPrimary};
  }
`;

const FormHomeOutlined = styled(HomeOutlined)`
  ${FormIcon};
`;

const FormPhoneOutlined = styled(PhoneOutlined)`
  ${FormIcon}
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

const FormMailOutlined = styled(MailOutlined)`
  ${FormIcon}
`;

export const FormIconCSS = {
  FormIconEyeShowPass,
  FormEyeOutlined,
  FormEyeInvisibleOutlined,
  FormUserOutlined,
  FormLockOutlined,
  FormHomeOutlined,
  FormPhoneOutlined,
  FormMailOutlined,
  FormCheckOutlined,
};
