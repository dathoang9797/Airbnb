import { TableCSS } from '@Components';
import TabActionsAdmin from '@Layouts/Admin/TabActionsAdmin';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import { nanoid } from '@reduxjs/toolkit';
import { locationField } from '@Shared/Field/LocationField';
import { addButtonScrollInDom, handleDataTable } from '@Utils/Common';
import { history, sweetAlert } from '@Utils/Libs';
import _ from 'lodash';
import React, { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocationManagerAdd from './LocationManagerAdd';

function LocationManagerPage() {
  const dispatch = useDispatch();
  const { selectDanhViTriFilter } = quanLyViTriSelector;
  const { getDanhSachViTriAsync, getChiTietViTriAsync, xoaNhieuViTrigAsync, xoaViTriAsync } =
    quanLyViTriThunk;
  const { tableColumnsLocationField } = locationField;
  const danhSachViTri = useSelector(selectDanhViTriFilter, _.isEqual);
  const idTable = useRef(nanoid()).current;
  const urlLocationEdit = process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER_EDIT;
  const urlLocationProfile = process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER_PROFILE;
  const { sweetAlertDelete, sweetAlertSuccess } = sweetAlert;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { Table } = TableCSS;

  useEffect(() => {
    dispatch(getDanhSachViTriAsync());
  }, [dispatch, getDanhSachViTriAsync]);

  useLayoutEffect(() => {
    addButtonScrollInDom();
  }, []);

  const handleGetDetailLocation = async (idLocation) => {
    await dispatch(getChiTietViTriAsync(idLocation));
    history.push(urlLocationEdit);
  };

  const handleGetProfileLocation = async (idNguoiDung) => {
    await dispatch(getChiTietViTriAsync(idNguoiDung));
    history.push(urlLocationProfile);
  };

  const handleDeleteLocation = async (idRoom) => {
    const result = await sweetAlertDelete();
    if (result.isConfirmed) {
      const result = await dispatch(xoaViTriAsync(idRoom));
      if (result.error) return;
      sweetAlertSuccess();
    }
  };

  const renderDataTable = () => {
    const props = {
      handleGetProfileItem: handleGetProfileLocation,
      handleGetDetailItem: handleGetDetailLocation,
      handleDeleteItem: handleDeleteLocation,
    };
    return handleDataTable(danhSachViTri, props);
  };

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Fragment>
      <TabActionsAdmin
        contentModal={LocationManagerAdd}
        setSelectedRowKeys={setSelectedRowKeys}
        handleDeleteAllThunk={xoaNhieuViTrigAsync}
        handleRefreshDataThunk={getDanhSachViTriAsync}
        selectedRowKeys={selectedRowKeys}
        contentButtonAction='Thêm Vị Trí'
      />

      <Table
        columns={tableColumnsLocationField}
        dataSource={renderDataTable()}
        rowKey={(record) => record._id}
        key={idTable}
        rowSelection={rowSelection}
      />
    </Fragment>
  );
}

export default LocationManagerPage;
