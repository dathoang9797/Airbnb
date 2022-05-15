import Form from '@Components/Form';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { roomField } from '@Shared/Field/RoomField';
import { addRoomSchema } from '@Shared/Schema/AddRoomSchema';
import { sortValue } from '@Utils/Common';
import { useFormik } from 'formik';
import _ from 'lodash';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RoomManagerAdd({ handleOk }) {
  const dispatch = useDispatch();
  const { addRoomField, renderFormRoomField } = roomField;
  const { FormContainer, FormControl, FormButton } = Form;
  const { taoPhongChoThueAsync } = quanLyPhongChoThueThunk;
  const { selectDanhSachViTri } = quanLyViTriSelector;
  const danhSachViTri = useSelector(selectDanhSachViTri, _.isEqual);

  const sortDanhSachViTri = useMemo(() => {
    const danhSachViTriFilter = danhSachViTri
      .filter((item) => item.province)
      .sort((valueA, valueB) => sortValue(valueA?.province, valueB?.province, 'province'));
    return danhSachViTriFilter;
  }, [danhSachViTri]);

  const handleSubmitAddRoom = async (values, { resetForm }) => {
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

  const handleChangeSelect = async (value) => {
    await setFieldValue('locationId', value);
  };

  const formik = useFormik({
    initialValues: { ...addRoomField, locationId: sortDanhSachViTri[0]._id },
    validationSchema: addRoomSchema,
    onSubmit: handleSubmitAddRoom,
  });

  const { setFieldValue, handleSubmit, handleChange, errors, values } = formik;

  return (
    <FormContainer onFinish={handleSubmit} size='small'>
      {renderFormRoomField(
        addRoomField,
        sortDanhSachViTri,
        errors,
        values,
        handleChange,
        handleInputNumber,
        handleChangeSwitch,
        handleChangeSelect
      )}
      <FormControl>
        <FormButton type='submit'>ADD ROOM</FormButton>
      </FormControl>
    </FormContainer>
  );
}

export default RoomManagerAdd;
