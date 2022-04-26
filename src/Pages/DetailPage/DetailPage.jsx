import ButtonScrollTop from '@Components/ButtonScrollTop';
import { quanLyDanhGiaSelector, quanLyPhongChoThueSelector } from '@Redux/Selector';
import { quanLyDanhGiaThunk, quanLyPhongChoThueThunk } from '@Redux/Thunk';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import BookingDetailInfo from './BookingDetailInfo';
import BookingDetailMap from './BookingDetailMap';
import BookingDetailPrice from './BookingDetailPrice';
import BookingDetailReview from './BookingDetailReview';
import BookingDetailUtility from './BookingDetailUtility';
import { DetailPageCSS } from './Detail.styles';
import GridImagesDetail from './GridImagesDetail';
import TitleDetail from './TitleDetail';

function DetailPage() {
  const dispatch = useDispatch();
  const { selectDanhSachDanhGia } = quanLyDanhGiaSelector;
  const { selectChiTietPhongChoThue } = quanLyPhongChoThueSelector;
  const { DetailContainer, ContentLeft, ContentRight, BookingContainer } = DetailPageCSS;
  const { getDanhSachDanhGiaAsync } = quanLyDanhGiaThunk;
  const { getChiTietPhongChoThueAsync } = quanLyPhongChoThueThunk;
  const danhSachDanhGia = useSelector(selectDanhSachDanhGia, shallowEqual);
  const chiTietPhong = useSelector(selectChiTietPhongChoThue, _.isEqual);

  const {
    deleteAt,
    _id,
    locationId,
    __v,
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
  } = chiTietPhong;

  useEffect(() => {
    Promise.all([
      dispatch(getDanhSachDanhGiaAsync()),
      dispatch(getChiTietPhongChoThueAsync('61699651efe193001c0a5bda')),
    ]);
  }, [dispatch, getChiTietPhongChoThueAsync, getDanhSachDanhGiaAsync]);

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
        </ContentLeft>
        <ContentRight>
          <BookingDetailPrice price={price} roomId={_id} />
        </ContentRight>
        <BookingDetailReview danhSachDanhGia={danhSachDanhGia} />
        <BookingDetailMap />
      </BookingContainer>
      <ButtonScrollTop />
    </DetailContainer>
  );
}

export default DetailPage;
