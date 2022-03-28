import { FormStyle } from '@Pages/SignUpPage/FormSignUpPage/FormSignUp.styles';
import { signUpUserSchema } from '@Shared/Schema/SignUpSchema';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';

const { setRegisterUserInfoAsync } = quanLyNguoiDungThunk;

function FormSignUpPage() {
  const dispatch = useDispatch();
  const [typeInput, setTypeInput] = React.useState('password');

  const handleSubmitRegister = useCallback(
    (values) => {
      dispatch(setRegisterUserInfoAsync(values));
    },
    [dispatch]
  );

  const handleChangeTypeInput = () => {
    if (typeInput === 'password') {
      setTypeInput('text');
    } else {
      setTypeInput('password');
    }
  };

  const handleChangeDatePicker = useCallback(async (date) => {
    if (!date) return;
    const birthDay = moment(date).format('DD/MM/YYYY');
    await setFieldValue('birthday', birthDay);
  }, []);

  const handleChangeSwitch = useCallback(async (checked) => {
    await setFieldValue('gender', checked);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      birthday: '',
      address: '',
      gender: false,
    },
    validationSchema: signUpUserSchema,
    onSubmit: handleSubmitRegister,
  });

  const { setFieldValue, handleSubmit, handleChange, errors, values } = formik;

  return (
    <FormStyle.FormContainer onFinish={handleSubmit}>
      <FormStyle.FormControl>
        <FormStyle.FormGroup>
          <FormStyle.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.name : ''}
          >
            <FormStyle.FormUserOutlined />
            <FormStyle.FormInput type='text' placeholder=' ' name='name' onChange={handleChange} />
            <FormStyle.FormLabel>Your Name</FormStyle.FormLabel>
            <FormStyle.FormFieldSet>
              <FormStyle.FormLegend>
                <FormStyle.FormSpan>Your Name</FormStyle.FormSpan>
              </FormStyle.FormLegend>
            </FormStyle.FormFieldSet>
          </FormStyle.FormItem>
        </FormStyle.FormGroup>
      </FormStyle.FormControl>
      <FormStyle.FormControl>
        <FormStyle.FormGroup>
          <FormStyle.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.email : ''}
          >
            <FormStyle.FormMailOutlined />
            <FormStyle.FormInput
              type='email'
              placeholder=' '
              name='email'
              onChange={handleChange}
            />
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
        <FormStyle.FormGroup>
          <FormStyle.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.phone : ''}
          >
            <FormStyle.FormPhoneOutlined />
            <FormStyle.FormInput type='text' placeholder=' ' name='phone' onChange={handleChange} />
            <FormStyle.FormLabel>Your Phone</FormStyle.FormLabel>
            <FormStyle.FormFieldSet>
              <FormStyle.FormLegend>
                <FormStyle.FormSpan>Your Phone</FormStyle.FormSpan>
              </FormStyle.FormLegend>
            </FormStyle.FormFieldSet>
          </FormStyle.FormItem>
        </FormStyle.FormGroup>
      </FormStyle.FormControl>
      <FormStyle.FormControl>
        <FormStyle.FormGroup>
          <FormStyle.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.address : ''}
          >
            <FormStyle.FormHomeOutlined />
            <FormStyle.FormInput
              type='text'
              placeholder=' '
              name='address'
              onChange={handleChange}
            />
            <FormStyle.FormLabel>Your Address</FormStyle.FormLabel>
            <FormStyle.FormFieldSet>
              <FormStyle.FormLegend>
                <FormStyle.FormSpan>Your Address</FormStyle.FormSpan>
              </FormStyle.FormLegend>
            </FormStyle.FormFieldSet>
          </FormStyle.FormItem>
        </FormStyle.FormGroup>
      </FormStyle.FormControl>
      <FormStyle.FormControl>
        <FormStyle.FormGroup>
          <FormStyle.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.birthday : ''}
            label='Birthday'
          >
            <FormStyle.FormDatePicker format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} />
          </FormStyle.FormItem>
        </FormStyle.FormGroup>
      </FormStyle.FormControl>
      <FormStyle.FormControl>
        <FormStyle.FormGroup>
          <FormStyle.FormItem label='Gender'>
            <FormStyle.FormSwitch onChange={handleChangeSwitch} />
          </FormStyle.FormItem>
        </FormStyle.FormGroup>
      </FormStyle.FormControl>
      <FormStyle.FormControl>
        <FormStyle.FormButton type='submit'>SIGNIN NOW</FormStyle.FormButton>
      </FormStyle.FormControl>
    </FormStyle.FormContainer>
  );
}

export default FormSignUpPage;
