import TabActionsAdmin from '@Layouts/Admin/TabActionsAdmin';
import { quanLyVeSelector } from '@Redux/Selector/QuanLyVeSelector';
import { quanLyVeThunk } from '@Redux/Thunk/QuanLyVeThunk';
import { nanoid } from '@reduxjs/toolkit';
import { ticketField } from '@Shared/Field/TicketField';
import {  handleDataTable } from '@Utils/Common';
import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableCSS, Modal } from '@Components';
import _ from 'lodash';
import TicketManagerAdd from './TicketManagerAdd';
import TicketManagerEdit from './TicketManagerEdit';

function TicketManagerPage() {
  const dispatch = useDispatch();
  const { selectDanhSachVeFilter } = quanLyVeSelector;
  const { getDanhSachVeAsync, xoaVeAsync, xoaNhieuVeAsync } = quanLyVeThunk;
  const { tableColumnsTicketField } = ticketField;
  const idTable = useMemo(() => nanoid(), []);
  const danhSachVe = useSelector(selectDanhSachVeFilter, _.isEqual);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { Table } = TableCSS;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const idVe = useRef(null);

  useEffect(() => {
    dispatch(getDanhSachVeAsync());
  }, [dispatch, getDanhSachVeAsync]);

  const handleDeleteTicket = (idTicket) => {
    dispatch(xoaVeAsync(idTicket));
  };

  const handleOk = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleOpenUpdateModal = (idTicket) => {
    idVe.current = idTicket;
    setIsModalVisible(true);
  };

  const renderDataTable = () => {
    const props = {
      handleGetProfileItem: null,
      handleGetDetailItem: null,
      handleDeleteItem: handleDeleteTicket,
      handleUpdateItem: handleOpenUpdateModal,
    };
    return handleDataTable(danhSachVe, props);
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
            <TicketManagerEdit
              danhSachVe={danhSachVe}
              idDanhGia={idVe.current}
              handleOk={handleOk}
            />
          );
        }}
      />
      <TabActionsAdmin
        contentModal={TicketManagerAdd}
        setSelectedRowKeys={setSelectedRowKeys}
        handleDeleteAllThunk={xoaNhieuVeAsync}
        handleRefreshDataThunk={getDanhSachVeAsync}
        selectedRowKeys={selectedRowKeys}
        contentButtonAction='Thêm Vé'
      />
      <Table
        columns={tableColumnsTicketField}
        dataSource={renderDataTable()}
        rowKey={(record) => record._id}
        key={idTable}
        rowSelection={rowSelection}
      />
    </>
  );
}

export default TicketManagerPage;
