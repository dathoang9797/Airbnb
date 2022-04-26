import SearchMap from '@Components/SearchMap';
import { images } from '@Assets/Images';
import RoomItem from '@Pages/RoomPage/RoomItem';
import RoomMap from '@Pages/RoomPage/RoomMap';
import { quanLyViTriAction } from '@Redux/Reducers/QuanLyViTriSlice';
import { quanLyPhongChoThueSelector } from '@Redux/Selector/QuanLyPhongChoThueSelector';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import { geoCodeService } from '@Services/GeoCodeService';
import { removeSpace, removeUnicode } from '@Utils/Common';
import _ from 'lodash';
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RoomCSS } from './RoomPage.styles';

function RoomPage() {
  const { calendar } = images;
  const { getProvinceAction } = quanLyViTriAction;
  const { getDanhSachPhongChoThueTheoViTriAsync, getDanhSachPhongChoThueTheoDanhSachViTriAsync } =
    quanLyPhongChoThueThunk;
  const { getViTriTheoTenThanhPhoAsync, getDanhSachViTriAsync } = quanLyViTriThunk;
  const {
    selectViTriTheoThanhPho,
    selectIdViTriTheoThanhPho,
    selectDanhSachViTriByProvince,
    selectProvince,
  } = quanLyViTriSelector;
  const { selectDanhSachPhongChoThueTheoViTri } = quanLyPhongChoThueSelector;
  const dispatch = useDispatch();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [places, setPlaces] = useState([]);
  const danhSachPhongChoThueTheoViTri = useSelector(selectDanhSachPhongChoThueTheoViTri, _.isEqual);
  const viTriTheoThanhPho = useSelector(selectViTriTheoThanhPho, shallowEqual);
  const idViTri = useSelector(selectIdViTriTheoThanhPho);
  const danhSachViTriByProvince = useSelector(selectDanhSachViTriByProvince, _.isEqual);
  const provinces = useSelector(selectProvince, _.isEqual);
  const danhSachPhongChoThueTheoViTriSlice = useMemo(() => {
    return danhSachPhongChoThueTheoViTri.slice(minValue, maxValue);
  }, [danhSachPhongChoThueTheoViTri, maxValue, minValue]);
  const regionRef = useRef(null);
  const numberEachPage = useMemo(() => 10, []);

  console.log({ danhSachPhongChoThueTheoViTri });
  console.log({ danhSachViTriByProvince });
  console.log({ danhSachPhongChoThueTheoViTriSlice });
  console.log({ places });
  console.log({ provinces });

  useLayoutEffect(() => {
    Promise.all([
      dispatch(getViTriTheoTenThanhPhoAsync('Tháp bà Ponagar')),
      dispatch(getDanhSachViTriAsync()),
    ]);
  }, [dispatch, getDanhSachViTriAsync, getViTriTheoTenThanhPhoAsync]);

  useEffect(() => {
    if (!idViTri) return;
    dispatch(getDanhSachPhongChoThueTheoViTriAsync(idViTri));
  }, [dispatch, getDanhSachPhongChoThueTheoViTriAsync, idViTri]);

  useEffect(() => {
    if (!danhSachViTriByProvince.length) return;
    dispatch(getDanhSachPhongChoThueTheoDanhSachViTriAsync(danhSachViTriByProvince));
  }, [danhSachViTriByProvince, dispatch, getDanhSachPhongChoThueTheoDanhSachViTriAsync]);

  useEffect(() => {
    if (!viTriTheoThanhPho.name) return;
    const { province } = viTriTheoThanhPho;
    geoCodeService.getGeoCodeByCity(province).then((data) => {
      console.log({ data });
      const center = data.features[0].center;
      setCoordinates({ lat: center[1], lng: center[0] });
    });
  }, [viTriTheoThanhPho]);

  useEffect(() => {
    const { lng, lat } = coordinates;
    if (!lng || !lat) return;
    geoCodeService.getGeoCodeByCoordinates(lng, lat).then((data) => {
      const region = data.features.filter((item) => {
        return item.place_type[0] === 'region';
      })[0];
      console.log({ data });
      const provinceRegion = removeSpace(removeUnicode(region.text));
      console.log({ provinceRegion });
      if (regionRef.current !== provinceRegion) {
        regionRef.current = provinceRegion;
        dispatch(getProvinceAction(provinceRegion));
      }
    });
  }, [coordinates, dispatch, getProvinceAction]);

  useEffect(() => {
    if (danhSachPhongChoThueTheoViTriSlice.length > 0) {
      const promiseList = [];
      danhSachPhongChoThueTheoViTriSlice.forEach(async (phong, index) => {
        if (!phong.name) return;
        promiseList.push(geoCodeService.getGeoCodeByAddress(phong.name, phong.locationId.province));
      });
      console.log({ promiseList });
      Promise.all(promiseList).then((data) => {
        setPlaces(data);
      });
    }
  }, [danhSachPhongChoThueTheoViTriSlice]);

  const handleChange = (value) => {
    setMinValue((value - 1) * numberEachPage);
    setMaxValue(value * numberEachPage);
  };

  const renderPhongChoThue = () => {
    return (
      <>
        {danhSachPhongChoThueTheoViTriSlice.map((phong) => {
          return <RoomItem key={phong._id} phong={phong} />;
        })}
        <RoomCSS.Pagination
          defaultCurrent={1}
          defaultPageSize={numberEachPage}
          onChange={handleChange}
          total={danhSachPhongChoThueTheoViTri.length}
        />
      </>
    );
  };

  return (
    <RoomCSS.Container>
      <SearchMap />
      <RoomCSS.Content>
        <span>300+ stays · 1 Sep - 3 Sep · 1 guest</span>
        <h1>Stays in selected map area</h1>
        <RoomCSS.Filter>
          <button className='mr-2'>Cancellation flexibility</button>
          <button className='mr-2'>Type of place</button>
          <button className='mr-2'>Price</button>
          <button className='mr-2'>Instant book</button>
          <button className='mr-2'>More filters</button>
        </RoomCSS.Filter>
        <RoomCSS.Scarcity>
          <img src={calendar} alt='Calendar' />
          <span>
            <span>
              67% of places in Lake District for your dates and guests are already booked.
            </span>
          </span>
          You may want to book soon.
        </RoomCSS.Scarcity>
        <RoomCSS.List>{renderPhongChoThue()}</RoomCSS.List>
      </RoomCSS.Content>
      <RoomCSS.Map>
        <RoomCSS.MainContent>
          <RoomMap
            coordinates={coordinates}
            places={places}
            danhSachPhongChoThueTheoViTriSlice={danhSachPhongChoThueTheoViTriSlice}
            setCoordinates={setCoordinates}
          />
        </RoomCSS.MainContent>
      </RoomCSS.Map>
    </RoomCSS.Container>
  );
}

export default RoomPage;
