import * as yup from 'yup';
export const signUpUserSchema = yup.object().shape({
  name: yup.string().required('*Field is require!'),
  email: yup.string().required('*Field is require!').email('*Email is invalid!'),
  password: yup.string().required('*Field is require!'),
  phone: yup
    .string()
    .required()
    .matches(/^[0-9]{10,11}$/),
  address: yup.string().required('*Field is require!'),
  birthday: yup.string().required('*Field is require!'),
});
