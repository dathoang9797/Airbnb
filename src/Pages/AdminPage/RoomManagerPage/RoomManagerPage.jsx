import History from '@/Utils/Libs/History';
import { ButtonCSS } from '@Components/Button';
import ButtonScrollTop from '@Components/ButtonScrollTop';
import Modal from '@Components/Modal';
import { TableCSS } from '@Components/Table';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { nanoid } from '@reduxjs/toolkit';
import { roomField } from '@Shared/Field/RoomField';
import { sweetAlert } from '@Utils/Libs/SweetAlert';
import _ from 'lodash';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import RoomManagerAdd from './RoomManagerAdd';
import { RoomManagerPageCSS } from './RoomManagerPage.styles';

function RoomManagerPage() {
  const { selectDanhSachPhongChoThue } = quanLyPhongChoThueSelector;
  const { getDanhSachPhongChoThueAsync } = quanLyPhongChoThueThunk;
  const { xoaPhongChoThueAsync, xoaNhieuPhongAsync } = quanLyPhongChoThueThunk;
  const { tableColumnsRoomField } = roomField;
  const { getChiTietPhongChoThueAsync } = quanLyPhongChoThueThunk;
  const dispatch = useDispatch();
  const danhSachPhongChoThue = useSelector(selectDanhSachPhongChoThue, _.isEqual);
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

  const handleGetDetailRoom = useCallback(
    async (idNguoiDung) => {
      await dispatch(getChiTietPhongChoThueAsync(idNguoiDung));
      History.push(urlRoomEdit);
    },
    [dispatch, getChiTietPhongChoThueAsync, urlRoomEdit]
  );

  const handleGetProfileUser = useCallback(
    async (idNguoiDung) => {
      await dispatch(getChiTietPhongChoThueAsync(idNguoiDung));
      History.push(urlRoomProfile);
    },
    [dispatch, getChiTietPhongChoThueAsync, urlRoomProfile]
  );

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleDeleteRoom = useCallback(
    async (idRoom) => {
      const result = await sweetAlertDelete();
      if (result.isConfirmed) {
        const result = await dispatch(xoaPhongChoThueAsync(idRoom));
        if (result.error) return;
        sweetAlertSuccess();
      }
    },
    [dispatch, sweetAlertDelete, sweetAlertSuccess, xoaPhongChoThueAsync]
  );

  const renderDataTable = useMemo(() => {
    return danhSachPhongChoThue.map((phongChoThue, index) => {
      return {
        ...phongChoThue,
        action: (
          <div>
            <ButtonCSS.ShowProfile
              onClick={() => {
                handleGetProfileUser(phongChoThue._id);
              }}
            >
              Xem thông tin chi tiết
            </ButtonCSS.ShowProfile>
            <ButtonCSS.Edit
              onClick={() => {
                handleGetDetailRoom(phongChoThue._id);
              }}
            >
              Sửa
            </ButtonCSS.Edit>
            <ButtonCSS.Delete
              onClick={() => {
                handleDeleteRoom(phongChoThue._id);
              }}
            >
              Xóa
            </ButtonCSS.Delete>
          </div>
        ),
      };
    });
  }, [danhSachPhongChoThue, handleDeleteRoom, handleGetDetailRoom, handleGetProfileUser]);

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
        dataSource={renderDataTable}
        rowKey={(record) => record._id}
        key={idTable}
        rowSelection={rowSelection}
      />
    </RoomManagerPageCSS.Container>
  );
}

export default RoomManagerPage;
