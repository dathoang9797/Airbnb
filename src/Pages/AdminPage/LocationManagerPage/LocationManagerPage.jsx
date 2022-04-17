import { ButtonScrollTop, Modal, TableCSS } from '@Components';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import { nanoid } from '@reduxjs/toolkit';
import { locationField } from '@Shared/Field/LocationField';
import { handleDataTable } from '@Utils/Common';
import { history, sweetAlert } from '@Utils/Libs';
import _ from 'lodash';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { render } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import LocationManagerAdd from './LocationManagerAdd';
import { LocationManagerPageCSS } from './LocationManagerPage.styles';

function LocationManagerPage() {
  const dispatch = useDispatch();
  const { selectDanhViTriFilter } = quanLyViTriSelector;
  const { getDanhSachViTriAsync, getChiTietViTriAsync, xoaNhieuPhongAsync, xoaViTriAsync } =
    quanLyViTriThunk;
  const { tableColumnsLocationField } = locationField;
  const danhSachViTri = useSelector(selectDanhViTriFilter, _.isEqual);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const idTable = useRef(nanoid()).current;
  const urlLocationEdit = process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER_EDIT;
  const urlLocationProfile = process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER_PROFILE;
  const { sweetAlertDelete, sweetAlertSuccess } = sweetAlert;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    dispatch(getDanhSachViTriAsync());
  }, [dispatch, getDanhSachViTriAsync]);

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
    dispatch(getDanhSachViTriAsync());
  }, [dispatch, getDanhSachViTriAsync]);

  return (
    <LocationManagerPageCSS.Container>
      <Modal
        isModalVisible={isModalVisible}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        content='Thêm Vị Trí'
        handleDeleteAll={handleDeleteAll}
        handleRefreshData={handleRefreshData}
        Component={LocationManagerAdd}
        selectedRowKeys={selectedRowKeys}
      />

      <TableCSS.Table
        columns={tableColumnsLocationField}
        dataSource={renderDataTable()}
        rowKey={(record) => record._id}
        key={idTable}
        rowSelection={rowSelection}
      />
    </LocationManagerPageCSS.Container>
  );
}

export default LocationManagerPage;
