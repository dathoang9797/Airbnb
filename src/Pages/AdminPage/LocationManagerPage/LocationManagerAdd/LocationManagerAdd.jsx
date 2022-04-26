import React from 'react';
import Form from '@Components/Form';
import { locationField } from '@Shared/Field/LocationField';
import { useDispatch } from 'react-redux';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import { useFormik } from 'formik';
import { addLocationSchema } from '@Shared/Schema/AddLocationSchema';

function LocationManagerAdd({ handleOk }) {
  const dispatch = useDispatch();
  const { taoviTriAsync } = quanLyViTriThunk;
  const { addLocationField, renderLocationField } = locationField;
  const { FormContainer, FormControl, FormButton } = Form;

  const handleSubmitRegister = async (values, { resetForm }) => {
    const result = await dispatch(taoviTriAsync(values));
    if (result.error) return;
    resetForm({ values: addLocationField });
    handleOk();
  };

  const formik = useFormik({
    initialValues: addLocationField,
    validationSchema: addLocationSchema,
    onSubmit: handleSubmitRegister,
  });

  const handleInputNumber = (field) => {
    return async (value: number) => await setFieldValue(field, value);
  };

  const { setFieldValue, handleSubmit, handleChange, errors, values } = formik;

  return (
    <FormContainer onFinish={handleSubmit} size='small'>
      {renderLocationField(addLocationField, errors, values, handleChange, handleInputNumber)}
      <FormControl>
        <FormButton type='submit'>ADD LOCATION</FormButton>
      </FormControl>
    </FormContainer>
  );
}

export default LocationManagerAdd;
