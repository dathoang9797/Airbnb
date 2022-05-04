import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { images } from '@Assets/Images';
import SearchInput from '@Components/SearchInput';
import { HeaderCSS } from '@Layouts/Admin/HeaderAdmin/HeaderAdmin.styles';
import { searchReducerAction } from '@Redux/Reducers/SearchSlice';
import { localService } from '@Services/LocalStorageService';
import { messageApp } from '@Utils/Common';
import { history } from '@Utils/Libs';
import React from 'react';
import { useLocation } from 'react-router-dom';

function HeaderAdmin() {
  const userInfo = localService.getUserInfo();
  const { pathname } = useLocation();
  const urlProfile = process.env.REACT_APP_LINK_PROFILE;
  const urlSignIn = process.env.REACT_APP_LINK_SIGN_IN;
  const urlUserManager = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER;
  const urlRoomManager = process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER;
  const urlLocationManager = process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER;
  const urlEvaluateManager = process.env.REACT_APP_LINK_ADMIN_EVALUATE_MANAGER;
  const urlTicketsManager = process.env.REACT_APP_LINK_ADMIN_TICKETS_MANAGER;
  const { setSearchValue } = searchReducerAction;
  const { account } = images;
  const {
    messagePlaceHolderSearchRoom,
    messagePlaceHolderSearchUser,
    messagePlaceHolderSearchLocation,
    messagePlaceHolderSearchEvaluate,
    messagePlaceHolderSearchTicket,
  } = messageApp;
  const { Container, Content, Dropdowns, Menu } = HeaderCSS;

  const handleLogOut = () => {
    localService.removeUserInfo();
    history.push(urlSignIn);
  };

  const items = [
    {
      label: 'Profile',
      onClick: () => {
        history.push(urlProfile);
      },
      icon: <UserOutlined />,
    },
    {
      label: ' LogOut',
      onClick: () => {
        handleLogOut();
      },
      icon: <LogoutOutlined />,
    },
  ];

  const renderSearch = () => {
    switch (true) {
      case pathname === urlUserManager:
        return (
          <SearchInput content={messagePlaceHolderSearchUser} dispatchAction={setSearchValue} />
        );

      case pathname === urlRoomManager:
        return (
          <SearchInput content={messagePlaceHolderSearchRoom} dispatchAction={setSearchValue} />
        );

      case pathname === urlLocationManager:
        return (
          <SearchInput content={messagePlaceHolderSearchLocation} dispatchAction={setSearchValue} />
        );

      case pathname === urlEvaluateManager:
        return (
          <SearchInput content={messagePlaceHolderSearchEvaluate} dispatchAction={setSearchValue} />
        );

      case pathname === urlTicketsManager:
        return (
          <SearchInput content={messagePlaceHolderSearchTicket} dispatchAction={setSearchValue} />
        );
      default: {
        return null;
      }
    }
  };

  return (
    <Container>
      <Content>
        {renderSearch()}
        <Dropdowns
          placement='bottomRight'
          overlay={<Menu items={items} />}
          arrow={{ pointAtCenter: true }}
        >
          <button aria-label='Account' aria-haspopup='true'>
            <img
              className={` ${userInfo.avatar ? ' w-10 h-10' : 'w-8 h-8'}`}
              src={userInfo.avatar ? userInfo.avatar : account}
              alt={userInfo.avatar ? userInfo.avatar : account}
              aria-hidden='true'
            />
          </button>
        </Dropdowns>
      </Content>
    </Container>
  );
}

export default HeaderAdmin;
