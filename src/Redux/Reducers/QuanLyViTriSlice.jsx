import { createSlice } from '@reduxjs/toolkit';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import { showError } from '@Utils/Common';

const initialState = {
  danhSachViTri: [],
  chiTietViTri: {},
};

const {
  getChiTietViTriAsync,
  getDanhSachViTriAsync,
  getViTriTheoTenThanhPhoAsync,
  xoaNhieuPhongAsync,
  xoaViTriAsync,
  taoviTriAsync,
  capNhatViTriAsync,
} = quanLyViTriThunk;

const quanLyViTriSlice = createSlice({
  name: 'quanLyViTriReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDanhSachViTriAsync.fulfilled, (state, action) => {
      state.danhSachViTri = action.payload;
    });
    builder.addCase(getDanhSachViTriAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(getChiTietViTriAsync.fulfilled, (state, action) => {
      state.chiTietViTri = action.payload;
    });
    builder.addCase(getChiTietViTriAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(taoviTriAsync.rejected, (state, action) => {
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
    builder.addCase(xoaViTriAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(capNhatViTriAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
  },
});

export default quanLyViTriSlice.reducer;
