import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyViTriService } from '@Services/QuanLyViTriService';
import { messageApp, showSuccess } from '@Utils/Common';
import { history } from '@Utils/Libs';
import _ from 'lodash';
import { capitalize } from '@Utils/Common';

const {
  messageNetWorkErr,
  messageRegisterSucceed,
  messageIdIsUnValid,
  messageDataIsEmpty,
  messageNameRoomIsExits,
  messageUpdateFailed,
  messageUpdateSuccess,
} = messageApp;

const getDanhSachViTriAsync = createAsyncThunk(
  'quanLyViTriReducer/getDanhSachViTriAsync',
  async (_, { rejectWithValue }) => {
    const result = await quanLyViTriService.layTatCaViTri();

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

const getViTriTheoTenThanhPhoAsync = createAsyncThunk(
  'quanLyViTriReducer/getViTriTheoTenThanhPhoAsync',
  async (location, { rejectWithValue }) => {
    const result = await quanLyViTriService.layViTriTheoTenThanhPho(location);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('kind' in result && result.kind === 'ObjectId') {
      return rejectWithValue('Id này ko có');
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    if (!result.length) {
      return rejectWithValue('Không có dữ liệu');
    }

    return result;
  }
);

const getChiTietViTriAsync = createAsyncThunk(
  'quanLyViTriReducer/getChiTietViTriAsync',
  async (idViTri, { rejectWithValue }) => {
    const result = await quanLyViTriService.layViTriTheoID(idViTri);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    return result;
  }
);

const taoviTriAsync = createAsyncThunk(
  'quanLyviTriReducer/taoviTriAsync',
  async (viTri, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const danhSachviTri = state.QuanLyViTriReducer.danhSachviTri;
    const { name } = viTri;

    if (danhSachviTri.filter((item) => item.name === name).length === 0) {
      const result = await quanLyViTriService.taoViTri(viTri);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if ('message' in result) {
        return rejectWithValue(capitalize(result.message));
      }

      await dispatch(getDanhSachViTriAsync());
      showSuccess(messageRegisterSucceed);
      return;
    }
    return rejectWithValue(messageNameRoomIsExits);
  }
);

const xoaNhieuViTrigAsync = createAsyncThunk(
  'quanLyNguoiDungReducer/xoaNhieuPhongAsync',
  async (idNguoiDungArr, { rejectWithValue, dispatch, getState }) => {
    const promiseArr = idNguoiDungArr.map((idNguoiDung) =>
      quanLyViTriService.xoaviTri(idNguoiDung)
    );
    const result = await Promise.all(promiseArr);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    await dispatch(getDanhSachViTriAsync());
  }
);

const xoaViTriAsync = createAsyncThunk(
  'quanLyViTriReducer/xoaViTriAsync',
  async (idLocation, { rejectWithValue, dispatch, getState }) => {
    const result = await quanLyViTriService.xoaViTri(idLocation);

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('message' in result) {
      return rejectWithValue(capitalize(result.message));
    }

    await dispatch(getDanhSachViTriAsync());
  }
);

const capNhatViTriAsync = createAsyncThunk(
  'quanLyViTriReducer/capNhatViTriAsync',
  async ({ idLocation, noiDungCapNhat }, { rejectWithValue, dispatch }) => {
    const result = await quanLyViTriService.capNhatThongTinViTri(idLocation, noiDungCapNhat);

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

export const quanLyViTriThunk = {
  getDanhSachViTriAsync,
  getViTriTheoTenThanhPhoAsync,
  getChiTietViTriAsync,
  xoaViTriAsync,
  xoaNhieuViTrigAsync,
  taoviTriAsync,
  capNhatViTriAsync,
};
