import { createSelector } from '@reduxjs/toolkit';
import { filterSearchValue } from '@Utils/Common';

const selectDanhSachDanhGia = (state) => state.QuanLyDanhGiaReducer.danhSachDanhGia;

const selectSearchValue = (state) => state.SearchReducer.searchValue;

const selectDanhSachDanhGiaFilter = createSelector(
  selectDanhSachDanhGia,
  selectSearchValue,
  (danhSachDanhGia, searchValue) => {
    if (!searchValue.length) return danhSachDanhGia;
    const searchValueFormat = searchValue.trim().toLowerCase();
    const cloneDanhSachDanhGia = [...danhSachDanhGia];
    return filterSearchValue(searchValueFormat, cloneDanhSachDanhGia);
  }
);

const selectIdChiTietDanhGia = (state) => state.QuanLyDanhGiaReducer.idChiTietDanhGia;

const selectChiTietDanhGia = createSelector(
  selectDanhSachDanhGia,
  selectIdChiTietDanhGia,
  (danhSachDanhGia, idDanhGia) => danhSachDanhGia.find((danhGia) => danhGia._id === idDanhGia)
);

export const quanLyDanhGiaSelector = {
  selectDanhSachDanhGia,
  selectDanhSachDanhGiaFilter,
  selectChiTietDanhGia,
};
