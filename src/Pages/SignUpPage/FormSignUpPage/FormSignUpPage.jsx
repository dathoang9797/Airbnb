import Form from '@Components/Form';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { signUpUserSchema } from '@Shared/Schema/SignUpSchema';
import { userField } from '@Shared/Field/UserField';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function FormSignUpPage() {
  const dispatch = useDispatch();
  const { signUpField } = userField;
  const { setRegisterUserInfoAsync } = quanLyNguoiDungThunk;
  const [typeInput, setTypeInput] = useState('password');

  const handleSubmitRegister = (values) => dispatch(setRegisterUserInfoAsync(values));

  const handleChangeTypeInput = () => {
    if (typeInput === 'password') {
      setTypeInput('text');
    } else {
      setTypeInput('password');
    }
  };

  const handleChangeDatePicker = async (date) => {
    if (!date) return;
    const birthDay = moment(date).format('MM/DD/YYYY');
    await setFieldValue('birthday', birthDay);
  };

  const handleChangeSwitch = async (checked) => {
    await setFieldValue('gender', checked);
  };

  const formik = useFormik({
    initialValues: signUpField,
    validationSchema: signUpUserSchema,
    onSubmit: handleSubmitRegister,
  });

  const { setFieldValue, handleSubmit, handleChange, errors, values } = formik;

  return (
    <Form.FormContainer onFinish={handleSubmit}>
      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.name : ''}
          >
            <Form.FormUserOutlined />
            <Form.FormInput
              type='text'
              placeholder=' '
              name='name'
              onChange={handleChange}
              childrenProps='Your Name'
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.email : ''}
          >
            <Form.FormMailOutlined />
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
              type='password'
              placeholder=' '
              name='password'
              onChange={handleChange}
              childrenProps='Your PassWord'
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.phone : ''}
          >
            <Form.FormPhoneOutlined />
            <Form.FormInput
              type='text'
              placeholder=' '
              name='phone'
              onChange={handleChange}
              childrenProps='Your Phone'
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.address : ''}
          >
            <Form.FormHomeOutlined />
            <Form.FormInput
              type='text'
              placeholder=' '
              name='address'
              onChange={handleChange}
              childrenProps='Your Address'
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.birthday : ''}
            label='Birthday'
          >
            <Form.FormDatePicker format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='Gender'>
            <Form.FormSwitch onChange={handleChangeSwitch} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormButton type='submit'>SIGNUP NOW</Form.FormButton>
      </Form.FormControl>
    </Form.FormContainer>
  );
}

export default FormSignUpPage;
