import CardStats from '@Components/CardStats';
import React, { useEffect } from 'react';
import {
  quanLyDanhGiaThunk,
  quanLyNguoiDungThunk,
  quanLyPhongChoThueThunk,
  quanLyVeThunk,
  quanLyViTriThunk,
} from '@Redux/Thunk';
import {
  quanLyDanhGiaSelector,
  quanLyNguoiDungSelector,
  quanLyPhongChoThueSelector,
  quanLyVeSelector,
  quanLyViTriSelector,
} from '@Redux/Selector';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdBedroomParent } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { AiFillLike } from 'react-icons/ai';
import { GiTicket } from 'react-icons/gi';
import { DashBoardPageCSS } from './DashBoardPage.styles';

function DashBoardPage() {
  const dispatch = useDispatch();
  const { getDanhSachDanhGiaAsync } = quanLyDanhGiaThunk;
  const { getDanhSachNguoiDungAsync } = quanLyNguoiDungThunk;
  const { getDanhSachPhongChoThueAsync } = quanLyPhongChoThueThunk;
  const { getDanhSachVeAsync } = quanLyVeThunk;
  const { getDanhSachViTriAsync } = quanLyViTriThunk;
  const { selectDanhSachDanhGia } = quanLyDanhGiaSelector;
  const { selectDanhSachNguoiDung } = quanLyNguoiDungSelector;
  const { selectDanhSachPhongChoThue } = quanLyPhongChoThueSelector;
  const { selectDanhSachVe } = quanLyVeSelector;
  const { selectDanhSachViTri } = quanLyViTriSelector;
  const danhSachDanhGia = useSelector(selectDanhSachDanhGia, _.isEqual);
  const danhSachNguoiDung = useSelector(selectDanhSachNguoiDung, _.isEqual);
  const danhSachPhongChoThue = useSelector(selectDanhSachPhongChoThue, _.isEqual);
  const danhSachVe = useSelector(selectDanhSachVe, _.isEqual);
  const danhSachViTri = useSelector(selectDanhSachViTri, _.isEqual);
  const totalDanhSachDanhGia = danhSachDanhGia.length;
  const totalDanhSachNguoiDung = danhSachNguoiDung.length;
  const totalDanhSachPhongChoThue = danhSachPhongChoThue.length;
  const totalDanhSachVe = danhSachVe.length;
  const totalDanhSachViTri = danhSachViTri.length;

  useEffect(() => {
    Promise.all([
      dispatch(getDanhSachDanhGiaAsync()),
      dispatch(getDanhSachNguoiDungAsync()),
      dispatch(getDanhSachPhongChoThueAsync()),
      dispatch(getDanhSachVeAsync()),
      dispatch(getDanhSachViTriAsync()),
    ]);
  }, [
    dispatch,
    getDanhSachDanhGiaAsync,
    getDanhSachNguoiDungAsync,
    getDanhSachPhongChoThueAsync,
    getDanhSachVeAsync,
    getDanhSachViTriAsync,
  ]);

  return (
    <>
      <DashBoardPageCSS.Container>
        <DashBoardPageCSS.Content>
          <DashBoardPageCSS.Item>
            <DashBoardPageCSS.CardStatsContent>
              <CardStats
                statSubtitle='USERS'
                statTitle={
                  totalDanhSachNguoiDung > 1000
                    ? totalDanhSachNguoiDung.toLocaleString()
                    : totalDanhSachNguoiDung
                }
                StatIconName={HiOutlineUserGroup}
                statIconColor='bg-red-500'
              />
            </DashBoardPageCSS.CardStatsContent>
            <DashBoardPageCSS.CardStatsContent>
              <CardStats
                statSubtitle='ROOMS'
                statTitle={
                  totalDanhSachPhongChoThue > 1000
                    ? totalDanhSachPhongChoThue.toLocaleString()
                    : totalDanhSachPhongChoThue
                }
                StatIconName={MdBedroomParent}
                statIconColor='bg-orange-500'
              />
            </DashBoardPageCSS.CardStatsContent>
            <DashBoardPageCSS.CardStatsContent>
              <CardStats
                statSubtitle='LOCATION'
                statTitle={
                  totalDanhSachViTri > 1000
                    ? totalDanhSachViTri.toLocaleString()
                    : totalDanhSachViTri
                }
                StatIconName={ImLocation2}
                statIconColor='bg-pink-500'
              />
            </DashBoardPageCSS.CardStatsContent>
            <DashBoardPageCSS.CardStatsContent>
              <CardStats
                statSubtitle='VALUATION'
                statTitle={
                  totalDanhSachDanhGia > 1000
                    ? totalDanhSachDanhGia.toLocaleString()
                    : totalDanhSachDanhGia
                }
                StatIconName={AiFillLike}
                statIconColor='bg-blue-500'
              />
            </DashBoardPageCSS.CardStatsContent>
            <DashBoardPageCSS.CardStatsContent>
              <CardStats
                statSubtitle='TICKETS'
                statTitle={
                  totalDanhSachVe > 1000 ? totalDanhSachVe.toLocaleString() : totalDanhSachVe
                }
                StatIconName={GiTicket}
                statIconColor='bg-gray-500'
              />
            </DashBoardPageCSS.CardStatsContent>
          </DashBoardPageCSS.Item>
        </DashBoardPageCSS.Content>
      </DashBoardPageCSS.Container>
    </>
  );
}

export default DashBoardPage;
