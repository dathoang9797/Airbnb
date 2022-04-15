import { createSlice } from '@reduxjs/toolkit';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { showError } from '@Utils/Common';

const {
  getDanhSachPhongChoThueAsync,
  taoPhongChoThueAsync,
  xoaPhongChoThueAsync,
  capNhatHinhAnhPhongChoThueAsync,
  xoaNhieuPhongAsync,
  getChiTietPhongChoThueAsync,
  capNhatPhongChoThueAsync,
} = quanLyPhongChoThueThunk;

const initialState = {
  danhSachPhongChoThue: [],
  danhSachPhongBackUp: [],
  searchValue: '',
  chiTietPhongChoThue: {},
};

const quanLyPhongChoThueSlice = createSlice({
  name: 'quanLyPhongChoThueReducer',
  initialState,
  reducers: {
    setDanhSachPhongFilter: (state, action) => {
      state.searchValue = action.payload.trim().toLowerCase();
      if (!state.searchValue.length) {
        state.danhSachPhongChoThue = state.danhSachPhongBackUp;
        return;
      }

      state.danhSachPhongChoThue = state.danhSachPhongBackUp.filter((phongChoThue, index) => {
        if (!phongChoThue.name) return null;
        return phongChoThue.name.toLowerCase().indexOf(state.searchValue) > -1;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDanhSachPhongChoThueAsync.fulfilled, (state, action) => {
      state.danhSachPhongBackUp = action.payload;
      const searchValue = state.searchValue.trim().toLowerCase();
      if (!searchValue.length) {
        state.danhSachPhongChoThue = state.danhSachPhongBackUp;
        return;
      }

      state.danhSachPhongChoThue = state.danhSachPhongBackUp.filter((nguoiDung, index) => {
        if (!nguoiDung.name) return null;
        return nguoiDung.name.toLowerCase().indexOf(searchValue) > -1;
      });
    });
    builder.addCase(getDanhSachPhongChoThueAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(getChiTietPhongChoThueAsync.fulfilled, (state, action) => {
      state.chiTietPhongChoThue = action.payload;
    });
    builder.addCase(getChiTietPhongChoThueAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });

    builder.addCase(xoaPhongChoThueAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(taoPhongChoThueAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(capNhatHinhAnhPhongChoThueAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(xoaNhieuPhongAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(capNhatPhongChoThueAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
  },
});

const { setDanhSachPhongFilter } = quanLyPhongChoThueSlice.actions;

export const quanLyPhongChoThueAction = { setDanhSachPhongFilter };

export default quanLyPhongChoThueSlice.reducer;
