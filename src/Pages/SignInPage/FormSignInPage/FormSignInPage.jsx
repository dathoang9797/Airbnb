import Form from '@Components/Form';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { userField } from '@Shared/Field/UserField';
import { signInUserSchema } from '@Shared/Schema/SignInSchema';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function FormSignInPage() {
  const dispatch = useDispatch();
  const { setUserInfoAsync } = quanLyNguoiDungThunk;
  const [typeInput, setTypeInput] = useState('password');
  const { signInField, renderUserField } = userField;
  const { FormContainer, FormControl, FormButton } = Form;

  const handleChangeTypeInput = () => {
    if (typeInput === 'password') {
      setTypeInput('text');
    } else {
      setTypeInput('password');
    }
  };

  const formik = useFormik({
    initialValues: signInField,
    validationSchema: signInUserSchema,
    onSubmit: (values) => {
      dispatch(setUserInfoAsync(values));
    },
  });

  const { handleSubmit, handleChange, errors, values } = formik;

  return (
    <FormContainer onFinish={handleSubmit}>
      {renderUserField(
        typeInput,
        signInField,
        errors,
        values,
        handleChange,
        handleChangeTypeInput,
        null,
        null,
        null
      )}
      <FormControl>
        <FormButton type='submit'>SIGNIN NOW</FormButton>
      </FormControl>
    </FormContainer>
  );
}

export default FormSignInPage;
