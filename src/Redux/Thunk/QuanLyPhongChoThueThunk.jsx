import History from '@Utils/Libs/History';
import { quanLyPhongChoThueAction } from '@Redux/Reducers/QuanLyPhongChoThueSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { imagesService } from '@Services/ImageService';
import { quanLyPhongChoThueService } from '@Services/QuanLyPhongChoThueService';
import { showSuccess, messageApp } from '@Utils/Common';
import _ from 'lodash';

const {
  messageNetWorkErr,
  messageRegisterSucceed,
  messageIdIsUnValid,
  messageDataIsEmpty,
  messageNameRoomIsExits,
  messageUpdateFailed,
  messageUpdateSuccess,
} = messageApp;

const getDanhSachPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/getDanhSachPhongChoThueAsync',
  async (_, { rejectWithValue, dispatch, getState }) => {
    const result = await quanLyPhongChoThueService.layTatCaPhongChoThue();
    const state = getState();
    const danhSachPhongBackUp = state.QuanLyPhongChoThueReducer.danhSachPhongBackUp;

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('kind' in result && result.kind === 'ObjectId') {
      return rejectWithValue(messageIdIsUnValid);
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }

    if (!result.length) {
      return rejectWithValue(messageDataIsEmpty);
    }

    if (!danhSachPhongBackUp.length) {
      const promisesArr = result.map(async (item, index) => {
        const cloneItem = { ...item };
        if (cloneItem.image) {
          const result = await imagesService.convertUrlToBase64(cloneItem.image);
          if (typeof result !== 'string') {
            return cloneItem;
          }
          cloneItem.image = result;
        }

        return cloneItem;
      });
      return await Promise.all(promisesArr);
    }

    const filterResult = result.map((item, index) => {
      const cloneItem = { ...item };
      const cloneRoom = { ...danhSachPhongBackUp[index] };
      if (cloneRoom?._id && cloneItem._id === cloneRoom._id) {
        if (cloneItem.image && !cloneRoom.image) {
          cloneRoom.image = cloneItem.image;
          return cloneRoom;
        }
        return cloneRoom;
      }
      return cloneItem;
    });

    const promisesArr = filterResult.map(async (item, index) => {
      const cloneItem = { ...item };
      if (cloneItem.image) {
        const result = await imagesService.convertUrlToBase64(cloneItem.image);
        if (typeof result !== 'string') {
          return cloneItem;
        }
        cloneItem.image = result;
      }
      return cloneItem;
    });
    return await Promise.all(promisesArr);
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
      return rejectWithValue(result.message);
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
      return rejectWithValue(result.message);
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
    const state = getState();
    const searchValue = state.QuanLyNguoiDungReducer.searchValue;
    const { setDanhSachPhongFilter } = quanLyPhongChoThueAction;

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }

    await dispatch(getDanhSachPhongChoThueAsync());

    if (searchValue) {
      dispatch(setDanhSachPhongFilter(searchValue));
    }
  }
);

const xoaPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/xoaPhongChoThueAsync',
  async (idRoom, { rejectWithValue, dispatch, getState }) => {
    const result = await quanLyPhongChoThueService.xoaPhongChoThue(idRoom);
    const state = getState();
    const searchValue = state.QuanLyPhongChoThueReducer.searchValue;
    const { setDanhSachPhongFilter } = quanLyPhongChoThueAction;

    if (!result) {
      return rejectWithValue(messageNetWorkErr);
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }

    await dispatch(getDanhSachPhongChoThueAsync());

    if (searchValue) {
      dispatch(setDanhSachPhongFilter(searchValue));
    }
  }
);

const taoPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/taoPhongChoThueAsync',
  async (phongChoThue, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const searchValue = state.QuanLyPhongChoThueReducer.searchValue;
    const danhSachPhongBackUp = state.QuanLyPhongChoThueReducer.danhSachPhongBackUp;
    const { name } = phongChoThue;
    const { setDanhSachPhongFilter } = quanLyPhongChoThueAction;

    if (danhSachPhongBackUp.filter((item) => item.name === name).length === 0) {
      const result = await quanLyPhongChoThueService.taoPhongChoThue(phongChoThue);

      if (!result) {
        return rejectWithValue(messageNetWorkErr);
      }

      if ('message' in result) {
        return rejectWithValue(result.message);
      }

      await dispatch(getDanhSachPhongChoThueAsync());

      if (searchValue) {
        dispatch(setDanhSachPhongFilter(searchValue));
      }
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
      return rejectWithValue(result.message);
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
      return rejectWithValue(result.message);
    }

    showSuccess(messageUpdateSuccess);
    History.goBack();
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
};
