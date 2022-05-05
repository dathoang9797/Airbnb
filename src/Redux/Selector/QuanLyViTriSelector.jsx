import { createSelector } from '@reduxjs/toolkit';
import { removeSpace, removeUnicode } from '@Utils/Common';
import { provincesVietNam } from '@Utils/Common';

const selectDanhSachViTri = (state) => state.QuanLyViTriReducer.danhSachViTri;

const selectChiTietViTri = (state) => state.QuanLyViTriReducer.chiTietViTri;

const selectorProvinces = (state) => state.QuanLyViTriReducer.provinces;

const selectorCityName = (state) => state.QuanLyViTriReducer.cityName;

const selectDanhSachViTriByProvince = createSelector(
  selectDanhSachViTri,
  selectorProvinces,
  (danhSachViTri, provinces) => {
    if (!provinces.length) return [];
    const result = provinces.map((province) => {
      return danhSachViTri.filter((viTri) => {
        return removeSpace(removeUnicode(viTri.province)) === removeSpace(removeUnicode(province));
      });
    });
    return result.flat();
  }
);

const selectDanhSachProvince = createSelector(selectDanhSachViTri, (danhSachViTri) => {
  if (!danhSachViTri.length) return [];
  const provinceArr = danhSachViTri
    .map((viTri) => {
      return removeSpace(removeUnicode(viTri.province));
    })
    //Remove element duplicate
    .filter((item, provinceIndex, thisProvinceArr) => {
      return thisProvinceArr.indexOf(item) === provinceIndex;
    }) //Remove element undefined
    .filter((province) => {
      return province !== undefined;
    }) //Remove element empty
    .filter((province) => {
      return province.length !== 0;
    })
    .filter((province) => {
      return province.length !== 1;
    });
  return provincesVietNam
    .map((provinceVietNam) => {
      return provinceArr.filter(
        (province) => removeSpace(removeUnicode(provinceVietNam)) === province
      );
    })
    .flat();
});

export const quanLyViTriSelector = {
  selectDanhSachViTri,
  selectDanhSachViTriByProvince,
  selectDanhSachProvince,
  selectChiTietViTri,
  selectorCityName,
};
