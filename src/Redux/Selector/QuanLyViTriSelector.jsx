import { createSelector } from '@reduxjs/toolkit';
import { removeSpace, removeUnicode } from '@Utils/Common';
import { filterSearchValue } from '@/Utils/Common';

const selectDanhSachViTri = (state) => state.QuanLyViTriReducer.danhSachViTri;

const selectViTriTheoThanhPho = (state) => state.QuanLyViTriReducer.viTriTheoThanhPho;

const selectChiTietViTri = (state) => state.QuanLyViTriReducer.chiTietViTri;

const selectIdViTriTheoThanhPho = createSelector(
  selectViTriTheoThanhPho,
  (viTriTheoThanhPho) => viTriTheoThanhPho._id
);

const selectDanhSachViTriByProvince = (state) => state.QuanLyViTriReducer.danhSachViTriByProvince;

const selectProvince = createSelector(selectDanhSachViTri, (danhSachViTri) => {
  if (!danhSachViTri.length) return;
  const provinceArr = danhSachViTri
    .map((viTri) => {
      return removeSpace(removeUnicode(viTri.province));
    }) //Remove element duplicate
    .filter(function (item, provinceIndex, thisProvinceArr) {
      return thisProvinceArr.indexOf(item) === provinceIndex;
    }) //Remove element undefined
    .filter(function (province) {
      return province !== undefined;
    });
  return provinceArr;
});

const selectSearchValue = (state) => state.SearchReducer.searchValue;

const selectDanhViTriFilter = createSelector(
  selectDanhSachViTri,
  selectSearchValue,
  (danhSachViTri, searchValue) => {
    if (!searchValue.length) return danhSachViTri;
    const searchValueFormat = searchValue.trim().toLowerCase();
    const cloneDanhSachViTri = [...danhSachViTri];
    return filterSearchValue(searchValueFormat, cloneDanhSachViTri);
  }
);

export const quanLyViTriSelector = {
  selectDanhSachViTri,
  selectViTriTheoThanhPho,
  selectIdViTriTheoThanhPho,
  selectDanhSachViTriByProvince,
  selectProvince,
  selectDanhViTriFilter,
  selectChiTietViTri,
};
