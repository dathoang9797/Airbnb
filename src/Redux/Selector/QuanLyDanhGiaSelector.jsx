import { createSelector } from '@reduxjs/toolkit';
import { filterSearchValue } from '@Utils/Common';

const selectDanhSachDanhGia = (state) => state.QuanLyDanhGiaReducer.danhSachDanhGia;

const selectSearchValue = (state) => state.SearchReducer.searchValue;

const selectIdChiTietDanhGia = (state) => state.QuanLyDanhGiaReducer.idChiTietDanhGia;

const selectDanhSachDanhGiaFilter = createSelector(
  selectDanhSachDanhGia,
  selectSearchValue,
  (danhSachDanhGia, searchValue) => {
    if (!searchValue?.length) return danhSachDanhGia;
    const keyTypeFilterEvaluate = process.env.REACT_APP_KEY_FILTER_EVALUATE_LIST;
    const cloneDanhSachDanhGia = [...danhSachDanhGia];
    return filterSearchValue(searchValue, cloneDanhSachDanhGia, keyTypeFilterEvaluate);
  }
);

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
