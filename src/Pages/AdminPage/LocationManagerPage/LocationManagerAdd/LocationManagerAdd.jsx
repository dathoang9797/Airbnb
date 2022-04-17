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
  const { addLocationField } = locationField;

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
    <Form.FormContainer onFinish={handleSubmit} size='small'>
      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.name : ''}
          >
            <Form.FormInput
              type='text'
              placeholder=' '
              name='name'
              onChange={handleChange}
              childrenProps='Your Name '
              value={values.name}
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>
      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.province : ''}
          >
            <Form.FormInput
              type='text'
              placeholder=' '
              name='province'
              onChange={handleChange}
              childrenProps='Your Province '
              value={values.province}
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>{' '}
      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.country : ''}
          >
            <Form.FormInput
              type='text'
              placeholder=' '
              name='country'
              onChange={handleChange}
              childrenProps='Your Country '
              value={values.country}
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>
      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='Valueate'>
            <Form.InputNumber
              onChange={handleInputNumber('valueate')}
              value={values.valueate ? values.valueate : null}
              defaultValue={1}
              min={1}
              max={10}
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>
      <Form.FormControl>
        <Form.FormButton type='submit'>ADD LOCATION</Form.FormButton>
      </Form.FormControl>
    </Form.FormContainer>
  );
}

export default LocationManagerAdd;
