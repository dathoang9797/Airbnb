import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyVeService } from '@Services/QuanLyVeService';
import { messageApp } from '@Utils/Common';
import { capitalize } from '@Utils/Common';

const { messageNetWorkErr, messageUsersIsEmpty } = messageApp;

const getDanhSachVeAsync = createAsyncThunk(
  'quanLyVeReducer/getDanhSachVeAsync',
  async (_, { rejectWithValue, getState }) => {
    const result = await quanLyVeService.layDanhSachVe();

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

export const quanLyVeThunk = {
  getDanhSachVeAsync,
};
