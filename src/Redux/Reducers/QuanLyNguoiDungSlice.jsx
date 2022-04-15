import { quanLyNguoiDungThunk } from '@Redux/Thunk/QuanLyNguoiDungThunk';
import { createSlice } from '@reduxjs/toolkit';
import { showError } from '@/Utils/Common';

const {
  setUserInfoAsync,
  setRegisterUserInfoAsync,
  getDanhSachNguoiDungAsync,
  xoaNguoiDungAsync,
  capNhatNguoiDungAsync,
  getChiTietNguoiDungAsync,
  capNhatAnhDaiDienAsync,
  taoNguoiDungAsync,
  xoaNhieuNguoiDungAsync,
} = quanLyNguoiDungThunk;

const initialState = {
  userInfo: {},
  danhSachNguoiDung: [],
  chiTietNguoiDung: {},
  danhSachNguoiDungBackUp: [],
  searchValue: '',
};

const quanLyNguoiDungSlice = createSlice({
  name: 'quanLyNguoiDungReducer',
  initialState,
  reducers: {
    setDanhSachNguoiDungFilter: (state, action) => {
      state.searchValue = action.payload.trim().toLowerCase();
      if (!state.searchValue.length) {
        state.danhSachNguoiDung = state.danhSachNguoiDungBackUp;
        return;
      }

      state.danhSachNguoiDung = state.danhSachNguoiDungBackUp.filter((nguoiDung, index) => {
        if (!nguoiDung.name) return null;
        return nguoiDung.name.toLowerCase().indexOf(state.searchValue) > -1;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setUserInfoAsync.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
    builder.addCase(setUserInfoAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(setRegisterUserInfoAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });

    builder.addCase(getDanhSachNguoiDungAsync.fulfilled, (state, action) => {
      state.danhSachNguoiDungBackUp = action.payload;
      const searchValue = state.searchValue.trim().toLowerCase();
      if (!searchValue.length) {
        state.danhSachNguoiDung = state.danhSachNguoiDungBackUp;
        return;
      }

      state.danhSachNguoiDung = state.danhSachNguoiDungBackUp.filter((nguoiDung, index) => {
        if (!nguoiDung.name) return null;
        return nguoiDung.name.toLowerCase().indexOf(searchValue) > -1;
      });
    });
    builder.addCase(getDanhSachNguoiDungAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(xoaNguoiDungAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(xoaNhieuNguoiDungAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(capNhatAnhDaiDienAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(taoNguoiDungAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(getChiTietNguoiDungAsync.fulfilled, (state, action) => {
      state.chiTietNguoiDung = action.payload;
    });
    builder.addCase(getChiTietNguoiDungAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(capNhatNguoiDungAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
  },
});
const { setDanhSachNguoiDungFilter } = quanLyNguoiDungSlice.actions;

export const quanLyNguoiDungAction = { setDanhSachNguoiDungFilter };

export default quanLyNguoiDungSlice.reducer;
