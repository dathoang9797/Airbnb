<<<<<<< HEAD
import { messageApp, showSuccess } from '@/Utils/Common';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { localService } from '@Services/LocalStorageService';
import { quanLyNguoiDungService } from '@Services/QuanLyNguoiDungService';
import { xacThucNguoiDungService } from '@Services/XacThucNguoiDungService';
import _ from 'lodash';
import { history } from '@/Utils/Libs';

const {
  messageLoginFailed,
  messageNameOrEmailIsExits,
  messageNetWorkErr,
  messageRegisterFailed,
  messageRegisterSucceed,
  messageUsersIsEmpty,
  messageUpdateSuccess,
  messageUpdateFailed,
} = messageApp;


const setUserInfoAsync = createAsyncThunk(
  "quanLyNguoiDungReducer/setUserInfoAsync",
  async (ThongTinDangNhap, { rejectWithValue }) => {
    const result = await xacThucNguoiDungService.dangNhap(ThongTinDangNhap);
    const urlHome = process.env.REACT_APP_LINK_HOME;

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (_.isEmpty(result)) {
      return rejectWithValue(messageLoginFailed);
    }

    if ('message' in result && !('user' in result)) {

      return rejectWithValue("Không thể đăng nhập");
    }

    if (!("user" in result)) {
      return rejectWithValue(result.message);
    }

    showSuccess(result.message);
    result.user.token = result.token;
    localService.setUserInfo(result.user);
    history.push(urlHome);
    return result.user;
  }
);

const setRegisterUserInfoAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/setRegisterUserInfoAsync',
  async (ThongTinDangKy, { rejectWithValue, dispatch, getState }) => {
    const urlSignIn = process.env.REACT_APP_LINK_SIGN_IN;
    const state = getState();
    const danhSachNguoiDung = state.QuanLyNguoiDungReducer.danhSachNguoiDung;
    const { email } = ThongTinDangKy;

    if (danhSachNguoiDung.filter((item) => item.email === email).length === 0) {
      const result = await xacThucNguoiDungService.dangKy(ThongTinDangKy);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if (typeof result === 'string') {
        return rejectWithValue(result);
      }

      if (_.isEmpty(result)) {
        return rejectWithValue(messageRegisterFailed);
      }

      if ('message' in result) {
        return rejectWithValue(result.message);
      }

      showSuccess(messageRegisterSucceed);
      History.push(urlSignIn);
      return;
    }
    return rejectWithValue(messageNameOrEmailIsExits);
  }
);

const getDanhSachNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/getDanhSachNguoiDungAsync',
  async (_, { rejectWithValue, getState }) => {
    const result = await quanLyNguoiDungService.layTatCaNguoiDung();

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (!result.length) {
      return rejectWithValue(messageUsersIsEmpty);
    }

    if (typeof result === 'string') {
      return rejectWithValue(result);
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

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (typeof result === 'string') {
      return rejectWithValue(result);
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }

    await dispatch(getDanhSachNguoiDungAsync());
  }
);

const xoaNhieuNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/xoaNhieuNguoiDungAsync',
  async (idNguoiDungArr, { rejectWithValue, dispatch, getState }) => {
    const promisesArr = idNguoiDungArr.map((idNguoiDung) =>
      quanLyNguoiDungService.xoaNguoiDung(idNguoiDung)
    );
    const result = await Promise.all(promisesArr);
    const state = getState();

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (typeof result === 'string') {
      return rejectWithValue(result);
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }

    await dispatch(getDanhSachNguoiDungAsync());
  }
);

const capNhatAnhDaiDienAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/capNhatAnhDaiDienAsync',
  async (avatarCapNhap, { rejectWithValue }) => {
    const result = await quanLyNguoiDungService.capNhatAnhDaiDienNguoiDung(avatarCapNhap);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (typeof result === 'string') {
      return rejectWithValue(result);
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }
  }
);

const capNhatNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/capNhatNguoiDungAsync',
  async ({ idNguoiDung, noiDungCapNhat }, { rejectWithValue, dispatch }) => {
    const result = await quanLyNguoiDungService.capNhatNguoiDung(idNguoiDung, noiDungCapNhat);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (_.isEmpty(result)) {
      return rejectWithValue(messageUpdateFailed);
    }

    if (typeof result === 'string') {
      return rejectWithValue(result);
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }

    showSuccess(messageUpdateSuccess);
    History.goBack();
  }
);

const taoNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/taoNguoiDungAsync',
  async (nguoiDung, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const danhSachNguoiDung = state.QuanLyNguoiDungReducer.danhSachNguoiDung;
    const { email } = nguoiDung;

    if (danhSachNguoiDung.filter((item) => item.email === email).length === 0) {
      const result = await quanLyNguoiDungService.taoNguoiDung(nguoiDung);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if (typeof result === 'string') {
        return rejectWithValue(result);
      }

      if ('message' in result) {
        return rejectWithValue(result.message);
      }

      await dispatch(getDanhSachNguoiDungAsync());

      showSuccess(messageRegisterSucceed);
      return;
    }
    return rejectWithValue(messageNameOrEmailIsExits);
  }
);

const getChiTietNguoiDungAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/getChiTietNguoiDungAsync',
  async (idNguoiDung, { rejectWithValue }) => {
    const result = await quanLyNguoiDungService.layNguoiDungTheoID(idNguoiDung);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (typeof result === 'string') {
      return rejectWithValue(result);
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
  capNhatAnhDaiDienAsync,
  taoNguoiDungAsync,
  xoaNhieuNguoiDungAsync,
};
