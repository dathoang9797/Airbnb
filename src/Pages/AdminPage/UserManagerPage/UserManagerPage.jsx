import { selectQuanLyNguoiDung } from '@Redux/Selector/QuanLyNguoiDungSelector';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { nanoid } from '@reduxjs/toolkit';
import History from '@Utils/Libs/History';
import { getTableUserField } from '@Utils/User/TableUserField';
import _ from 'lodash';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import UserModal from './UserManagerModal';
import { UserManagerPageCSS } from './UserManagerPage.styles';

function UserManagerPage() {
  const { selectDanhSachNguoiDung } = selectQuanLyNguoiDung;
  const { getDanhSachNguoiDungAsync } = quanLyNguoiDungThunk;
  const { xoaNguoiDungAsync } = quanLyNguoiDungThunk;
  const { getChiTietNguoiDungAsync } = quanLyNguoiDungThunk;
  const dispatch = useDispatch();
  const danhSachNguoiDung = useSelector(selectDanhSachNguoiDung, _.isEqual);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const idTable = useRef(nanoid()).current;
  const urlEdit = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_EDIT;
  const urlProfile = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_PROFILE;

  useEffect(() => {
    dispatch(getDanhSachNguoiDungAsync());
  }, [dispatch, getDanhSachNguoiDungAsync]);

  const handleGetDetailUser = useCallback(
    async (idNguoiDung) => {
      await dispatch(getChiTietNguoiDungAsync(idNguoiDung));
      History.push(urlEdit);
    },
    [dispatch, getChiTietNguoiDungAsync, urlEdit]
  );

  const handleDeleteUser = useCallback(
    (idNguoiDung) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const result = await dispatch(xoaNguoiDungAsync(idNguoiDung));
          if (result.error) return;
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
    },
    [dispatch, xoaNguoiDungAsync]
  );

  const handleGetProfileUser = useCallback(
    async (idNguoiDung) => {
      await dispatch(getChiTietNguoiDungAsync(idNguoiDung));
      History.push(urlProfile);
    },
    [dispatch, getChiTietNguoiDungAsync, urlProfile]
  );

  const renderDataTable = useMemo(() => {
    return danhSachNguoiDung.map((nguoiDung, index) => {
      return {
        ...nguoiDung,
        action: (
          <div>
            <UserManagerPageCSS.ButtonShowProfile
              onClick={() => {
                handleGetProfileUser(nguoiDung._id);
              }}
            >
              Xem thông tin chi tiết
            </UserManagerPageCSS.ButtonShowProfile>
            <UserManagerPageCSS.ButtonEdit
              onClick={() => {
                handleGetDetailUser(nguoiDung._id);
              }}
            >
              Sửa
            </UserManagerPageCSS.ButtonEdit>
            <UserManagerPageCSS.ButtonDelete
              onClick={() => {
                handleDeleteUser(nguoiDung._id);
              }}
            >
              Xóa
            </UserManagerPageCSS.ButtonDelete>
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
      <UserModal
        isModalVisible={isModalVisible}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />

      <UserManagerPageCSS.Table
        columns={getTableUserField()}
        dataSource={renderDataTable}
        rowKey={(record) => record._id}
        key={idTable}
      />
    </UserManagerPageCSS.Container>
  );
}

export default UserManagerPage;
