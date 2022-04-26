import { editRoomSchema } from '@Shared/Schema/EditRoomSchema';
import { showWarning } from '@Utils/Common';
import Form from '@Components/Form';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { roomField } from '@Shared/Field/RoomField';
import { messageApp } from '@Utils/Common';
import { useFormik } from 'formik';
import _ from 'lodash';
import React, { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { RoomManagerEditCSS } from './RoomManagerEditPage.styles';

function RoomManagerEditPage() {
  const dispatch = useDispatch();
  const { capNhatPhongChoThueAsync } = quanLyPhongChoThueThunk;
  const { selectChiTietPhongChoThue } = quanLyPhongChoThueSelector;
  const urlRoomManager = process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER;
  const { messageNoDifferent } = messageApp;
  const chiTietPhongChoThue = useSelector(selectChiTietPhongChoThue, _.isEqual);
  const { editRoomField, renderRoomField } = roomField;
  const isHasChiTietPhongChoThue = useMemo(
    () => _.isEmpty(chiTietPhongChoThue),
    [chiTietPhongChoThue]
  );
  const initialValues = useMemo(() => {
    return {
      ...editRoomField,
      ..._.omit(chiTietPhongChoThue, ['__v', 'deleteAt', 'image', 'locationId']),
    };
  }, [chiTietPhongChoThue, editRoomField]);
  const refChiTietNguoiDung = useRef(initialValues);
  const { Container } = RoomManagerEditCSS;
  const { FormContainer, FormControl, FormButton } = Form;

  const handleSubmitEditRoom = (valuesUpDate) => {
    const noiDungCapNhat = _.omit(valuesUpDate, ['_id']);
    const idRoom = valuesUpDate._id;
    if (_.isEqual(valuesUpDate, refChiTietNguoiDung.current)) {
      showWarning(messageNoDifferent);
      return;
    }
    const params = { idRoom, noiDungCapNhat };
    dispatch(capNhatPhongChoThueAsync(params));
  };

  const handleChangeSwitch = (field) => {
    return async (checked) => await setFieldValue(field, checked);
  };

  const handleInputNumber = (field) => {
    return async (value: number) => await setFieldValue(field, value);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: editRoomSchema,
    onSubmit: handleSubmitEditRoom,
  });

  const { setFieldValue, handleSubmit, handleChange, values, errors } = formik;

  return isHasChiTietPhongChoThue ? (
    <Redirect to={urlRoomManager} />
  ) : (
    <Container>
      <FormContainer onFinish={handleSubmit} size='small'>
        {renderRoomField(
          editRoomField,
          errors,
          values,
          handleChange,
          handleInputNumber,
          handleChangeSwitch
        )}
        <FormControl>
          <FormButton type='submit'>EDIT ROOM</FormButton>
        </FormControl>
      </FormContainer>
    </Container>
  );
}

export default RoomManagerEditPage;
