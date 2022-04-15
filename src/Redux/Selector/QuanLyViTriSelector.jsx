import { createSelector } from '@reduxjs/toolkit';
import { removeSpace, removeUnicode } from '@Utils/Common';

const selectDanhSachViTri = (state) => state.QuanLyViTriReducer.danhSachViTri;

const selectViTriTheoThanhPho = (state) => state.QuanLyViTriReducer.viTriTheoThanhPho;

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

export const quanLyViTriSelector = {
  selectDanhSachViTri,
  selectViTriTheoThanhPho,
  selectIdViTriTheoThanhPho,
  selectDanhSachViTriByProvince,
  selectProvince,
};
