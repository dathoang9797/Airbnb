import ButtonScrollTop from '@Components/ButtonScrollTop';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from './Banner';
import Feature from './Feature';
import { HomePageCSS } from './HomePage.styles';
import ListCard from './ListCard';

export default function HomePage() {
  const { Container } = HomePageCSS;

  const { getDanhSachViTriAsync } = quanLyViTriThunk;
  const { getDanhSachPhongChoThueAsync } = quanLyPhongChoThueThunk;
  const { selectDanhSachProvince } = quanLyViTriSelector;

  const dispatch = useDispatch();
  const danhSachProvince = useSelector(selectDanhSachProvince);
  console.log({ danhSachProvince });

  useLayoutEffect(() => {
    Promise.all([dispatch(getDanhSachViTriAsync()), dispatch(getDanhSachPhongChoThueAsync())]);
  }, [dispatch, getDanhSachPhongChoThueAsync, getDanhSachViTriAsync]);

  return (
    <Container>
      <Banner />
      <Feature />
      <ListCard />
      <ButtonScrollTop />
    </Container>
  );
}
