import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import { createSlice } from '@reduxjs/toolkit';
import { showError } from '@Utils/Common';

const initialState = {
  danhSachViTri: [],
  chiTietViTri: {},
  viTriTheoThanhPho: {},
  province: '',
};

const {
  getChiTietViTriAsync,
  getDanhSachViTriAsync,
  getViTriTheoTenThanhPhoAsync,
  xoaNhieuViTrigAsync,
  xoaViTriAsync,
  taoviTriAsync,
  capNhatViTriAsync,
} = quanLyViTriThunk;

const quanLyViTriSlice = createSlice({
  name: 'quanLyViTriReducer',
  initialState,
  reducers: {
    setProvinceAction: (state, action) => {
      state.province = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDanhSachViTriAsync.fulfilled, (state, action) => {
      state.danhSachViTri = action.payload;
    });
    builder.addCase(getDanhSachViTriAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(getChiTietViTriAsync.fulfilled, (state, action) => {
      state.chiTietViTri = action.payload;
    });
    builder.addCase(getChiTietViTriAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(taoviTriAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(xoaNhieuViTrigAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(xoaViTriAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(capNhatViTriAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(getViTriTheoTenThanhPhoAsync.fulfilled, (state, action) => {
      state.viTriTheoThanhPho = action.payload[0];
    });
    builder.addCase(getViTriTheoTenThanhPhoAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
  },
});

const { setProvinceAction } = quanLyViTriSlice.actions;

export const quanLyViTriAction = {
  setProvinceAction,
};
export default quanLyViTriSlice.reducer;
