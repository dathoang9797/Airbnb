import { QuanLyDanhGiaModel } from '@Core/Models/QuanLyDanhGiaModel';
import { createSlice } from '@reduxjs/toolkit';
const quanLyDanhGiaState = new QuanLyDanhGiaModel();
const initialState = { ...quanLyDanhGiaState };

const quanLyDanhGiaSlice = createSlice({
  name: 'quanLyDanhGiaReducer',
  initialState,
  reducers: {},
});

export default quanLyDanhGiaSlice.reducer;
