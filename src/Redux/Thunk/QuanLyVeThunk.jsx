import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyVeService } from '@Services/QuanLyVeService';
import { messageApp, showSuccess } from '@Utils/Common';
import { history } from '@Utils/Libs';
import _ from 'lodash';

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
      return rejectWithValue(result.message);
    }

    return result;
  }
);

export const quanLyVeThunk = {
  getDanhSachVeAsync,
};
