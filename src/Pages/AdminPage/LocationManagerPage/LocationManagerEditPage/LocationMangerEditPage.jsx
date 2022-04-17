import React, { useRef } from 'react';
import { editLocationSchema } from '@/Shared/Schema/EditLocationSchema';
import Form from '@Components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { locationField } from '@Shared/Field/LocationField';
import { useFormik } from 'formik';
import _ from 'lodash';
import { Redirect } from 'react-router';
import { showWarning } from '@/Utils/Common';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import { LocationManagerEditCSS } from './LocationManagerEditPage.styles';
import { messageApp } from '@Utils/Common';

function LocationMangerEditPage() {
  const dispatch = useDispatch();
  const { capNhatViTriAsync } = quanLyViTriThunk;
  const { selectChiTietViTri } = quanLyViTriSelector;
  const urlLocationsManager = process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER;
  const chiTietViTri = useSelector(selectChiTietViTri, _.isEqual);
  const isHasChiTietViTri = _.isEmpty(chiTietViTri);
  const { editLocationField } = locationField;
  const initialValues = {
    ...editLocationField,
    ..._.omit(chiTietViTri, ['__v', 'deleteAt', 'image']),
  };
  const refChiTietNguoiDung = useRef(initialValues);
  const { messageNoDifferent } = messageApp;

  const handleSubmitEditLocation = (valuesUpDate) => {
    const noiDungCapNhat = _.omit(valuesUpDate, ['_id']);
    const idLocation = valuesUpDate._id;
    if (_.isEqual(valuesUpDate, refChiTietNguoiDung.current)) {
      showWarning(messageNoDifferent);
      return;
    }
    const params = { idLocation, noiDungCapNhat };
    dispatch(capNhatViTriAsync(params));
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: editLocationSchema,
    onSubmit: handleSubmitEditLocation,
  });

  const handleInputNumber = (field) => {
    return async (value: number) => await setFieldValue(field, value);
  };
  const { setFieldValue, handleSubmit, handleChange, errors, values } = formik;

  return isHasChiTietViTri ? (
    <Redirect to={urlLocationsManager} />
  ) : (
    <LocationManagerEditCSS.Container>
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
        </Form.FormControl>
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
          <Form.FormButton type='submit'>EDIT LOCATION</Form.FormButton>
        </Form.FormControl>
      </Form.FormContainer>
    </LocationManagerEditCSS.Container>
  );
}

export default LocationMangerEditPage;
