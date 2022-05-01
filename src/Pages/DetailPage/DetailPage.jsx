import ButtonScrollTop from '@Components/ButtonScrollTop';
import { quanLyDanhGiaSelector, quanLyPhongChoThueSelector } from '@Redux/Selector';
import { quanLyDanhGiaThunk, quanLyPhongChoThueThunk } from '@Redux/Thunk';
import { geoCodeService } from '@Services/GeoCodeService';
import _ from 'lodash';
import React, { useEffect, useState,useLayoutEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookingDetailDatePicker from './BookingDetailDatePicker';
import BookingDetailInfo from './BookingDetailInfo';
import BookingDetailMap from './BookingDetailMap';
import BookingDetailPrice from './BookingDetailPrice';
import BookingDetailReview from './BookingDetailReview';
import BookingDetailUtility from './BookingDetailUtility';
import { DetailPageCSS } from './Detail.styles';
import GridImagesDetail from './GridImagesDetail';
import TitleDetail from './TitleDetail';

function DetailPage() {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  const dispatch = useDispatch();
  const { idRoom } = useParams();
  const { DetailContainer, ContentLeft, ContentRight, BookingContainer } = DetailPageCSS;

  const { selectDanhSachDanhGia } = quanLyDanhGiaSelector;
  const { selectChiTietPhongChoThue } = quanLyPhongChoThueSelector;

  const { getDanhSachDanhGiaAsync } = quanLyDanhGiaThunk;
  const { getChiTietPhongChoThueAsync } = quanLyPhongChoThueThunk;

  const danhSachDanhGia = useSelector(selectDanhSachDanhGia, shallowEqual);
  const chiTietPhong = useSelector(selectChiTietPhongChoThue, _.isEqual);

  const {
    _id,
    name,
    guests,
    bedRoom,
    bath,
    description,
    price,
    elevator,
    hotTub,
    pool,
    indoorFireplace,
    dryer,
    gym,
    kitchen,
    wifi,
    heating,
    cableTV,
    image,
    locationId,
  } = chiTietPhong;

  useEffect(() => {
    Promise.all([
      dispatch(getDanhSachDanhGiaAsync()),
      dispatch(getChiTietPhongChoThueAsync(idRoom)),
    ]);
  }, [dispatch, getChiTietPhongChoThueAsync, getDanhSachDanhGiaAsync, idRoom]);

  useEffect(() => {
    if (!locationId?.province) return;
    geoCodeService.getGeoCodeByAddress(name, locationId.province, true,false).then((data) => {
      const { lat, lng } = data[0].geometry.location;
      setCoordinates({ lat, lng });
    });
  }, [name, locationId]);

  return (
    <DetailContainer>
      <TitleDetail name={name} />
      <GridImagesDetail image={image} />
      <BookingContainer>
        <ContentLeft>
          <BookingDetailInfo
            guests={guests}
            bedRoom={bedRoom}
            bath={bath}
            description={description}
          />
          <BookingDetailUtility
            elevator={elevator}
            hotTub={hotTub}
            pool={pool}
            indoorFireplace={indoorFireplace}
            dryer={dryer}
            gym={gym}
            kitchen={kitchen}
            wifi={wifi}
            heating={heating}
            cableTV={cableTV}
          />
          <BookingDetailDatePicker price={price} roomId={_id} />
        </ContentLeft>
        <ContentRight>
          <BookingDetailPrice price={price} roomId={_id} />
        </ContentRight>
        <BookingDetailReview danhSachDanhGia={danhSachDanhGia} />
        <BookingDetailMap coordinates={coordinates} province={locationId?.province ?? ''} />
      </BookingContainer>
      <ButtonScrollTop />
    </DetailContainer>
  );
}

export default DetailPage;
