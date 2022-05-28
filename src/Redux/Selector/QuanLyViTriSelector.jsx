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
    if (!provinces?.length) return [];
    const result = _.uniq(
      provinces
        .map((province) => {
          return danhSachViTri.filter((viTri) => {
            const formatProvinceViTri = removeUnicode(removeSpace(viTri?.province)) ?? '';
            const formatProvince = removeUnicode(removeSpace(province));
            if (formatProvince.length > formatProvinceViTri.length) {
              return formatProvince.includes(formatProvinceViTri);
            }
            return formatProvinceViTri.includes(formatProvince);
          });
        })
        .flat()
    ).filter((item) => item.province);
    return result;
  }
);

const selectDanhSachProvinceFilter = createSelector(
  selectDanhSachViTri,
  selectorDanhSachProvinces,
  (danhSachViTri, danhSachProvince) => {
    if (!danhSachViTri?.length || !danhSachProvince?.length) return [];
    const provinceDanhSachProvince = danhSachProvince.map((province) => province?.province_name);
    const provinceDanhSachViTri = danhSachViTri.map((viTri) => viTri?.province);
    const result = [...provinceDanhSachProvince, ...provinceDanhSachViTri]
      .filter((province) => province)
      .filter((province) => province.length >= 5)
      .map((province) => province)
      .filter((province, index, array) => array.indexOf(province) === index)
      .sort((valueA, valueB) => sortValue(valueA, valueB, 'string'));
    return result;
  }
);

const selectDanhViTriFilter = createSelector(
  selectDanhSachViTri,
  selectSearchValue,
  (danhSachViTri, searchValue) => {
    if (!searchValue?.length) return danhSachViTri;
    const keyTypeFilterLocation = process.env.REACT_APP_KEY_FILTER_LOCATION_LIST;    
    const cloneDanhSachViTri = [...danhSachViTri];
    return filterSearchValue(searchValue, cloneDanhSachViTri, keyTypeFilterLocation);
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
