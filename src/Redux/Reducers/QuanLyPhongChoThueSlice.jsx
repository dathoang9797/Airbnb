import { createSlice } from '@reduxjs/toolkit';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { showError } from '@Utils/Common';

const {
  getDanhSachPhongChoThueAsync,
  taoPhongChoThueAsync,
  xoaPhongChoThueAsync,
  capNhatHinhAnhPhongChoThueAsync,
  xoaNhieuPhongAsync,
  getChiTietPhongChoThueAsync,
  capNhatPhongChoThueAsync,
} = quanLyPhongChoThueThunk;

const initialState = {
  danhSachPhongChoThue: [],
  chiTietPhongChoThue: {},
};

const quanLyPhongChoThueSlice = createSlice({
  name: 'quanLyPhongChoThueReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDanhSachPhongChoThueAsync.fulfilled, (state, action) => {
      state.danhSachPhongChoThue = action.payload;
    });
    builder.addCase(getDanhSachPhongChoThueAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(getChiTietPhongChoThueAsync.fulfilled, (state, action) => {
      state.chiTietPhongChoThue = action.payload;
    });
    builder.addCase(getChiTietPhongChoThueAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(xoaPhongChoThueAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(taoPhongChoThueAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(capNhatHinhAnhPhongChoThueAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(xoaNhieuPhongAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(capNhatPhongChoThueAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
  },
});

const { setDanhSachPhongFilter } = quanLyPhongChoThueSlice.actions;

export const quanLyPhongChoThueAction = { setDanhSachPhongFilter };

export default quanLyPhongChoThueSlice.reducer;
