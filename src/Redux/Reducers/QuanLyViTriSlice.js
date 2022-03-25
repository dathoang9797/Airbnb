import { QuanLyViTriModel } from '@Core/Models/QuanLyViTriModel';
import { createSlice } from '@reduxjs/toolkit';

const initialState = new QuanLyViTriModel()

const quanLyViTriSlice = createSlice({
  name: 'quanLyViTriReducer',
  initialState,
  reducers: {

  },
});



export default quanLyViTriSlice.reducer;
