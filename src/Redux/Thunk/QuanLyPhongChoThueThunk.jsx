import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyPhongChoThueService } from '@Services/QuanLyPhongChoThueService';

const getDanhSachPhongChoThueAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/getDanhSachPhongChoThueAsync',
  async (_, { rejectWithValue }) => {
    const result = await quanLyPhongChoThueService.layTatCaPhongChoThue();

    if ('kind' in result && result.kind === 'ObjectId') {
      return rejectWithValue('Id này ko có');
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }

    if (!result.length) {
      return rejectWithValue('Không có dữ liệu');
    }

    return result;
  }
);

const getDanhSachPhongChoThueTheoViTriAsync = createAsyncThunk(
  'quanLyPhongChoThueReducer/getDanhSachPhongChoThueTheoViTriAsync',
  async (idViTri, { rejectWithValue }) => {
    const result = await quanLyPhongChoThueService.layPhongChoThueTheoViTri(idViTri);

    if ('kind' in result && result.kind === 'ObjectId') {
      return rejectWithValue('Id này ko có');
    }

    if ('message' in result) {
      return rejectWithValue(result.message);
    }

    if (!result.length) {
      return rejectWithValue('Không có dữ liệu');
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

export const quanLyPhongChoThueThunk = {
  getDanhSachPhongChoThueAsync,
  getDanhSachPhongChoThueTheoViTriAsync,
  getDanhSachPhongChoThueTheoDanhSachViTriAsync,
};
