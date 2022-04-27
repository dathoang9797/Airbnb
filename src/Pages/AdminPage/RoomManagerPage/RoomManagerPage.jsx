import { TableCSS } from '@Components';
import TabActionsAdmin from '@Layouts/Admin/TabActionsAdmin';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { nanoid } from '@reduxjs/toolkit';
import { roomField } from '@Shared/Field/RoomField';
import { handleDataTable } from '@Utils/Common';
import { history } from '@Utils/Libs';
import _ from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RoomManagerAdd from './RoomManagerAdd';

function RoomManagerPage() {
  const dispatch = useDispatch();
  const { selectDanhSachPhongFilter } = quanLyPhongChoThueSelector;
  const {
    getDanhSachPhongChoThueAsync,
    xoaPhongChoThueAsync,
    xoaNhieuPhongAsync,
    getChiTietPhongChoThueAsync,
  } = quanLyPhongChoThueThunk;
  const { tableColumnsRoomField } = roomField;
  const danhSachPhongChoThue = useSelector(selectDanhSachPhongFilter, _.isEqual);
  const idTable = useMemo(() => nanoid(), []);
  const urlRoomEdit = process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER_EDIT;
  const urlRoomProfile = process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER_PROFILE;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { Table } = TableCSS;

  useEffect(() => {
    dispatch(getDanhSachPhongChoThueAsync());
  }, [dispatch, getDanhSachPhongChoThueAsync]);

  

  const handleGetDetailRoom = async (idNguoiDung) => {
    await dispatch(getChiTietPhongChoThueAsync(idNguoiDung));
    history.push(urlRoomEdit);
  };

  const handleGetProfileRoom = async (idNguoiDung) => {
    await dispatch(getChiTietPhongChoThueAsync(idNguoiDung));
    history.push(urlRoomProfile);
  };

  const handleDeleteRoom = (idRoom) => {
    dispatch(xoaPhongChoThueAsync(idRoom));
  };

  const renderDataTable = () => {
    const props = {
      handleGetProfileItem: handleGetProfileRoom,
      handleGetDetailItem: handleGetDetailRoom,
      handleDeleteItem: handleDeleteRoom,
    };
    return handleDataTable(danhSachPhongChoThue, props);
  };

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <TabActionsAdmin
        contentModal={RoomManagerAdd}
        setSelectedRowKeys={setSelectedRowKeys}
        handleDeleteAllThunk={xoaNhieuPhongAsync}
        handleRefreshDataThunk={getDanhSachPhongChoThueAsync}
        selectedRowKeys={selectedRowKeys}
        contentButtonAction='Thêm Phòng'
      />

      <Table
        columns={tableColumnsRoomField}
        dataSource={renderDataTable()}
        rowKey={(record) => record._id}
        key={idTable}
        rowSelection={rowSelection}
      />
    </>
  );
}

export default RoomManagerPage;
