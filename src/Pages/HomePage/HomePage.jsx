import ButtonScrollTop from '@Components/ButtonScrollTop';
import React, { useEffect } from 'react';
import Banner from './Banner';
import Feature from './Feature';
import { HomePageCSS } from './HomePage.styles';
import ListCard from './ListCard';
import NavBar from './NavBar';
import { quanLyViTriThunk } from '@Redux/Thunk/QuanLyViTriThunk';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import { quanLyPhongChoThueThunk } from '@Redux/Thunk/QuanLyPhongChoThueThunk';
import { useDispatch, useSelector } from 'react-redux';

export default function HomePage() {
  const { Container } = HomePageCSS;

  const { getDanhSachViTriAsync } = quanLyViTriThunk;
  const { getDanhSachPhongChoThueAsync } = quanLyPhongChoThueThunk;
  const { selectDanhSachProvince } = quanLyViTriSelector;

  const dispatch = useDispatch();
  const danhSachProvince = useSelector(selectDanhSachProvince);
  console.log({danhSachProvince})
  
  useEffect(() => {
    Promise.all([dispatch(getDanhSachViTriAsync()), dispatch(getDanhSachPhongChoThueAsync())]);
  }, [dispatch, getDanhSachPhongChoThueAsync, getDanhSachViTriAsync]);

  return (
    <Container>
      <NavBar />
      <Banner />
      <Feature />
      <ListCard />
      <ButtonScrollTop />
    </Container>
  );
}
