import { quanLyNguoiDungAction } from '@Redux/Reducers/QuanLyNguoiDungSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { localService } from '@Services/LocalStorageService';
import { quanLyNguoiDungService } from '@Services/QuanLyNguoiDungService';
import { xacThucNguoiDungService } from '@Services/XacThucNguoiDungService';
import { showSuccess } from '@Utils/Alert/PopUp';
import History from '@Utils/Libs/History';
import _ from 'lodash';

const setUserInfoAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/setUserInfoAsync',
  async (ThongTinDangNhap, { rejectWithValue }) => {
    const result = await xacThucNguoiDungService.dangNhap(ThongTinDangNhap);

    if (!result) {
      return rejectWithValue('Vui lòng thử lại,khi đường truyền ổn định');
    }

    if (_.isEmpty(result)) {
      return rejectWithValue('Đăng Nhâp Thất Bại');
    }

    if ('message' in result && !('user' in result)) {
      return rejectWithValue(result.message);
    }

    showSuccess(result.message);
    result.user.token = result.token;
    localService.setUserInfo(result.user);
    History.push('/');
    return result.user;
  }
);

const setRegisterUserInfoAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/setRegisterUserInfoAsync',
  async (ThongTinDangKy, { rejectWithValue }) => {
    const result = await xacThucNguoiDungService.dangKy(ThongTinDangKy);

    if (!result) {
      return rejectWithValue('Vui lòng thử lại,khi đường truyền ổn định');
    }

    if (_.isEmpty(result)) {
      return rejectWithValue('Đăng Ký Thất Bại');
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }

    showSuccess('Đăng ký thành công');
    History.goBack();
  }
);

const setDangKyNguoiDungModal = createAsyncThunk(
  'quanLyNguoiDungReducer/setDangKyNguoiDungModal',
  async (ThongTinDangKy, { rejectWithValue, dispatch }) => {
    const result = await xacThucNguoiDungService.dangKy(ThongTinDangKy);

    if (!result) {
      return rejectWithValue('Vui lòng thử lại,khi đường truyền ổn định');
    }

    if (_.isEmpty(result)) {
      return rejectWithValue('Đăng Ký Thất Bại');
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }

    await dispatch(getDanhSachNguoiDungAsync());
    showSuccess('Đăng ký thành công');
  }
);

const getDanhSachNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/getDanhSachNguoiDungAsync',
  async (_, { rejectWithValue }) => {
    const result = await quanLyNguoiDungService.layTatCaNguoiDung();

    if (!result) {
      return rejectWithValue('Vui lòng thử lại,khi đường truyền ổn định');
    }

    if (!result.length) {
      return rejectWithValue('Không có người dùng ');
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }

    return result;
  }
);

const xoaNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/xoaNguoiDungAsync',
  async (idNguoiDung, { rejectWithValue, dispatch, getState }) => {
    const result = await quanLyNguoiDungService.xoaNguoiDung(idNguoiDung);
    const { setDanhSachNguoiDungFilter } = quanLyNguoiDungAction;
    const state = getState();
    const searchValue = state.QuanLyNguoiDungReducer.searchValue;

    if (!result) {
      return rejectWithValue('Vui lòng thử lại,khi đường truyền ổn định');
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }

    await dispatch(getDanhSachNguoiDungAsync());
    dispatch(setDanhSachNguoiDungFilter(searchValue));
  }
);

const capNhatAnhDaiDienAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/capNhatAnhDaiDienAsync',
  async (avatarCapNhap, { rejectWithValue }) => {
    const result = await quanLyNguoiDungService.capNhatAnhDaiDienNguoiDung(avatarCapNhap);
    if (typeof result === 'string') {
      return rejectWithValue(result);
    }
  }
);

const capNhatNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/capNhatNguoiDungAsync',
  async ({ idNguoiDung, noiDungCapNhat }, { rejectWithValue, dispatch }) => {
    const result = await quanLyNguoiDungService.capNhatNguoiDung(idNguoiDung, noiDungCapNhat);

    if (!result) {
      return rejectWithValue('Vui lòng thử lại,khi đường truyền ổn định');
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }

    showSuccess('Cập nhật thành công');
    History.goBack();
  }
);

const taoNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/taoNguoiDungAsync',
  async (idNguoiDung, { rejectWithValue, dispatch }) => {
    const result = await quanLyNguoiDungService.taoNguoiDung(idNguoiDung);

    if (!result) {
      return rejectWithValue('Vui lòng thử lại,khi đường truyền ổn định');
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }
    await dispatch(getDanhSachNguoiDungAsync());
    showSuccess('Đăng ký thành công');
  }
);

const getChiTietNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/getChiTietNguoiDungAsync',
  async (idNguoiDung, { rejectWithValue }) => {
    const result = await quanLyNguoiDungService.layNguoiDungTheoID(idNguoiDung);

    if (!result) {
      return rejectWithValue('Vui lòng thử lại,khi đường truyền ổn định');
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }

    return result;
  }
);

export const quanLyNguoiDungThunk = {
  setUserInfoAsync,
  setRegisterUserInfoAsync,
  getDanhSachNguoiDungAsync,
  xoaNguoiDungAsync,
  capNhatNguoiDungAsync,
  getChiTietNguoiDungAsync,
  setDangKyNguoiDungModal,
  capNhatAnhDaiDienAsync,
  taoNguoiDungAsync,
};
