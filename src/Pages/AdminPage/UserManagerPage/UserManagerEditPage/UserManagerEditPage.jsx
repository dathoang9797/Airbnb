import Form from '@Components/Form';
import { quanLyNguoiDungSelector } from '@Redux/Selector/QuanLyNguoiDungSelector';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { editUserSchema } from '@Shared/Schema/EditUserSchema';
import { showWarning } from '@/Utils/Common';
import { useFormik } from 'formik';
import _ from 'lodash';
import moment from 'moment';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { UserManagerEditCSS } from './UserManagerEditPage.styles';
import { userField } from '@Shared/Field/UserField';

function UserManagerEdit() {
  const dispatch = useDispatch();
  const { selectChiTietNguoiDung } = quanLyNguoiDungSelector;
  const { capNhatNguoiDungAsync } = quanLyNguoiDungThunk;
  const client = process.env.REACT_APP_NGUOI_DUNG_CLIENT;
  const admin = process.env.REACT_APP_NGUOI_DUNG_ADMIN;
  const urlUserManager = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER;
  const chiTietNguoiDung = useSelector(selectChiTietNguoiDung, _.isEqual);
  const { editUserField } = userField;
  const isHasChiTietNguoiDung = _.isEmpty(chiTietNguoiDung);
  const initialValues = {
    ...editUserField,
    ..._.omit(chiTietNguoiDung, ['__v', 'tickets', 'password', 'deleteAt', 'avatar']),
  };
  const refChiTietNguoiDung = useRef(initialValues);

  const handleSubmitEditUser = (valuesUpDate) => {
    const noiDungCapNhat = _.omit(valuesUpDate, ['avatar']);
    const idNguoiDung = valuesUpDate._id;
    if (_.isEqual(valuesUpDate, refChiTietNguoiDung.current)) {
      showWarning('Không có thay đổi nào');
      return;
    }
    const params = { idNguoiDung, noiDungCapNhat };
    dispatch(capNhatNguoiDungAsync(params));
  };

  const handleChangeDatePicker = async (date) => {
    if (!date) return;
    const ngaySinh = moment(date).format('MM/DD/YYYY');
    await setFieldValue('birthday', ngaySinh);
  };

  const handleChangeSelect = async (value) => {
    await setFieldValue('type', value);
  };

  const handleChangeSwitch = async (checked) => {
    await setFieldValue('gender', checked);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: editUserSchema,
    onSubmit: handleSubmitEditUser,
  });

  const { setFieldValue, handleSubmit, handleChange, values, errors } = formik;

  return isHasChiTietNguoiDung ? (
    <Redirect to={urlUserManager} />
  ) : (
    <UserManagerEditCSS.Container>
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
                defaultValue={values.type}
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
          <Form.FormButton type='submit'>UPDATE NOW</Form.FormButton>
        </Form.FormControl>
      </Form.FormContainer>
    </UserManagerEditCSS.Container>
  );
}

export default UserManagerEdit;
