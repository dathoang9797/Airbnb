import { createSelector } from '@reduxjs/toolkit';
import { removeSpace, removeUnicode } from '@Utils/Common';
import { filterSearchValue } from '@Utils/Common';
import { sortValue } from '@Utils/Common';
import _ from 'lodash';

const selectSearchValue = (state) => state.SearchReducer.searchValue;

const selectDanhSachViTri = (state) => state.QuanLyViTriReducer.danhSachViTri;

const selectChiTietViTri = (state) => state.QuanLyViTriReducer.chiTietViTri;

const selectorProvinces = (state) => state.QuanLyViTriReducer.provinces;

const selectorCityName = (state) => state.QuanLyViTriReducer.cityName;

const selectorDanhSachProvinces = (state) => state.QuanLyViTriReducer.danhSachProvince;

const selectDanhSachViTriByProvince = createSelector(
  selectDanhSachViTri,
  selectorProvinces,
  (danhSachViTri, provinces) => {
    if (!provinces.length) return [];
    const result = provinces
      .map((province) => {
        return danhSachViTri.filter((viTri) => {
          const formatProvinceViTri = removeUnicode(removeSpace(viTri.province));
          const formatProvince = removeUnicode(removeSpace(province));
          if (formatProvince.length > formatProvinceViTri.length) {
            return formatProvince.includes(formatProvinceViTri);
          }
          return formatProvinceViTri.includes(formatProvince);
        });
      })
      .flat();
    const resultRemoveDuplicate = [...new Set(result)];
    return resultRemoveDuplicate;
  }
);

const selectDanhSachProvinceFilter = createSelector(
  selectDanhSachViTri,
  selectorDanhSachProvinces,
  (danhSachViTri, danhSachProvince) => {
    if (!danhSachViTri.length || !danhSachProvince.length) return [];

    const provinceDanhSachViTriArr = danhSachViTri.map((viTri) => {
      return removeSpace(removeUnicode(viTri.province));
    });

    const provinceDanhSachProvinceArr = danhSachProvince.map((province) => {
      return removeSpace(removeUnicode(province.province_name));
    });
    const result = [...provinceDanhSachViTriArr, ...provinceDanhSachProvinceArr];
    return result.sort(sortValue);
  }
);

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
  selectDanhSachProvinceFilter,
  selectChiTietViTri,
  selectorCityName,
  selectDanhViTriFilter,
  selectorDanhSachProvinces,
};
