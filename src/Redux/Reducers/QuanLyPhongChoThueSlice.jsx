import { QuanLyPhongChoThueModel } from '@Core/Models/QuanLyPhongChoThueModel';
import { createSlice } from '@reduxjs/toolkit';

const quanLyPhongChoThueState = new QuanLyPhongChoThueModel();
const initialState = { ...quanLyPhongChoThueState };
const quanLyPhongChoThueSlice = createSlice({
  name: 'quanLyPhongChoThueReducer',
  initialState,
  reducers: {},
});

export default quanLyPhongChoThueSlice.reducer;
