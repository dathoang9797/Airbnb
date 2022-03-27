import { QuanLyVeModel } from '@Core/Models/QuanLyVeModel';
import { createSlice } from '@reduxjs/toolkit';

const quanLyVeState = new QuanLyVeModel();
const initialState = { ...quanLyVeState };

const quanLyVeSlice = createSlice({
  name: 'quanLyVeReducer',
  initialState,
  reducers: {},
});

export default quanLyVeSlice.reducer;
