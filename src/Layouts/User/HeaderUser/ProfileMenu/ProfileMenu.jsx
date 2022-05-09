import React, { useState, useLayoutEffect } from 'react';
import { ProfileMenuCSS } from './ProfileMenu.styles';
import { VectorSVG } from '@Assets/Svgs';
import { localService } from '@Services/LocalStorageService';
import { useSelector } from 'react-redux';
import { quanLyNguoiDungSelector } from '@Redux/Selector/QuanLyNguoiDungSelector';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';

function ProfileMenu() {
  const { AccountSVG, HamburgerSVG, GlobeSVG } = VectorSVG;
  const [visible, setVisible] = useState(false);
  const typeAdmin = process.env.REACT_APP_NGUOI_DUNG_ADMIN;
  const urlSignIn = process.env.REACT_APP_LINK_SIGN_IN;
  const urlSignUp = process.env.REACT_APP_LINK_SIGN_UP;
  const urlProfile = process.env.REACT_APP_LINK_PROFILE;
  const urlDashBoard = process.env.REACT_APP_LINK_ADMIN_DASH_BOARD;
  const urlHome = process.env.REACT_APP_LINK_HOME;
  const { selectUserInfo } = quanLyNguoiDungSelector;
  const userInfoStore = useSelector(selectUserInfo);
  const userInfo = localService.getUserInfo();
  const history = useHistory();
  const {
    Container,
    AccountMenu,
    BecomeHost,
    BurgerMenu,
    ChooseLanguage,
    PopupItemUserProfile,
    UserProfile,
    ButtonLogout,
  } = ProfileMenuCSS;

  useLayoutEffect(() => {
    const handleOnScroll = () => {
      setVisible(false);
    };
    window.addEventListener('scroll', handleOnScroll);
    return () => window.removeEventListener('scroll', handleOnScroll);
  }, []);

  const handleRenderAvatar = () => {
    if (!_.isEmpty(userInfoStore) && userInfoStore?.avatar) {
      return <img src={userInfoStore.avatar} alt={userInfoStore.avatar} />;
    }
    if (userInfo && userInfo.avatar) {
      return <img src={userInfo.avatar} alt={userInfo.avatar} />;
    }
    return <AccountSVG />;
  };

  const handleRenderTypeAdmin = () => {
    if (!_.isEmpty(userInfoStore) && userInfoStore?.type) {
      return userInfoStore.type;
    }
    if (userInfo && userInfo.type) {
      return userInfo.type;
    }
    return null;
  };

  const handleLogOut = () => {
    localService.removeUserInfo();
    history.push(urlHome);
    window.location.reload();
  };

  const contentPopupProfile = userInfo ? (
    <>
      {typeAdmin === handleRenderTypeAdmin() ? (
        <PopupItemUserProfile to={urlDashBoard}>DashBoard</PopupItemUserProfile>
      ) : null}
      <PopupItemUserProfile to={urlHome}> Home</PopupItemUserProfile>
      <PopupItemUserProfile to={urlProfile}>Profile</PopupItemUserProfile>
      <ButtonLogout to={urlHome} onClick={handleLogOut}>
        Logout
      </ButtonLogout>
      <hr />
      <PopupItemUserProfile to={'/'}>Host Your Home</PopupItemUserProfile>
      <PopupItemUserProfile to={'/'}>Host Your Experience</PopupItemUserProfile>
      <PopupItemUserProfile to={'/'}>Help</PopupItemUserProfile>
    </>
  ) : (
    <>
      <PopupItemUserProfile to={urlHome}> Home</PopupItemUserProfile>
      <PopupItemUserProfile to={urlSignIn}>Sign In</PopupItemUserProfile>
      <PopupItemUserProfile to={urlSignUp}>Sign Up</PopupItemUserProfile>
      <hr />
      <PopupItemUserProfile to={'/'}>Host Your Home</PopupItemUserProfile>
      <PopupItemUserProfile to={'/'}>Host Your Experience</PopupItemUserProfile>
      <PopupItemUserProfile to={'/'}>Help</PopupItemUserProfile>
      <hr />
    </>
  );

  return (
    <Container>
      <BecomeHost>Become a host</BecomeHost>
      <ChooseLanguage>
        <div>
          <HamburgerSVG />
        </div>
      </ChooseLanguage>

      <UserProfile
        trigger='click'
        visible={visible}
        onVisibleChange={(visible) => setVisible(visible)}
        placement='bottomRight'
        overlayClassName='wrapper-userprofile-popup'
        content={contentPopupProfile}
      >
        <button>
          <BurgerMenu>
            <GlobeSVG />
          </BurgerMenu>
          <AccountMenu>{handleRenderAvatar()}</AccountMenu>
        </button>
      </UserProfile>
    </Container>
  );
}

export default React.memo(ProfileMenu);
