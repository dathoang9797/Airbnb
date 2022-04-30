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
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import RoomItem from './RoomItem';
import RoomMap from './RoomMap';
import { RoomCSS } from './RoomPage.styles';

function RoomPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [limitValue, setLimitValue] = useState({ minValue: 0, maxValue: 10 });
  const [coordinates, setCoordinates] = useState({ lat: 16.0544563, lng: 108.0717219 });
  const [places, setPlaces] = useState([]);

  const { calendar } = images;
  const dispatch = useDispatch();
  const regionRef = useRef(null);
  const numberEachPage = 10;

  const { setProvinceAction } = quanLyViTriAction;
  const { selectIsLoadingPopupState } = loadingSelector;

  const { getDanhSachPhongChoThueTheoViTriAsync } = quanLyPhongChoThueThunk;
  const { getViTriTheoTenThanhPhoAsync, getDanhSachViTriAsync } = quanLyViTriThunk;

  const { selectDanhSachViTriByProvince, selectProvince } = quanLyViTriSelector;
  const { selectDanhSachPhongChoThueTheoViTri } = quanLyPhongChoThueSelector;

  const isLoadingPopup = useSelector(selectIsLoadingPopupState);
  const danhSachPhongChoThueTheoViTri = useSelector(selectDanhSachPhongChoThueTheoViTri, _.isEqual);
  const danhSachViTriByProvince = useSelector(selectDanhSachViTriByProvince, _.isEqual);
  const provinces = useSelector(selectProvince, shallowEqual);

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

  useEffect(() => {
    Promise.all([
      dispatch(getViTriTheoTenThanhPhoAsync('Cầu Sông Hàn')),
      dispatch(getDanhSachViTriAsync()),
    ]);
  }, [dispatch, getDanhSachViTriAsync, getViTriTheoTenThanhPhoAsync]);

  useEffect(() => {
    if (!danhSachViTriByProvince.length) return;
    const idViTriArr = danhSachViTriByProvince.map((item) => item._id);

    const params = { idViTriArr, isLoading: false, isLoadingPopup: true };
    dispatch(getDanhSachPhongChoThueTheoViTriAsync(params));
  }, [danhSachViTriByProvince, dispatch, getDanhSachPhongChoThueTheoViTriAsync]);

  useEffect(() => {
    if (danhSachPhongChoThueTheoViTri.length > 0) {
      const promiseList = [];
      danhSachPhongChoThueTheoViTri.forEach(async (phong, index) => {
        if (!phong.name) return;
        const locationName = removeSpace(removeUnicode(phong.locationId.name));
        promiseList.push(geoCodeService.getGeoCodeByAddress(phong.name, locationName));
      });

      Promise.all(promiseList).then((data) => {
        console.log({ data });
        setPlaces(data);
      });
    }
  }, [danhSachPhongChoThueTheoViTri]);

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
    const { lng, lat } = coordinates;
    if (!lng || !lat || !provinces?.length) return;
    geoCodeService.getGeoCodeByCoordinates(lng, lat).then((data) => {
      const regionArr = data[0].address_components.map((item, index) => {
        const region = item.long_name;
        const formatRegion = removeUnicode(removeSpace(region));
        return formatRegion;
      });
      const region = regionArr
        .map((item, index) => {
          if (provinces.every((province) => province !== item)) {
            return null;
          }
          return item;
        })
        .filter((item) => item !== null);

      if (regionRef.current !== region) {
        regionRef.current = region;
        dispatch(setProvinceAction(region));
      }
    });
  }, [coordinates, dispatch, provinces, setProvinceAction]);

  const handleChange = (value) => {
    setLimitValue({
      minValue: (value - 1) * numberEachPage,
      maxValue: value * numberEachPage,
    });
  };

  const renderPhongChoThue = () => {
    return (
      <>
        {!danhSachPhongChoThueTheoViTriSlice.length
          ? null
          : danhSachPhongChoThueTheoViTriSlice.map((phong) => {
              return <RoomItem key={phong._id} phong={phong} />;
            })}
        <Pagination
          defaultCurrent={1}
          defaultPageSize={numberEachPage}
          onChange={handleChange}
          total={danhSachPhongChoThueTheoViTri.length}
        />
      </>
    );
  };

  return (
    <Container>
      <Layout>
        <ContentSider trigger={null} collapsible collapsed={collapsed}>
          <span>300+ stays · 1 Sep - 3 Sep · 1 guest</span>
          <h1>Stays in selected map area</h1>
          <Filter>
            <button className='mr-2'>Cancellation flexibility</button>
            <button className='mr-2'>Type of place</button>
            <button className='mr-2'>Price</button>
            <button className='mr-2'>Instant book</button>
            <button className='mr-2'>More filters</button>
          </Filter>
          <Scarcity>
            <img src={calendar} alt='Calendar' />
            <span>
              <span>
                67% of places in Lake District for your dates and guests are already booked.
              </span>
            </span>
            You may want to book soon.
          </Scarcity>
          <List>{renderPhongChoThue()}</List>
        </ContentSider>
        <Map>
          <MainContent>
            {collapsed ? (
              <ButtonShowRoom onClick={handleToggle}>
                <svg
                  viewBox='0 0 32 32'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  role='presentation'
                  focusable='false'
                >
                  <g fill='none'>
                    <path d='m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932' />
                  </g>
                </svg>
                <span>Show Room List</span>
              </ButtonShowRoom>
            ) : (
              <ButtonCollapse onClick={handleToggle}>
                <svg
                  viewBox='0 0 32 32'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  role='presentation'
                  focusable='false'
                >
                  <g fill='none'>
                    <path d='m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932' />
                  </g>
                </svg>
              </ButtonCollapse>
            )}

            {isLoadingPopup ? <SpinnerMap /> : <SearchMap />}
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
