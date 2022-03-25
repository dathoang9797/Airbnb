import { QuanLyNguoiDungModel } from '@Core/Models/QuanLyNguoiDungModel';
import { createSlice } from '@reduxjs/toolkit';

const initialState = new QuanLyNguoiDungModel()

const quanLyNguoiDungSlice = createSlice({
  name: 'quanLyNguoiDungReducer',
  initialState,
  reducers: {

  },
});



export default quanLyNguoiDungSlice.reducer;
