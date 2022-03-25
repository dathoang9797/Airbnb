import { QuanLyDanhGiaModel } from '@Core/Models/QuanLyDanhGiaModel';
import { createSlice } from '@reduxjs/toolkit';

const initialState = new QuanLyDanhGiaModel()

const quanLyDanhGiaSlice = createSlice({
  name: 'quanLyDanhGiaReducer',
  initialState,
  reducers: {

  },
});



export default quanLyDanhGiaSlice.reducer;
