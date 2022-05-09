import ButtonScrollTop from '@Components/ButtonScrollTop';
import { quanLyDanhGiaSelector, quanLyPhongChoThueSelector } from '@Redux/Selector';
import { quanLyDanhGiaThunk, quanLyPhongChoThueThunk } from '@Redux/Thunk';
import { geoCodeService } from '@Services/GeoCodeService';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailBooking from './DetailBooking';
import DetailGridImages from './DetailGridImages';
import DetailMap from './DetailMap';
import { DetailPageCSS } from './DetailPage.styles';
import DetailReview from './DetailReview';
import DetailTitle from './DetailTitle';

function DetailPage() {
  const [place, setPlace] = useState({ lat: 0, lng: 0, address: '' });

  const dispatch = useDispatch();
  const { idRoom } = useParams();
  const { Container } = DetailPageCSS;

  const { selectDanhSachDanhGia } = quanLyDanhGiaSelector;
  const { selectChiTietPhongChoThue } = quanLyPhongChoThueSelector;

  const { getDanhSachDanhGiaAsync } = quanLyDanhGiaThunk;
  const { getChiTietPhongChoThueAsync } = quanLyPhongChoThueThunk;

  const danhSachDanhGia = useSelector(selectDanhSachDanhGia, shallowEqual);
  const chiTietPhong = useSelector(selectChiTietPhongChoThue, _.isEqual);

  const { name, image, locationId } = chiTietPhong;

  useEffect(() => {
    Promise.all([
      dispatch(getDanhSachDanhGiaAsync()),
      dispatch(getChiTietPhongChoThueAsync(idRoom)),
    ]);
  }, [dispatch, getChiTietPhongChoThueAsync, getDanhSachDanhGiaAsync, idRoom]);

  useEffect(() => {
    if (!locationId?.province) return;
    geoCodeService.getGeoCodeByAddress(name, locationId.province, true, false).then((data) => {
      const { lat, lng } = data[0].geometry.location;
      const address = data[0].formatted_address;
      setPlace({ lat, lng, address });
    });
  }, [name, locationId]);

  return (
    <Container>
      <DetailTitle name={name} />
      <DetailGridImages image={image} />
      <DetailBooking chiTietPhong={chiTietPhong} />
      <DetailReview danhSachDanhGia={danhSachDanhGia} />
      <DetailMap place={place} province={locationId?.province ?? ''} />
      <ButtonScrollTop />
    </Container>
  );
}

export default DetailPage;
