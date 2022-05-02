import { images } from '@Assets/Images';
import { ButtonScrollTop, SearchMap, SpinnerMap } from '@Components';
import { quanLyViTriAction } from '@Redux/Reducers/QuanLyViTriSlice';
import { loadingSelector } from '@Redux/Selector/LoadingSelect';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import { geoCodeService } from '@Services/GeoCodeService';
import { removeSpace, removeUnicode } from '@Utils/Common';
import { Layout } from 'antd';
import _ from 'lodash';
import React, { useEffect, useMemo, useRef, useState, useLayoutEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import RoomItem from './RoomItem';
import RoomMap from './RoomMap';
import { RoomCSS } from './RoomPage.styles';

function RoomPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [limitValue, setLimitValue] = useState({ minValue: 0, maxValue: 10 });
  const [coordinates, setCoordinates] = useState({ lat: 16.0544563, lng: 108.0717219 });
  const [places, setPlaces] = useState([]);
  const dispatch = useDispatch();
  const [showSpinnerMap, setShowSpinnerMap] = useState(false);

  const { calendar } = images;
  const regionRef = useRef(null);
  const numberEachPage = 10;

  const { setProvinceAction } = quanLyViTriAction;

  const { getDanhSachPhongChoThueTheoViTriAsync } = quanLyPhongChoThueThunk;
  const { getViTriTheoTenThanhPhoAsync, getDanhSachViTriAsync } = quanLyViTriThunk;

  const { selectDanhSachViTriByProvince, selectDanhSachProvince } = quanLyViTriSelector;
  const { selectDanhSachPhongChoThueTheoViTri } = quanLyPhongChoThueSelector;
  const { selectIsLoadingPopupState } = loadingSelector;

  const isLoadingPopup = useSelector(selectIsLoadingPopupState);
  const danhSachPhongChoThueTheoViTri = useSelector(selectDanhSachPhongChoThueTheoViTri, _.isEqual);
  const danhSachViTriByProvince = useSelector(selectDanhSachViTriByProvince, _.isEqual);
  const danhSachProvince = useSelector(selectDanhSachProvince, shallowEqual);

  const danhSachPhongChoThueTheoViTriSlice = useMemo(() => {
    const { maxValue, minValue } = limitValue;
    return danhSachPhongChoThueTheoViTri.slice(minValue, maxValue);
  }, [danhSachPhongChoThueTheoViTri, limitValue]);

  const {
    Container,
    ContentSider,
    Filter,
    List,
    MainContent,
    Map,
    Pagination,
    Scarcity,
    ButtonCollapse,
    ButtonShowRoom,
  } = RoomCSS;
  // const viTriTheoThanhPho = useSelector(selectViTriTheoThanhPho, shallowEqual);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  useLayoutEffect(() => window.scrollTo(0, 0));

  useEffect(() => {
    Promise.all([
      dispatch(getViTriTheoTenThanhPhoAsync('Cầu Sông Hàn')),
      dispatch(getDanhSachViTriAsync()),
    ]);
  }, [dispatch, getDanhSachViTriAsync, getViTriTheoTenThanhPhoAsync]);

  useEffect(() => {
    if (!danhSachViTriByProvince.length) return;
    console.log({ danhSachViTriByProvince });
    const idViTriArr = danhSachViTriByProvince.map((item) => item._id);
    const params = { idViTriArr, isLoading: false, isLoadingPopup: true };
    dispatch(getDanhSachPhongChoThueTheoViTriAsync(params));
  }, [danhSachViTriByProvince, dispatch, getDanhSachPhongChoThueTheoViTriAsync]);

  useEffect(() => {
    if (!danhSachPhongChoThueTheoViTri.length) return;
    Promise.all(
      danhSachPhongChoThueTheoViTri.map((phong) => {
        if (!phong.name) return null;
        const locationName = removeSpace(removeUnicode(phong.locationId?.province));
        return geoCodeService.getGeoCodeByAddress(phong.name, locationName);
      })
    ).then((data) => {
      console.log({ data });
      setPlaces(data);
    });
  }, [danhSachPhongChoThueTheoViTri]);

  useEffect(() => {
    if (isLoadingPopup) return setShowSpinnerMap(true);
    const waitingCloseLoadingPopup = setTimeout(() => {
      setShowSpinnerMap(false);
    }, 500);
    return () => clearTimeout(waitingCloseLoadingPopup);
  }, [isLoadingPopup]);

  // useEffect(() => {
  //   if (!viTriTheoThanhPho.name) return;
  //   const { province } = viTriTheoThanhPho;
  //   geoCodeService.getGeoCodeByCity(province).then((data) => {
  //     const lat = data[0].geometry.location.lat;
  //     const lng = data[0].geometry.location.lng;
  //     setCoordinates({ lat, lng });
  //   });
  // }, [viTriTheoThanhPho]);

  useEffect(() => {
    if (!danhSachProvince.length) return;
    const { lng, lat } = coordinates;
    geoCodeService.getGeoCodeByCoordinates(lng, lat).then((data) => {
      const province = data[0].address_components
        .map((item, index) => {
          const province = item.long_name;
          const formatProvince = removeUnicode(removeSpace(province));
          return formatProvince;
        })
        .map((formatProvince) => {
          if (danhSachProvince.every((province) => province !== formatProvince)) {
            return null;
          }
          return formatProvince;
        })
        .filter((item) => item !== null);

      if (!_.isEqual(regionRef.current, province)) {
        regionRef.current = province;
        dispatch(setProvinceAction(province));
      }
    });
  }, [coordinates, dispatch, danhSachProvince, setProvinceAction]);

  const handleChange = (value) => {
    setLimitValue({
      minValue: (value - 1) * numberEachPage,
      maxValue: value * numberEachPage,
    });
  };

  const renderPhongChoThue = useMemo(() => {
    if (!danhSachPhongChoThueTheoViTri.length) return null;
    return (
      <>
        {danhSachPhongChoThueTheoViTriSlice.map((phong) => {
          return <RoomItem key={phong._id} phong={phong} showSpinnerMap={showSpinnerMap} />;
        })}
        <Pagination
          defaultCurrent={1}
          defaultPageSize={numberEachPage}
          onChange={handleChange}
          total={danhSachPhongChoThueTheoViTri.length}
        />
      </>
    );
  }, [danhSachPhongChoThueTheoViTri.length, danhSachPhongChoThueTheoViTriSlice, showSpinnerMap]);

  return (
    <Container>
      <Layout>
        <ContentSider trigger={null} collapsible collapsed={collapsed}>
          <span>Hơn 300 chỗ ở tại khu vực trên bản đồ</span>

          {/* <Filter>
            <button className='mr-2'>Cancellation flexibility</button>
            <button className='mr-2'>Type of place</button>
            <button className='mr-2'>Price</button>
            <button className='mr-2'>Instant book</button>
            <button className='mr-2'>More filters</button>
          </Filter> */}
          <Scarcity>
            <img src={calendar} alt='Calendar' />
            <span>
              Hơn 95.000 khách đã ở tại Thành phố Hồ Chí Minh. Trung bình họ xếp hạng chỗ ở của mình
              ở mức 4.8/5 sao.
            </span>
          </Scarcity>
          <List>{renderPhongChoThue}</List>
        </ContentSider>
        <Map>
          <MainContent>
            {collapsed ? (
              <ButtonShowRoom onClick={handleToggle}>
                <IoIosArrowForward />
                <span>Show Room List</span>
              </ButtonShowRoom>
            ) : (
              <ButtonCollapse onClick={handleToggle}>
                <IoIosArrowBack />
              </ButtonCollapse>
            )}

            {showSpinnerMap ? <SpinnerMap /> : <SearchMap />}
            <RoomMap
              places={places}
              coordinates={coordinates}
              danhSachPhongChoThueTheoViTriSlice={danhSachPhongChoThueTheoViTriSlice}
              setCoordinates={setCoordinates}
            />
          </MainContent>
        </Map>
      </Layout>
      <ButtonScrollTop />
    </Container>
  );
}

export default RoomPage;
