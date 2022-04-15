import { ButtonCSS } from '@Components/Button';
import Modal from '@Components/Modal';
import { TableCSS } from '@Components/Table';
import { quanLyNguoiDungSelector } from '@Redux/Selector/QuanLyNguoiDungSelector';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { nanoid } from '@reduxjs/toolkit';
import { userField } from '@Shared/Field/UserField';
import History from '@Utils/Libs/History';
import { sweetAlert } from '@Utils/Libs/SweetAlert';
import _ from 'lodash';
import React, { useCallback, useEffect, useMemo, useRef, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserManagerAdd from './UserManagerAdd';
import { UserManagerPageCSS } from './UserManagerPage.styles';
import { render } from 'react-dom';
import ButtonScrollTop from '@Components/ButtonScrollTop';

function UserManagerPage() {
  const dispatch = useDispatch();
  const { tableColumnsUserField } = userField;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const idTable = useRef(nanoid()).current;
  const urlUserEdit = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_EDIT;
  const urlUserProfile = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_PROFILE;
  const { sweetAlertDelete, sweetAlertSuccess } = sweetAlert;
  const { selectDanhSachNguoiDung } = quanLyNguoiDungSelector;
  const { getDanhSachNguoiDungAsync, xoaNhieuNguoiDungAsync } = quanLyNguoiDungThunk;
  const { xoaNguoiDungAsync, getChiTietNguoiDungAsync } = quanLyNguoiDungThunk;
  const danhSachNguoiDung = useSelector(selectDanhSachNguoiDung, _.isEqual);

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

  const handleGetDetailUser = useCallback(
    async (idNguoiDung) => {
      await dispatch(getChiTietNguoiDungAsync(idNguoiDung));
      History.push(urlUserEdit);
    },
    [dispatch, getChiTietNguoiDungAsync, urlUserEdit]
  );

  const handleDeleteUser = useCallback(
    async (idNguoiDung) => {
      const result = await sweetAlertDelete();
      if (result.isConfirmed) {
        const result = await dispatch(xoaNguoiDungAsync(idNguoiDung));
        if (result.error) return;
        sweetAlertSuccess();
      }
    },
    [dispatch, sweetAlertDelete, sweetAlertSuccess, xoaNguoiDungAsync]
  );

  const handleGetProfileUser = useCallback(
    async (idNguoiDung) => {
      await dispatch(getChiTietNguoiDungAsync(idNguoiDung));
      History.push(urlUserProfile);
    },
    [dispatch, getChiTietNguoiDungAsync, urlUserProfile]
  );

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

  const renderDataTable = useMemo(() => {
    return danhSachNguoiDung.map((nguoiDung, index) => {
      return {
        ...nguoiDung,
        action: (
          <div>
            <ButtonCSS.ShowProfile
              onClick={() => {
                handleGetProfileUser(nguoiDung._id);
              }}
            >
              Xem thông tin chi tiết
            </ButtonCSS.ShowProfile>
            <ButtonCSS.Edit
              onClick={() => {
                handleGetDetailUser(nguoiDung._id);
              }}
            >
              Sửa
            </ButtonCSS.Edit>
            <ButtonCSS.Delete
              onClick={() => {
                handleDeleteUser(nguoiDung._id);
              }}
            >
              Xóa
            </ButtonCSS.Delete>
          </div>
        ),
      };
    });
  }, [danhSachNguoiDung, handleGetProfileUser, handleGetDetailUser, handleDeleteUser]);

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
        dataSource={renderDataTable}
        rowKey={(record) => record._id}
        key={idTable}
        rowSelection={rowSelection}
      />
    </UserManagerPageCSS.Container>
  );
}

export default UserManagerPage;
