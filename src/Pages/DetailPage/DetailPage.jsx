import { localService } from '@/Services/LocalStorageService';
import ButtonScrollTop from '@Components/ButtonScrollTop';
import { quanLyDanhGiaSelector, quanLyPhongChoThueSelector } from '@Redux/Selector';
import { quanLyDanhGiaThunk, quanLyPhongChoThueThunk } from '@Redux/Thunk';
import { geoCodeService } from '@Services/GeoCodeService';
import { messageApp, showWarning } from '@Utils/Common';
import _ from 'lodash';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import DetailBooking from './DetailBooking';
import DetailGridImages from './DetailGridImages';
import DetailMap from './DetailMap';
import { DetailPageCSS } from './DetailPage.styles';
import DetailReview from './DetailReview';
import DetailTitle from './DetailTitle';

function DetailPage() {
  const { Container } = DetailPageCSS;
  const urlHome = process.env.REACT_APP_LINK_HOME;
  const userInfo = localService.getUserInfo();
  const { messageUserNotLogin } = messageApp;

  const [place, setPlace] = useState({ lat: 0, lng: 0, address: '' });
  const dispatch = useDispatch();
  const { idRoom } = useParams();

  const { selectDanhSachDanhGia } = quanLyDanhGiaSelector;
  const { selectChiTietPhongChoThue } = quanLyPhongChoThueSelector;

  const { getDanhSachDanhGiaAsync } = quanLyDanhGiaThunk;
  const { getChiTietPhongChoThueAsync } = quanLyPhongChoThueThunk;

  const danhSachDanhGia = useSelector(selectDanhSachDanhGia, shallowEqual);
  const chiTietPhong = useSelector(selectChiTietPhongChoThue, _.isEqual);
  const { name, image, locationId } = chiTietPhong;
  console.log({ danhSachDanhGia, chiTietPhong });

  useLayoutEffect(() => {
    Promise.all([
      dispatch(getDanhSachDanhGiaAsync()),
      dispatch(getChiTietPhongChoThueAsync(idRoom)),
    ]);
  }, [dispatch, getChiTietPhongChoThueAsync, getDanhSachDanhGiaAsync, idRoom]);

  useLayoutEffect(() => {
    if (!name) return;
    geoCodeService.getGeoCodeByAddress(name, true, false).then((data) => {
      const { lat, lng } = data[0].geometry.location;
      const address = data[0].formatted_address;
      setPlace({ lat, lng, address });
    });
  }, [name, locationId]);

  useEffect(() => {
    if (!userInfo) {
      setTimeout(() => {
        showWarning(messageUserNotLogin);
      }, 500);
    }
  }, [messageUserNotLogin, userInfo]);

  const handleRender = () => {
    if (!userInfo) return <Redirect to={urlHome} />;
    if (_.isEmpty(chiTietPhong) || _.isEmpty(danhSachDanhGia)) return null;
    return (
      <Container>
        <DetailTitle name={name} />
        <DetailGridImages image={image} />
        <DetailBooking chiTietPhong={chiTietPhong} />
        <DetailReview danhSachDanhGia={danhSachDanhGia} />
        <DetailMap place={place} />
        <ButtonScrollTop />
      </Container>
    );
  };

  return handleRender();
}

export default DetailPage;
