import { QuanLyVeModel } from '@Core/Models/QuanLyVeModel';
import { createSlice } from '@reduxjs/toolkit';

const initialState = new QuanLyVeModel()

const quanLyVeSlice = createSlice({
    name: 'quanLyVeReducer',
    initialState,
    reducers: {

    },
});



export default quanLyVeSlice.reducer;
