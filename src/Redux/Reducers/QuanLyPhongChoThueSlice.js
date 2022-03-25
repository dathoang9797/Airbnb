import { QuanLyPhongChoThueModel } from '@Core/Models/QuanLyPhongChoThueModel';
import { createSlice } from '@reduxjs/toolkit';

const initialState = new QuanLyPhongChoThueModel()

const quanLyPhongChoThueSlice = createSlice({
  name: 'quanLyPhongChoThueReducer',
  initialState,
  reducers: {

  },
});



export default quanLyPhongChoThueSlice.reducer;
