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
  getDanhSachPhongChoThueTheoViTriAsync,
  datPhongPhongChoThueAsync,
} = quanLyPhongChoThueThunk;

const initialState = {
  danhSachPhongChoThue: [],
  chiTietPhongChoThue: {},
  danhSachPhongChoThueTheoViTri: [],
  danhSachPhongChoThueTheoViTriBackUp: [],
  bookingRoom: {},
  totalPriceBooking: 0,
};

const quanLyPhongChoThueSlice = createSlice({
  name: 'quanLyPhongChoThueReducer',
  initialState,
  reducers: {
    setBookingRoomAction: (state, action) => {
      state.bookingRoom = action.payload;
    },
    setTotalPriceBookingAction: (state, action) => {
      state.totalPriceBooking = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDanhSachPhongChoThueAsync.fulfilled, (state, action) => {
      state.danhSachPhongChoThue = action.payload;
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
    builder.addCase(getDanhSachPhongChoThueTheoViTriAsync.fulfilled, (state, action) => {
      if (action.payload.length > 0) {
        state.danhSachPhongChoThueTheoViTri = action.payload;
        state.danhSachPhongChoThueTheoViTriBackUp = action.payload;
      } else {
        state.danhSachPhongChoThueTheoViTri = state.danhSachPhongChoThueTheoViTriBackUp;
      }
    });
    builder.addCase(getDanhSachPhongChoThueTheoViTriAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
    builder.addCase(datPhongPhongChoThueAsync.rejected, (state, action) => {
      if (action.payload) {
        showError(action.payload);
      } else {
        showError(action.error.message);
      }
    });
  },
});

const { setBookingRoomAction, setTotalPriceBookingAction } = quanLyPhongChoThueSlice.actions;

export const quanLyPhongChoThueAction = { setBookingRoomAction, setTotalPriceBookingAction };

export default quanLyPhongChoThueSlice.reducer;
