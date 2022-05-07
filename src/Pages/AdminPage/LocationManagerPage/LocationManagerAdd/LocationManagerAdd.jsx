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
  const { addLocationField, renderFormLocationField } = locationField;
  const { FormContainer, FormControl, FormButton } = Form;

  const handleSubmitAddLocation = async (values, { resetForm }) => {
    const result = await dispatch(taoviTriAsync(values));
    if (result.error) return;
    resetForm({ values: addLocationField });
    handleOk();
  };

  const handleChangeSelect = async (value) => {
    await setFieldValue('province', value);
  };

  const formik = useFormik({
    initialValues: addLocationField,
    validationSchema: addLocationSchema,
    onSubmit: handleSubmitAddLocation,
  });

  const handleInputNumber = (field) => {
    return async (value: number) => await setFieldValue(field, value);
  };

  const { setFieldValue, handleSubmit, handleChange, errors, values } = formik;

console.log({values});

  return (
    <FormContainer onFinish={handleSubmit} size='small'>
      {renderFormLocationField(
        addLocationField,
        errors,
        values,
        handleChange,
        handleInputNumber,
        handleChangeSelect
      )}
      <FormControl>
        <FormButton type='submit'>ADD LOCATION</FormButton>
      </FormControl>
    </FormContainer>
  );
}

export default LocationManagerAdd;
