import { QuanLyNguoiDungModel } from '@Core/Models/QuanLyNguoiDungModel';
import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { createSlice } from '@reduxjs/toolkit';
import { showError } from '@Utils/Alert/PopUp';

const { setUserInfoAsync, setRegisterUserInfoAsync } = quanLyNguoiDungThunk;
const quanLyNguoiDungState = new QuanLyNguoiDungModel();
const initialState = { userInfo: { ...quanLyNguoiDungState } };

const quanLyNguoiDungSlice = createSlice({
  name: 'quanLyNguoiDungReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUserInfoAsync.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
    builder.addCase(setUserInfoAsync.rejected, (state, action) => {
      if (!action.payload) return;
      showError(action.payload);
    });
    builder.addCase(setRegisterUserInfoAsync.rejected, (state, action) => {
      if (!action.payload) return;
      showError(action.payload);
    });
  },
});

export default quanLyNguoiDungSlice.reducer;
