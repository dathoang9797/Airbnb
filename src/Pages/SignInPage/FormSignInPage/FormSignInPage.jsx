import React from 'react';
import { FormStyle } from '@Pages/SignInPage/FormSignInPage/FormSignIn.styles';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { signInUserSchema } from '@Shared/Schema/SignInSchema';
const { setUserInfoAsync } = quanLyNguoiDungThunk;

function FormSignInPage() {
  const dispatch = useDispatch();
  const [typeInput, setTypeInput] = React.useState('password');

  const handleChangeTypeInput = () => {
    if (typeInput === 'password') {
      setTypeInput('text');
    } else {
      setTypeInput('password');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInUserSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(setUserInfoAsync(values));
    },
  });

  const { handleSubmit, handleChange, errors } = formik;

  return (
    <FormStyle.FormContainer onFinish={handleSubmit}>
      <FormStyle.FormControl>
        <FormStyle.FormGroup>
          <FormStyle.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.email : ''}
          >
            <FormStyle.FormUserOutlined />
            <FormStyle.FormInput type='text' placeholder=' ' name='email' onChange={handleChange} />
            <FormStyle.FormLabel>Your Email</FormStyle.FormLabel>
            <FormStyle.FormFieldSet>
              <FormStyle.FormLegend>
                <FormStyle.FormSpan>Your Email</FormStyle.FormSpan>
              </FormStyle.FormLegend>
            </FormStyle.FormFieldSet>
          </FormStyle.FormItem>
        </FormStyle.FormGroup>
      </FormStyle.FormControl>
      <FormStyle.FormControl>
        <FormStyle.FormGroup>
          <FormStyle.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.password : ''}
          >
            <FormStyle.FormLockOutlined />
            {typeInput === 'password' ? (
              <FormStyle.FormEyeOutlined onClick={handleChangeTypeInput} />
            ) : (
              <FormStyle.FormEyeInvisibleOutlined onClick={handleChangeTypeInput} />
            )}
            <FormStyle.FormInput
              type={typeInput}
              placeholder=' '
              name='password'
              onChange={handleChange}
            />
            <FormStyle.FormLabel>Your PassWord</FormStyle.FormLabel>
            <FormStyle.FormFieldSet>
              <FormStyle.FormLegend>
                <FormStyle.FormSpan>Your PassWord</FormStyle.FormSpan>
              </FormStyle.FormLegend>
            </FormStyle.FormFieldSet>
          </FormStyle.FormItem>
        </FormStyle.FormGroup>
      </FormStyle.FormControl>
      <FormStyle.FormControl>
        <FormStyle.FormButton type='submit'>SIGNIN NOW</FormStyle.FormButton>
      </FormStyle.FormControl>
    </FormStyle.FormContainer>
  );
}

export default FormSignInPage;
