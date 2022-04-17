import { history, sweetAlert } from '@/Utils/Libs';
import { ButtonScrollTop, Modal, TableCSS } from '@Components';
import { quanLyNguoiDungSelector } from '@Redux/Selector/QuanLyNguoiDungSelector';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { nanoid } from '@reduxjs/toolkit';
import { userField } from '@Shared/Field/UserField';
import { handleDataTable } from '@Utils/Common';
import _ from 'lodash';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserManagerAdd from './UserManagerAdd';
import { UserManagerPageCSS } from './UserManagerPage.styles';

function UserManagerPage() {
  const dispatch = useDispatch();
  const { tableColumnsUserField } = userField;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const idTable = useRef(nanoid()).current;
  const urlUserEdit = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_EDIT;
  const urlUserProfile = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_PROFILE;
  const { sweetAlertDelete, sweetAlertSuccess } = sweetAlert;
  const { selectDanhSachNguoiDungFilter } = quanLyNguoiDungSelector;
  const { getDanhSachNguoiDungAsync, xoaNhieuNguoiDungAsync } = quanLyNguoiDungThunk;
  const { xoaNguoiDungAsync, getChiTietNguoiDungAsync } = quanLyNguoiDungThunk;
  const danhSachNguoiDung = useSelector(selectDanhSachNguoiDungFilter, _.isEqual);

  useEffect(() => {
    dispatch(getDanhSachNguoiDungAsync());
  }, [dispatch, getDanhSachNguoiDungAsync]);

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

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleGetDetailUser = async (idNguoiDung) => {
    await dispatch(getChiTietNguoiDungAsync(idNguoiDung));
    history.push(urlUserEdit);
  };

  const handleDeleteUser = async (idNguoiDung) => {
    const result = await sweetAlertDelete();
    if (result.isConfirmed) {
      const result = await dispatch(xoaNguoiDungAsync(idNguoiDung));
      if (result.error) return;
      sweetAlertSuccess();
    }
  };

  const handleGetProfileUser = async (idNguoiDung) => {
    await dispatch(getChiTietNguoiDungAsync(idNguoiDung));
    history.push(urlUserProfile);
  };

  const handleDeleteAll = useCallback(async () => {
    const result = await sweetAlertDelete();
    if (result.isConfirmed) {
      const result = await dispatch(xoaNhieuNguoiDungAsync(selectedRowKeys));
      if (result.error) return;
      setSelectedRowKeys([]);
      sweetAlertSuccess();
    }
  }, [dispatch, selectedRowKeys, sweetAlertDelete, sweetAlertSuccess, xoaNhieuNguoiDungAsync]);

  const handleRefreshData = useCallback(() => {
    dispatch(getDanhSachNguoiDungAsync());
  }, [dispatch, getDanhSachNguoiDungAsync]);

  const renderDataTable = () => {
    const props = {
      handleGetProfileItem: handleGetProfileUser,
      handleGetDetailItem: handleGetDetailUser,
      handleDeleteItem: handleDeleteUser,
    };
    return handleDataTable(danhSachNguoiDung, props);
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

  return (
    <UserManagerPageCSS.Container>
      <Modal
        isModalVisible={isModalVisible}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleDeleteAll={handleDeleteAll}
        handleRefreshData={handleRefreshData}
        content='Thêm quản trị viên'
        Component={UserManagerAdd}
        selectedRowKeys={selectedRowKeys}
      />

      <TableCSS.Table
        columns={tableColumnsUserField}
        dataSource={renderDataTable()}
        rowKey={(record) => record._id}
        key={idTable}
        rowSelection={rowSelection}
      />
    </UserManagerPageCSS.Container>
  );
}

export default UserManagerPage;
