import React, { useEffect } from 'react';
import Body from './Body/Body';
import NavBar from './NavBar/NavBar';
import ButtonScrollTop from '@Components/ButtonScrollTop';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { useDispatch, useSelector } from 'react-redux';

export default function HomePage() {
  const dispatch = useDispatch();
  const { getDanhSachViTriAsync } = quanLyViTriThunk;
  const { selectDanhSachViTri } = quanLyViTriSelector;
  const danhSachViTri = useSelector(selectDanhSachViTri);

  const filterProvinces = danhSachViTri
    .map((viTri) => viTri.province)
    .filter((item, provinceIndex, thisProvinceArr) => {
      return thisProvinceArr.indexOf(item) === provinceIndex;
    })
    .filter((province) => {
      return province !== undefined;
    })
    .filter((province) => {
      return province.length !== 0;
    })
    .filter((province) => {
      return province.length !==1 ;
    });

  // const provinceArr = danhSachViTri
  // .map((viTri) => {
  //   return removeSpace(removeUnicode(viTri.province));
  // })
  // //Remove element duplicate
  // .filter((item, provinceIndex, thisProvinceArr) => {
  //   return thisProvinceArr.indexOf(item) === provinceIndex;
  // }) //Remove element undefined
  // .filter((province) => {
  //   return province !== undefined;
  // }) //Remove element empty
  // .filter((province) => {
  //   return province.length !== 0;
  // });

  console.log({ danhSachViTri });
  console.log({ filterProvinces });
  useEffect(() => {
    dispatch(getDanhSachViTriAsync());
  }, [dispatch, getDanhSachViTriAsync]);

  return (
    <div>
      <NavBar />
      <Body />
      <ButtonScrollTop />
    </div>
  );
}
