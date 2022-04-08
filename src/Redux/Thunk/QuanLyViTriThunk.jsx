import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyViTriService } from '@Services/QuanLyViTriService';

const getDanhSachViTriAsync = createAsyncThunk(
  'quanLyViTriReducer/getDanhSachViTriAsync',
  async (_, { rejectWithValue }) => {
    const result = await quanLyViTriService.layTatCaViTri();

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

const getViTriTheoTenThanhPhoAsync = createAsyncThunk(
  'quanLyViTriReducer/getViTriTheoTenThanhPhoAsync',
  async (location, { rejectWithValue }) => {
    const result = await quanLyViTriService.layViTriTheoTenThanhPho(location);

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

export const quanLyViTriThunk = {
  getDanhSachViTriAsync,
  getViTriTheoTenThanhPhoAsync,
};
