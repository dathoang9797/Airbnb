import { TableCSS } from '@Components';
import ModalHoc from '@HOC/ModalHoc';
import TabActionsAdmin from '@Layouts/Admin/TabActionsAdmin';
import { quanLyDanhGiaSelector } from '@Redux/Selector/QuanLyDanhGiaSelector';
import { quanLyDanhGiaThunk } from '@Redux/Thunk/QuanLyDanhGiaThunk';
import { nanoid } from '@reduxjs/toolkit';
import { evaluateField } from '@Shared/Field/EvaluateField';
import { handleDataTable } from '@Utils/Common';
import React, { useEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import EvaluateManagerAdd from './EvaluateManagerAdd';
import EvaluateManagerEdit from './EvaluateManagerEdit';

function EvaluateManagerPage(props) {
  const dispatch = useDispatch();
  const { showModal, handlePropsContentModal, handleContentModal } = props;
  const { selectDanhSachDanhGiaFilter } = quanLyDanhGiaSelector;
  const { getDanhSachDanhGiaAsync, xoadanhGiaAsync, xoaNhieuDanhGiaAsync } = quanLyDanhGiaThunk;
  const { tableColumnsEvaluateField } = evaluateField;
  const danhSachDanhGia = useSelector(selectDanhSachDanhGiaFilter, shallowEqual);
  const idTable = useMemo(() => nanoid(), []);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { Table } = TableCSS;

  useEffect(() => {
    dispatch(getDanhSachDanhGiaAsync());
  }, [dispatch, getDanhSachDanhGiaAsync]);

  const handleDeleteEvaluate = (idEvaluate) => {
    dispatch(xoadanhGiaAsync(idEvaluate));
  };

  const handleUpdateModal = (idRoom) => {
    handlePropsContentModal({ danhSachDanhGia, idDanhGia: idRoom });
    handleContentModal(EvaluateManagerEdit);
    showModal();
  };

  const renderDataTable = () => {
    const propsFieldAction = {
      handleGetProfileItem: null,
      handleDeleteItem: handleDeleteEvaluate,
      handleUpdateItem: handleUpdateModal,
    };
    return handleDataTable(danhSachDanhGia, propsFieldAction);
  };

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleShowModal = () => {
    handleContentModal(EvaluateManagerAdd);
    showModal();
  };

  return (
    <>
      <TabActionsAdmin
        setSelectedRowKeys={setSelectedRowKeys}
        handleDeleteAllThunk={xoaNhieuDanhGiaAsync}
        handleRefreshDataThunk={getDanhSachDanhGiaAsync}
        showModal={handleShowModal}
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

export default ModalHoc(EvaluateManagerPage);
