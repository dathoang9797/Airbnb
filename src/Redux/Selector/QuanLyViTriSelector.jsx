import { createSelector } from '@reduxjs/toolkit';
import { removeSpace, removeUnicode } from '@Utils/Common';
import { provincesVietNam, filterSearchValue } from '@Utils/Common';

const selectSearchValue = (state) => state.SearchReducer.searchValue;

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
    });
  const thanhPho = 'tp.';

  return provincesVietNam
    .map((provinceVietNam) => {
      return provinceArr.filter((province) => {
        if (removeSpace(removeUnicode(provinceVietNam)).includes(thanhPho)) {
          return removeSpace(removeUnicode(provinceVietNam)).slice(thanhPho.length) === province;
        }
        return removeSpace(removeUnicode(provinceVietNam)) === province;
      });
    })
    .flat();
});

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
  selectDanhSachViTriByProvince,
  selectDanhSachProvince,
  selectChiTietViTri,
  selectorCityName,
  selectDanhViTriFilter,
};
