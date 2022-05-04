import React, { useEffect, useMemo, useState } from 'react';
import { FeatureCSS } from './Feature.styles';
import { images } from '@Assets/Images';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector, batch } from 'react-redux';
import { quanLyViTriAction } from '@Redux/Reducers/QuanLyViTriSlice';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import _ from 'lodash';
import { removeSpace, removeUnicode } from '@Utils/Common';

function Feature() {
  const { tphcm, haNoi, daNang, vungTau, canTho, phuQuoc, nhaTrang, hoiAn } = images;
  const urlRoom = process.env.REACT_APP_LINK_ROOM;
  const { Container, FeatureHeader, GridContainer, GirdItem, GirdTitle, GridDesc } = FeatureCSS;
  const provinceArr = [];
  const [next, setNext] = useState(false);

  const [citys, setCitys] = useState([
    { bgImage: tphcm, cityName: 'Thành phố Hồ Chí Minh', rentals: 0 },
    { bgImage: haNoi, cityName: 'Hà Nội', rentals: 0 },
    { bgImage: daNang, cityName: 'Đà Nẵng', rentals: 0 },
    { bgImage: vungTau, cityName: 'Vũng Tàu', rentals: 0 },
    { bgImage: canTho, cityName: 'Cần Thơ', rentals: 0 },
    { bgImage: phuQuoc, cityName: 'Phú Quốc', rentals: 0 },
    { bgImage: nhaTrang, cityName: 'Nha Trang', rentals: 0 },
    { bgImage: hoiAn, cityName: 'Hội An', rentals: 0 },
  ]);
  console.log({ next });
  console.log('render');
  const dispatch = useDispatch();

  const { getDanhSachPhongChoThueTheoViTriAsync } = quanLyPhongChoThueThunk;

  const { setProvincesAction } = quanLyViTriAction;

  const { selectDanhSachViTriByProvince } = quanLyViTriSelector;
  const { selectDanhSachPhongChoThueTheoViTri } = quanLyPhongChoThueSelector;

  const danhSachViTriByProvince = useSelector(selectDanhSachViTriByProvince, _.isEqual);
  const danhSachPhongChoThueTheoViTri = useSelector(selectDanhSachPhongChoThueTheoViTri, _.isEqual);

  useEffect(() => {
    console.log('hello2');
    dispatch(setProvincesAction(provinceArr));
    setNext(true);
  }, [dispatch, provinceArr, setProvincesAction]);

  useEffect(() => {
    if (!next) return;
    console.log('hello');
    const idViTriArr = danhSachViTriByProvince.map((item) => item._id);
    const params = { idViTriArr, isLoading: true, isLoadingPopup: false };
    dispatch(getDanhSachPhongChoThueTheoViTriAsync(params));
  }, [danhSachViTriByProvince, dispatch, getDanhSachPhongChoThueTheoViTriAsync, next]);

  const totalRoomTphcm = useMemo(() => {
    return danhSachPhongChoThueTheoViTri.filter((room) => {
      return (
        removeSpace(removeUnicode(room.locationId.province)) ===
        removeSpace(removeUnicode('Thành phố Hồ Chí Minh'))
      );
    });
  }, [danhSachPhongChoThueTheoViTri]);

  const totalRoomHanoi = useMemo(() => {
    return danhSachPhongChoThueTheoViTri.filter((room) => {
      return (
        removeSpace(removeUnicode(room.locationId.province)) ===
        removeSpace(removeUnicode('Hà Nội'))
      );
    });
  }, [danhSachPhongChoThueTheoViTri]);

  const totalRoomDaNang = useMemo(() => {
    return danhSachPhongChoThueTheoViTri.filter((room) => {
      return (
        removeSpace(removeUnicode(room.locationId.province)) ===
        removeSpace(removeUnicode('Đà Nẵng'))
      );
    });
  }, [danhSachPhongChoThueTheoViTri]);

  const totalRoomVungTau = useMemo(() => {
    return danhSachPhongChoThueTheoViTri.filter((room) => {
      return (
        removeSpace(removeUnicode(room.locationId.province)) ===
        removeSpace(removeUnicode('Vũng Tàu'))
      );
    });
  }, [danhSachPhongChoThueTheoViTri]);

  const totalRoomPhuQuoc = useMemo(() => {
    return danhSachPhongChoThueTheoViTri.filter((room) => {
      return (
        removeSpace(removeUnicode(room.locationId.province)) ===
        removeSpace(removeUnicode('Phú Quốc'))
      );
    });
  }, [danhSachPhongChoThueTheoViTri]);

  const totalRoomNhaTrang = useMemo(() => {
    return danhSachPhongChoThueTheoViTri.filter((room) => {
      return (
        removeSpace(removeUnicode(room.locationId.province)) ===
        removeSpace(removeUnicode('Nha Trang'))
      );
    });
  }, [danhSachPhongChoThueTheoViTri]);

  const totalRoomHoiAn = useMemo(() => {
    return danhSachPhongChoThueTheoViTri.filter((room) => {
      return (
        removeSpace(removeUnicode(room.locationId.province)) ===
        removeSpace(removeUnicode('Hội An'))
      );
    });
  }, [danhSachPhongChoThueTheoViTri]);

  useEffect(() => {
    setCitys([
      { bgImage: tphcm, cityName: 'Thành phố Hồ Chí Minh', rentals: totalRoomTphcm.length },
      { bgImage: haNoi, cityName: 'Hà Nội', rentals: totalRoomHanoi.length },
      { bgImage: daNang, cityName: 'Đà Nẵng', rentals: totalRoomDaNang.length },
      { bgImage: vungTau, cityName: 'Vũng Tàu', rentals: totalRoomVungTau.length },
      { bgImage: canTho, cityName: 'Cần Thơ', rentals: totalRoomDaNang.length },
      { bgImage: phuQuoc, cityName: 'Phú Quốc', rentals: totalRoomPhuQuoc.length },
      { bgImage: nhaTrang, cityName: 'Nha Trang', rentals: totalRoomNhaTrang.length },
      { bgImage: hoiAn, cityName: 'Hội An', rentals: totalRoomHoiAn.length },
    ]);
  }, [
    canTho,
    daNang,
    haNoi,
    hoiAn,
    nhaTrang,
    phuQuoc,
    totalRoomDaNang,
    totalRoomHanoi,
    totalRoomHoiAn,
    totalRoomNhaTrang,
    totalRoomPhuQuoc,
    totalRoomTphcm,
    totalRoomVungTau,
    tphcm,
    vungTau,
  ]);

  const renderCity = () => {
    return citys.map((city, index) => {
      provinceArr.push(city.cityName);
      return (
        <NavLink to={`${urlRoom}/${city.cityName}`} key={`${city}-${index}`}>
          <GirdItem image={city.bgImage}>
            <GirdTitle>{city.cityName}</GirdTitle>
            <GridDesc>{city.rentals} rental</GridDesc>
          </GirdItem>
        </NavLink>
      );
    });
  };

  return (
    <Container>
      <FeatureHeader>
        <GirdTitle>Khám phá những điểm đến gần đây</GirdTitle>
      </FeatureHeader>
      <GridContainer>{renderCity()}</GridContainer>
    </Container>
  );
}

export default Feature;
