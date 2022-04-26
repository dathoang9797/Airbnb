import { TableCSS } from '@Components/Table';
import TabActionsAdmin from '@Layouts/Admin/TabActionsAdmin';
import { quanLyNguoiDungSelector } from '@Redux/Selector/QuanLyNguoiDungSelector';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { nanoid } from '@reduxjs/toolkit';
import { userField } from '@Shared/Field/UserField';
import { addButtonScrollInDom, handleDataTable } from '@Utils/Common';
import { history, sweetAlert } from '@Utils/Libs';
import _ from 'lodash';
import React, { useEffect, useLayoutEffect, useRef, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserManagerAdd from './UserManagerAdd';

function UserManagerPage() {
  const dispatch = useDispatch();
  const { tableColumnsUserField } = userField;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const idTable = useRef(nanoid()).current;
  const urlUserEdit = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_EDIT;
  const urlUserProfile = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_PROFILE;
  const { sweetAlertDelete, sweetAlertSuccess } = sweetAlert;
  const { selectDanhSachNguoiDungFilter } = quanLyNguoiDungSelector;
  const { getDanhSachNguoiDungAsync, xoaNhieuNguoiDungAsync } = quanLyNguoiDungThunk;
  const { xoaNguoiDungAsync, getChiTietNguoiDungAsync } = quanLyNguoiDungThunk;
  const danhSachNguoiDung = useSelector(selectDanhSachNguoiDungFilter, _.isEqual);
  const { Table } = TableCSS;

  useEffect(() => {
    dispatch(getDanhSachNguoiDungAsync());
  }, [dispatch, getDanhSachNguoiDungAsync]);

  useLayoutEffect(() => {
    addButtonScrollInDom();
  }, []);

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

  const renderDataTable = () => {
    const props = {
      handleGetProfileItem: handleGetProfileUser,
      handleGetDetailItem: handleGetDetailUser,
      handleDeleteItem: handleDeleteUser,
    };
    return handleDataTable(danhSachNguoiDung, props);
  };

  return (
    <Fragment>
      <TabActionsAdmin
        contentModal={UserManagerAdd}
        setSelectedRowKeys={setSelectedRowKeys}
        handleDeleteAllThunk={xoaNhieuNguoiDungAsync}
        handleRefreshDataThunk={getDanhSachNguoiDungAsync}
        selectedRowKeys={selectedRowKeys}
        contentButtonAction='Thêm quản trị viên'
      />

      <Table
        columns={tableColumnsUserField}
        dataSource={renderDataTable()}
        rowKey={(record) => record._id}
        key={idTable}
        rowSelection={rowSelection}
      />
    </Fragment>
  );
}

export default UserManagerPage;
