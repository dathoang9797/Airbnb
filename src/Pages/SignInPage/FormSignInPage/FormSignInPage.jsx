import Form from '@Components/Form';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { signInUserSchema } from '@Shared/Schema/SignInSchema';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function FormSignInPage() {
  const dispatch = useDispatch();
  const { setUserInfoAsync } = quanLyNguoiDungThunk;
  const [typeInput, setTypeInput] = useState('password');

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
      dispatch(setUserInfoAsync(values));
    },
  });

  const { handleSubmit, handleChange, errors } = formik;

  return (
    <Form.FormContainer onFinish={handleSubmit}>
      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.email : ''}
          >
            <Form.FormUserOutlined />
            <Form.FormInput
              type='email'
              placeholder=' '
              name='email'
              onChange={handleChange}
              childrenProps='Your Email'
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>
      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.password : ''}
          >
            <Form.FormLockOutlined />
            {typeInput === 'password' ? (
              <Form.FormEyeOutlined onClick={handleChangeTypeInput} />
            ) : (
              <Form.FormEyeInvisibleOutlined onClick={handleChangeTypeInput} />
            )}

            <Form.FormInput
              type={typeInput}
              placeholder=' '
              name='password'
              onChange={handleChange}
              childrenProps='Your PassWord'
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>
      <Form.FormControl>
        <Form.FormButton type='submit'>SIGNIN NOW</Form.FormButton>
      </Form.FormControl>
    </Form.FormContainer>
  );
}

export default FormSignInPage;
