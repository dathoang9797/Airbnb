import * as yup from 'yup';

export const editUserSchema = yup.object().shape({
  _id: yup.string().required('*Field is require!'),
  name: yup.string().required('*Field is require!'),
  email: yup.string().required('*Field is require!').email('*Email is invalid!'),
  phone: yup
    .string()
    .required()
    .matches(/^[0-9]{10,11}$/),
  address: yup.string().required('*Field is require!'),
  birthday: yup.string().required('*Field is require!'),
  type: yup.string().required('*Field is require!'),
  gender: yup.boolean().required('*Field is require!'),
});
