import * as yup from 'yup';

export const signInUserSchema = yup.object().shape({
  email: yup.string().required('*Field is require!').email('*Email is invalid!'),
  password: yup.string().required('*Field is require!'),
});
