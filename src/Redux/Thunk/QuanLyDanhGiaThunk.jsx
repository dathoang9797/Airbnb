import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyDanhGiaService } from '@Services/QuanLyDanhGiaService';
import { messageApp } from '@Utils/Common';
import { capitalize } from '@Utils/Common';

const { messageNetWorkErr, messageUsersIsEmpty } = messageApp;

const getDanhSachDanhGiaAsync = createAsyncThunk(
  'quanLyDanhGiaReducer/getDanhSachDanhGiaAsync',
  async (_, { rejectWithValue, getState }) => {
    const result = await quanLyDanhGiaService.layTatCaDanhGia();

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
      return rejectWithValue(capitalize(result.message));
    }

    return result;
  }
);

export const quanLyDanhGiaThunk = {
  getDanhSachDanhGiaAsync,
};
