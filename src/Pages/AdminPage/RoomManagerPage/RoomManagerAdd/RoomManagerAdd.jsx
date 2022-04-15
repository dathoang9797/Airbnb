import React from 'react';
import Form from '@Components/Form';
import { addRoomSchema } from '@Shared/Schema/AddRoomSchema';
import { roomField } from '@Shared/Field/RoomField';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';

function RoomManagerAdd({ handleOk }) {
  const dispatch = useDispatch();
  const { taoPhongChoThueAsync } = quanLyPhongChoThueThunk;
  const { addRoomField } = roomField;

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
    <Form.FormContainer onFinish={handleSubmit} size='small'>
      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.name : ''}
          >
            <Form.FormBedOutline />
            <Form.FormInput
              type='text'
              placeholder=' '
              name='name'
              onChange={handleChange}
              childrenProps='Your Name Room'
              value={values.name}
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem
            validateStatus={errors ? 'error' : 'success'}
            help={errors ? errors.description : ''}
          >
            <Form.FormHiOutlineClipboard />
            <Form.FormInput
              type='text'
              placeholder=' '
              name='description'
              onChange={handleChange}
              childrenProps='Your Description'
              value={values.description}
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='Price'>
            <Form.InputNumber
              onChange={handleInputNumber('price')}
              value={values.price ? values.price : null}
              defaultValue={10000}
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='Guests'>
            <Form.InputNumber onChange={handleInputNumber('guests')} value={values.guests} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='BedRoom'>
            <Form.InputNumber onChange={handleInputNumber('bedRoom')} value={values.bedRoom} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='Bath'>
            <Form.InputNumber onChange={handleInputNumber('bath')} value={values.bath} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='Elevator'>
            <Form.FormSwitch onChange={handleChangeSwitch('elevator')} checked={values.elevator} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='HotTub'>
            <Form.FormSwitch onChange={handleChangeSwitch('hotTub')} checked={values.hotTub} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='Pool'>
            <Form.FormSwitch onChange={handleChangeSwitch('pool')} checked={values.pool} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='IndoorFireplace'>
            <Form.FormSwitch
              onChange={handleChangeSwitch('indoorFireplace')}
              checked={values.indoorFireplace}
            />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='Dryer'>
            <Form.FormSwitch onChange={handleChangeSwitch('dryer')} checked={values.dryer} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='Gym'>
            <Form.FormSwitch onChange={handleChangeSwitch('gym')} checked={values.gym} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='Kitchen'>
            <Form.FormSwitch onChange={handleChangeSwitch('kitchen')} checked={values.kitchen} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='Wifi'>
            <Form.FormSwitch onChange={handleChangeSwitch('wifi')} checked={values.wifi} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='Heating'>
            <Form.FormSwitch onChange={handleChangeSwitch('heating')} checked={values.heating} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormGroup>
          <Form.FormItem label='CableTV'>
            <Form.FormSwitch onChange={handleChangeSwitch('cableTV')} checked={values.cableTV} />
          </Form.FormItem>
        </Form.FormGroup>
      </Form.FormControl>

      <Form.FormControl>
        <Form.FormButton type='submit'>ADD ROOM</Form.FormButton>
      </Form.FormControl>
    </Form.FormContainer>
  );
}

export default RoomManagerAdd;
