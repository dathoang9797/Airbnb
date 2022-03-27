import { QuanLyViTriModel } from '@Core/Models/QuanLyViTriModel';
import { createSlice } from '@reduxjs/toolkit';

const quanLyViTriState = new QuanLyViTriModel();
const initialState = { ...quanLyViTriState };

const quanLyViTriSlice = createSlice({
  name: 'quanLyViTriReducer',
  initialState,
  reducers: {},
});

export default quanLyViTriSlice.reducer;
