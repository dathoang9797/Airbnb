import { createSlice } from '@reduxjs/toolkit';
import { quanLyVeThunk } from '@Redux/Thunk/QuanLyVeThunk';
import { showError } from '@Utils/Common';
const initialState = { danhSachVe: [], chiTietVe: {} };

const { getDanhSachVeAsync } = quanLyVeThunk;

const quanLyVeSlice = createSlice({
  name: 'quanLyVeReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDanhSachVeAsync.fulfilled, (state, action) => {
      state.danhSachVe = action.payload;
    });
    builder.addCase(getDanhSachVeAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
  },
});

export default quanLyVeSlice.reducer;
