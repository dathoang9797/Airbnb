import Form from '@Components/Form';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { roomField } from '@Shared/Field/RoomField';
import { addRoomSchema } from '@Shared/Schema/AddRoomSchema';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

function RoomManagerAdd({ handleOk }) {
  const dispatch = useDispatch();
  const { taoPhongChoThueAsync } = quanLyPhongChoThueThunk;
  const { addRoomField, renderRoomField } = roomField;
  const { FormContainer, FormControl, FormButton } = Form;

  const handleSubmitRegister = async (values, { resetForm }) => {
    const result = await dispatch(taoPhongChoThueAsync(values));
    if (result.error) return;
    resetForm({ values: addRoomField });
    handleOk();
  };

  const handleChangeSwitch = (field) => {
    return async (checked) => await setFieldValue(field, checked);
  };

  const handleInputNumber = (field) => {
    return async (value: number) => await setFieldValue(field, value);
  };

  const formik = useFormik({
    initialValues: addRoomField,
    validationSchema: addRoomSchema,
    onSubmit: handleSubmitRegister,
  });

  const { setFieldValue, handleSubmit, handleChange, errors, values } = formik;

  return (
    <FormContainer onFinish={handleSubmit} size='small'>
      {renderRoomField(
        addRoomField,
        errors,
        values,
        handleChange,
        handleInputNumber,
        handleChangeSwitch
      )}
      <FormControl>
        <FormButton type='submit'>ADD ROOM</FormButton>
      </FormControl>
    </FormContainer>
  );
}

export default RoomManagerAdd;
