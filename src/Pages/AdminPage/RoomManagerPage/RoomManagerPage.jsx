import { history, sweetAlert } from '@/Utils/Libs';
import { ButtonScrollTop, Modal, TableCSS } from '@Components';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { nanoid } from '@reduxjs/toolkit';
import { roomField } from '@Shared/Field/RoomField';
import { handleDataTable } from '@Utils/Common';
import _ from 'lodash';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { render } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import RoomManagerAdd from './RoomManagerAdd';
import { RoomManagerPageCSS } from './RoomManagerPage.styles';

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const idTable = useRef(nanoid()).current;
  const urlRoomEdit = process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER_EDIT;
  const urlRoomProfile = process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER_PROFILE;
  const { sweetAlertDelete, sweetAlertSuccess } = sweetAlert;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    dispatch(getDanhSachPhongChoThueAsync());
  }, [dispatch, getDanhSachPhongChoThueAsync]);

  useLayoutEffect(() => {
    const antSpinNestedLoadingDom = document.querySelector('.ant-spin-nested-loading');
    const scrollButtonTopDom = document.querySelector('#scroll-button-top');
    if (antSpinNestedLoadingDom && !scrollButtonTopDom) {
      const scrollButtonTopElem = document.createElement('div');
      scrollButtonTopElem.setAttribute('id', 'scroll-button-top');
      antSpinNestedLoadingDom.append(scrollButtonTopElem);
      render(<ButtonScrollTop />, scrollButtonTopElem);
    }
  });

  const handleGetDetailRoom = async (idNguoiDung) => {
    await dispatch(getChiTietPhongChoThueAsync(idNguoiDung));
    history.push(urlRoomEdit);
  };

  const handleGetProfileRoom = async (idNguoiDung) => {
    await dispatch(getChiTietPhongChoThueAsync(idNguoiDung));
    history.push(urlRoomProfile);
  };

  const handleDeleteRoom = async (idRoom) => {
    const result = await sweetAlertDelete();
    if (result.isConfirmed) {
      const result = await dispatch(xoaPhongChoThueAsync(idRoom));
      if (result.error) return;
      sweetAlertSuccess();
    }
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

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleOk = useCallback((values) => {
    setIsModalVisible(false);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleDeleteAll = useCallback(async () => {
    const result = await sweetAlertDelete();
    if (result.isConfirmed) {
      const result = await dispatch(xoaNhieuPhongAsync(selectedRowKeys));
      if (result.error) return;
      setSelectedRowKeys([]);
      sweetAlertSuccess();
    }
  }, [dispatch, selectedRowKeys, sweetAlertDelete, sweetAlertSuccess, xoaNhieuPhongAsync]);

  const handleRefreshData = useCallback(() => {
    dispatch(getDanhSachPhongChoThueAsync());
  }, [dispatch, getDanhSachPhongChoThueAsync]);

  return (
    <RoomManagerPageCSS.Container>
      <Modal
        isModalVisible={isModalVisible}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        content='Thêm phòng'
        handleDeleteAll={handleDeleteAll}
        handleRefreshData={handleRefreshData}
        Component={RoomManagerAdd}
        selectedRowKeys={selectedRowKeys}
      />

      <TableCSS.Table
        columns={tableColumnsRoomField}
        dataSource={renderDataTable()}
        rowKey={(record) => record._id}
        key={idTable}
        rowSelection={rowSelection}
      />
    </RoomManagerPageCSS.Container>
  );
}

export default RoomManagerPage;
