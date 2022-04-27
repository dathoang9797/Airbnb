import { TableCSS, Modal } from '@Components';
import TabActionsAdmin from '@Layouts/Admin/TabActionsAdmin';
import { quanLyDanhGiaSelector } from '@Redux/Selector/QuanLyDanhGiaSelector';
import { quanLyDanhGiaThunk } from '@Redux/Thunk/QuanLyDanhGiaThunk';
import { nanoid } from '@reduxjs/toolkit';
import { evaluateField } from '@Shared/Field/EvaluateField';
import {  handleDataTable } from '@Utils/Common';
import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EvaluateManagerAdd from './EvaluateManagerAdd';
import EvaluateManagerEdit from './EvaluateManagerEdit';
import { shallowEqual } from 'react-redux';

function EvaluateManagerPage() {
  const dispatch = useDispatch();
  const { selectDanhSachDanhGiaFilter } = quanLyDanhGiaSelector;
  const { getDanhSachDanhGiaAsync, xoadanhGiaAsync, xoaNhieuDanhGiaAsync } = quanLyDanhGiaThunk;
  const { tableColumnsEvaluateField } = evaluateField;
  const danhSachDanhGia = useSelector(selectDanhSachDanhGiaFilter, shallowEqual);
  const idTable = useMemo(() => nanoid(), []);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { Table } = TableCSS;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const idDanhGia = useRef(null);

  useEffect(() => {
    dispatch(getDanhSachDanhGiaAsync());
  }, [dispatch, getDanhSachDanhGiaAsync]);

 

  const handleDeleteEvaluate = (idEvaluate) => {
    dispatch(xoadanhGiaAsync(idEvaluate));
  };

  const handleOk = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleOpenUpdateModal = (idRoom) => {
    idDanhGia.current = idRoom;
    setIsModalVisible(true);
  };

  const renderDataTable = () => {
    const props = {
      handleGetProfileItem: null,
      handleGetDetailItem: null,
      handleDeleteItem: handleDeleteEvaluate,
      handleUpdateItem: handleOpenUpdateModal,
    };
    return handleDataTable(danhSachDanhGia, props);
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
      <Modal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        Component={() => {
          return (
            <EvaluateManagerEdit
              danhSachDanhGia={danhSachDanhGia}
              idDanhGia={idDanhGia.current}
              handleOk={handleOk}
            />
          );
        }}
      />
      <TabActionsAdmin
        contentModal={EvaluateManagerAdd}
        setSelectedRowKeys={setSelectedRowKeys}
        handleDeleteAllThunk={xoaNhieuDanhGiaAsync}
        handleRefreshDataThunk={getDanhSachDanhGiaAsync}
        selectedRowKeys={selectedRowKeys}
        contentButtonAction='Thêm Đánh Giá'
      />
      <Table
        columns={tableColumnsEvaluateField}
        dataSource={renderDataTable()}
        rowKey={(record) => record._id}
        key={idTable}
        rowSelection={rowSelection}
      />
    </>
  );
}

export default EvaluateManagerPage;
