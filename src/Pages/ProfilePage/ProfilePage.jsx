import { VectorSVG } from '@Assets/Svgs';
import UploadImageProfile from '@Components/UploadImageProfile';
import ModalHoc from '@HOC/ModalHoc';
import { quanLyVeSelector } from '@Redux/Selector/QuanLyVeSelector';
import { quanLyVeThunk } from '@Redux/Thunk/QuanLyVeThunk';
import { localService } from '@Services/LocalStorageService';
import { messageApp, showWarning } from '@Utils/Common';
import _ from 'lodash';
import React, { useState, useEffect,useLayoutEffect } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ProfilePageCSS } from './ProfilePage.styles';
import ProfileTicket from './ProfileTicket';
import ProfileUpdate from './ProfileUpdate';
import ButtonScrollTop from '@Components/ButtonScrollTop';

function ProfilePage(props) {
  const dispatch = useDispatch();
  const { showModal, handlePropsContentModal, handleContentModal } = props;
  const userInfo = localService.getUserInfo();
  const { avatar, token, name, email, address, birthday, gender, phone, _id } = userInfo;
  const fieldProfileUpdate = { name, email, address, birthday, gender, phone, _id };
  const { AccountSVG } = VectorSVG;
  const [imgRoom, setImgRoom] = useState('' || avatar);
  const urlHome = process.env.REACT_APP_LINK_HOME;
  const { getDanhSachVeTheoNguoiDungAsync } = quanLyVeThunk;
  const { selectDanhSachVeTheoNguoiDung } = quanLyVeSelector;
  const danhSachVeTheoNguoiDung = useSelector(selectDanhSachVeTheoNguoiDung, _.isEqual);
  const { messageUserNotLogin } = messageApp;

  useLayoutEffect(() => {
    dispatch(getDanhSachVeTheoNguoiDungAsync(_id));
  }, [_id, dispatch, getDanhSachVeTheoNguoiDungAsync]);

  const {
    Container,
    ContentLeft,
    CardImage,
    CardBody,
    CardTitle,
    CardIconShield,
    CardText,
    CardButton,
    CardConfirm,
    CardConfirmTitle,
    CardConfirmText,
    ContentRight,
    CardTitleUploadImage,
    CardTextUnderline,
  } = ProfilePageCSS;

  const handleShowModalProfile = () => {
    handleContentModal(ProfileUpdate);
    handlePropsContentModal({ fieldProfileUpdate });
    showModal();
  };

  useEffect(() => {
    if (!userInfo) {
      setTimeout(() => {
        showWarning(messageUserNotLogin);
      }, 500);
    }
  }, [messageUserNotLogin, userInfo]);

  return !userInfo ? (
    <Redirect to={urlHome} />
  ) : (
    <Container>
      <ContentLeft>
        <CardImage>{imgRoom ? <img src={imgRoom} alt={imgRoom} /> : <AccountSVG />}</CardImage>
        <UploadImageProfile setImgRoom={setImgRoom} token={token} userInfo={userInfo}>
          <CardTitleUploadImage>C???p nh???t ???nh</CardTitleUploadImage>
        </UploadImageProfile>
        <CardBody>
          <CardIconShield />
          <CardTitle>X??c minh danh t??nh</CardTitle>
          <CardText>X??c th???c danh t??nh c???a b???n v???i huy hi???u x??c minh danh t??nh</CardText>
          <CardButton type='button'>Nh???n huy hi???u</CardButton>
          <CardConfirm>
            <CardConfirmTitle>{email} ???? x??c nh???n</CardConfirmTitle>
            <div>
              <BsCheckLg />
              <CardConfirmText>?????a ch??? mail</CardConfirmText>
            </div>
          </CardConfirm>
        </CardBody>
      </ContentLeft>
      <ContentRight>
        <CardTitle>Xin ch??o, t??i l?? {name}</CardTitle>
        <CardText>B???t ?????u tham gia v??o 2021</CardText>
        <CardTextUnderline onClick={handleShowModalProfile}>Ch???nh s???a h??? s??</CardTextUnderline>
        <br />
        {/* <CardTextUnderline onClick={handleShowModalTicket} className='mb-2'>
          Xem danh s??ch v??
        </CardTextUnderline> */}
        <CardTitle>
          <i className='fa fa-star'></i>0 ????nh gi??
        </CardTitle>
        <CardTextUnderline>????nh gi?? c???a b???n</CardTextUnderline>
        <ProfileTicket danhSachVeTheoNguoiDung={danhSachVeTheoNguoiDung} />
      </ContentRight>
      <ButtonScrollTop />
    </Container>
  );
}

export default ModalHoc(ProfilePage);
