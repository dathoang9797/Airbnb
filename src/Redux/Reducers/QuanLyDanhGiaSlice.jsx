import { createSlice } from '@reduxjs/toolkit';
import { quanLyDanhGiaThunk } from '@Redux/Thunk/QuanLyDanhGiaThunk';
import { showError } from '@Utils/Common';

const initialState = { danhSachDanhGia: [], chiTietDanhGia: {} };

const { getDanhSachDanhGiaAsync } = quanLyDanhGiaThunk;

const quanLyDanhGiaSlice = createSlice({
  name: 'quanLyDanhGiaReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDanhSachDanhGiaAsync.fulfilled, (state, action) => {
      state.danhSachDanhGia = action.payload;
    });
    builder.addCase(getDanhSachDanhGiaAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
  },
});

export default quanLyDanhGiaSlice.reducer;
