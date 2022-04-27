import { createSelector } from '@reduxjs/toolkit';
import { filterSearchValue } from '@Utils/Common';

const selectDanhSachVe = (state) => state.QuanLyVeReducer.danhSachVe;

const selectSearchValue = (state) => state.SearchReducer.searchValue;

const selectDanhSachVeFilter = createSelector(
  selectDanhSachVe,
  selectSearchValue,
  (danhSachVe, searchValue) => {
    if (!searchValue.length) return danhSachVe;
    const searchValueFormat = searchValue.trim().toLowerCase();
    const cloneDanhSachVe = [...danhSachVe];
    return filterSearchValue(searchValueFormat, cloneDanhSachVe);
  }
);

export const quanLyVeSelector = {
  selectDanhSachVe,
  selectDanhSachVeFilter,
};
