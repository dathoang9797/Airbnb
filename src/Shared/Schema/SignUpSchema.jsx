import * as yup from 'yup';
import { regularPassWord } from '@Utils/Text/RegularExpression';
import { messagePasswordIsValid } from '@Utils/Text/Message';

export const signUpUserSchema = yup.object().shape({
  name: yup.string().required('*Field is require!'),
  email: yup.string().required('*Field is require!').email('*Email is invalid!'),
  password: yup
    .string()
    .required('*Field is require!')
    .min(8)
    .matches(regularPassWord, messagePasswordIsValid),
  phone: yup
    .string()
    .required()
    .matches(/^[0-9]{10,11}$/),
  address: yup.string().required('*Field is require!'),
  birthday: yup.string().required('*Field is require!'),
});
