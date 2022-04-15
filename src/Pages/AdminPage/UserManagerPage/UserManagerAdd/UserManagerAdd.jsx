import Form from '@Components/Form';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { addUserSchema } from '@Shared/Schema/AddUserSchema';
import { userField } from '@Shared/Field/UserField';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function UserManagerFormAdd({ handleOk }) {
  const dispatch = useDispatch();
  const client = process.env.REACT_APP_NGUOI_DUNG_CLIENT;
  const admin = process.env.REACT_APP_NGUOI_DUNG_ADMIN;
  const { taoNguoiDungAsync } = quanLyNguoiDungThunk;
  const [typeInput, setTypeInput] = useState('password');
  const { addUserField } = userField;

  const handleSubmitRegister = async (values, { resetForm }) => {
    const result = await dispatch(taoNguoiDungAsync(values));
    if (result.error) return;
    resetForm({ values: addUserField });
    handleOk();
  };

  const formik = useFormik({
    initialValues: addUserField,
    validationSchema: addUserSchema,
    onSubmit: handleSubmitRegister,
  });

  const { setFieldValue, handleSubmit, handleChange, errors, values } = formik;

  const handleChangeTypeInput = () => {
    if (typeInput === 'password') {
      setTypeInput('text');
    } else {
      setTypeInput('password');
    }
  };

  const handleChangeDatePicker = async (date) => {
    if (!date) return;
    const ngaySinh = moment(date).format('MM/DD/YYYY');
    await setFieldValue('birthday', ngaySinh);
  };

  const handleChangeSwitch = async (checked) => {
    await setFieldValue('gender', checked);
  };

  const handleChangeSelect = async (value) => {
    await setFieldValue('type', value);
  };

  return (
    <Form.FormContainer onFinish={handleSubmit} size='small'>
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
              value={values.name}
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
              value={values.email}
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
              value={values.password}
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
              value={values.phone}
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
              value={values.address}
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
            <Form.FormDatePicker
              format={'DD/MM/YYYY'}
              onChange={handleChangeDatePicker}
              defaultValue={values.birthday !== '' ? moment(values.birthday) : null}
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='Type'>
            <Form.FormSelect
              bordered={false}
              onChange={handleChangeSelect}
              defaultValue={client}
              menuItemSelectedIcon={<Form.FormCheckOutlined />}
            >
              <Form.FormOption value={client}>{client}</Form.FormOption>
              <Form.FormOption value={admin}>{admin}</Form.FormOption>
            </Form.FormSelect>
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='Gender'>
            <Form.FormSwitch onChange={handleChangeSwitch} checked={values.gender} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormButton type='submit'>SIGNIN NOW</Form.FormButton>
      </Form.FormControl>
    </Form.FormContainer>
  );
}

export default UserManagerFormAdd;
