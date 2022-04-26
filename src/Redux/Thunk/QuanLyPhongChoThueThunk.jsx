import { createAsyncThunk } from '@reduxjs/toolkit';
import { localService } from '@Services/LocalStorageService';
import { quanLyPhongChoThueService } from '@Services/QuanLyPhongChoThueService';
import { messageApp, showSuccess, capitalize } from '@Utils/Common';
import { history } from '@Utils/Libs';
import _ from 'lodash';

const {
  messageNetWorkErr,
  messageRegisterSucceed,
  messageIdIsUnValid,
  messageDataIsEmpty,
  messageNameRoomIsExits,
  messageUpdateFailed,
  messageUpdateSuccess,

  messageFailBooking,
} = messageApp;

const getDanhSachPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/getDanhSachPhongChoThueAsync',
  async (_, { rejectWithValue, getState }) => {
    const result = await quanLyPhongChoThueService.layTatCaPhongChoThue();

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('kind' in result && result.kind === 'ObjectId') {
      return rejectWithValue(messageIdIsUnValid);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    if (!result.length) {
      return rejectWithValue(messageDataIsEmpty);
    }

    return result;
  }
);

const getDanhSachPhongChoThueTheoViTriAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/getDanhSachPhongChoThueTheoViTriAsync',
  async (idViTri, { rejectWithValue }) => {
    const result = await quanLyPhongChoThueService.layPhongChoThueTheoViTri(idViTri);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('kind' in result && result.kind === 'ObjectId') {
      return rejectWithValue(messageIdIsUnValid);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    if (!result.length) {
      return rejectWithValue(messageDataIsEmpty);
    }

    return result;
  }
);

const getDanhSachPhongChoThueTheoDanhSachViTriAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/getDanhSachPhongChoThueTheoDanhSachViTriAsync',
  async (dsViTri, { rejectWithValue }) => {
    const promiseList = [];
    const result = [];
    dsViTri.forEach((viTri) => {
      const { _id } = viTri;
      const promise = quanLyPhongChoThueService.layPhongChoThueTheoViTri(_id);
      promiseList.push(promise);
    });
    const resultArr = await Promise.all(promiseList);
    resultArr.forEach((resultItem) => {
      result.push(...resultItem);
    });
    return result;
  }
);

const capNhatHinhAnhPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/capNhatHinhAnhPhongChoThueAsync',
  async ({ idRoom, formData }, { rejectWithValue, dispatch, getState }) => {
    const result = await quanLyPhongChoThueService.capNhatHinhAnhPhongChoThue(
      idRoom,
      formData,
      false
    );
    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (typeof result === 'string') {
      return rejectWithValue(result);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }
  }
);

const xoaNhieuPhongAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/xoaNhieuPhongAsync',
  async (idNguoiDungArr, { rejectWithValue, dispatch, getState }) => {
    const promiseArr = idNguoiDungArr.map((idNguoiDung) =>
      quanLyPhongChoThueService.xoaPhongChoThue(idNguoiDung)
    );
    const result = await Promise.all(promiseArr);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    await dispatch(getDanhSachPhongChoThueAsync());
  }
);

const xoaPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/xoaPhongChoThueAsync',
  async (idRoom, { rejectWithValue, dispatch, getState }) => {
    const result = await quanLyPhongChoThueService.xoaPhongChoThue(idRoom);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    await dispatch(getDanhSachPhongChoThueAsync());
  }
);

const taoPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/taoPhongChoThueAsync',
  async (phongChoThue, { rejectWithValue, dispatch, getState }) => {
    const state = getState();

    const danhSachPhongChoThue = state.QuanLyPhongChoThueReducer.danhSachPhongChoThue;
    const { name } = phongChoThue;

    if (danhSachPhongChoThue.filter((item) => item.name === name).length === 0) {
      const result = await quanLyPhongChoThueService.taoPhongChoThue(phongChoThue);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if ('message' in result) {
        return rejectWithValue(capitalize(result.message));
      }

      await dispatch(getDanhSachPhongChoThueAsync());
      showSuccess(messageRegisterSucceed);
      return;
    }
    return rejectWithValue(messageNameRoomIsExits);
  }
);

const getChiTietPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/getChiTietPhongChoThueAsync',
  async (idPhongChoThue, { rejectWithValue }) => {
    const result = await quanLyPhongChoThueService.layPhongChoThueTheoID(idPhongChoThue);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    return result;
  }
);

const capNhatPhongChoThueAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/capNhatPhongChoThueAsync',
  async ({ idRoom, noiDungCapNhat }, { rejectWithValue, dispatch }) => {
    const result = await quanLyPhongChoThueService.capNhatThongTinPhongChoThue(
      idRoom,
      noiDungCapNhat
    );

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (_.isEmpty(result)) {
      return rejectWithValue(messageUpdateFailed);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    showSuccess(messageUpdateSuccess);
    history.goBack();
  }
);

const datPhongPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/datPhongPhongChoThueAsync',
  async (dateBooking, { rejectWithValue, dispatch }) => {
    const result = await quanLyPhongChoThueService.datPhongChoThue(dateBooking);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if (_.isEmpty(result)) {
      return rejectWithValue(messageFailBooking);
    }

    if ('message' in result && !('userDetail' in result)) {
      return rejectWithValue(capitalize(result.message));
    }

    const userInfo = localService.getUserInfo();
    const updateUserInfo = { ...userInfo, ...result.userDetail };
    localService.setUserInfo(updateUserInfo);
    showSuccess(capitalize(capitalize(result.message)));
    return;
  }
);

export const quanLyPhongChoThueThunk = {
  getDanhSachPhongChoThueAsync,
  getDanhSachPhongChoThueTheoViTriAsync,
  getDanhSachPhongChoThueTheoDanhSachViTriAsync,
  xoaPhongChoThueAsync,
  taoPhongChoThueAsync,
  capNhatHinhAnhPhongChoThueAsync,
  xoaNhieuPhongAsync,
  getChiTietPhongChoThueAsync,
  capNhatPhongChoThueAsync,
  datPhongPhongChoThueAsync,
};
