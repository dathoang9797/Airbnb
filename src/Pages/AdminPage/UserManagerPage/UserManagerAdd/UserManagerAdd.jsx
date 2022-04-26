import Form from '@Components/Form';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { userField } from '@Shared/Field/UserField';
import { addUserSchema } from '@Shared/Schema/AddUserSchema';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function UserManagerFormAdd({ handleOk }) {
  const dispatch = useDispatch();
  const { taoNguoiDungAsync } = quanLyNguoiDungThunk;
  const [typeInput, setTypeInput] = useState('password');
  const { addUserField, renderUserField } = userField;

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
      {renderUserField(
        typeInput,
        addUserField,
        errors,
        values,
        handleChange,
        handleChangeTypeInput,
        handleChangeDatePicker,
        handleChangeSelect,
        handleChangeSwitch
      )}
      <Form.FormControl>
        <Form.FormButton type='submit'>SIGNIN NOW</Form.FormButton>
      </Form.FormControl>
    </Form.FormContainer>
  );
}

export default UserManagerFormAdd;
