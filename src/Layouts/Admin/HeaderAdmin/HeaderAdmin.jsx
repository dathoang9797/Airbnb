import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { images } from '@Assets/Images';
import SearchInput from '@Components/SearchInput';
import { HeaderCSS } from '@Layouts/Admin/HeaderAdmin/HeaderAdmin.styles';
import { searchReducerAction } from '@Redux/Reducers/SearchSlice';
import { localService } from '@Services/LocalStorageService';
import { history } from '@Utils/Libs';
import { Menu } from 'antd';
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
  const { setSearchValue } = searchReducerAction;
  const { account } = images;
  const placeHolderSearchUser = 'Nhập vào tài khoản hoặc họ tên người dùng';
  const placeHolderSearchRoom = 'Nhập tên phòng';
  const placeHolderSearchLocation = 'Nhập vị trí';

  const handleLogOut = () => {
    localService.removeUserInfo();
    history.push(urlSignIn);
    window.location.reload();
  };

  const HeaderMenuDropdownProfile = (
    <Menu>
      <Menu.Item
        icon={<UserOutlined />}
        key={1}
        onClick={() => {
          history.push(urlProfile);
        }}
      >
        Profile
      </Menu.Item>
      <Menu.Item icon={<LogoutOutlined />} key={2} onClick={handleLogOut}>
        LogOut
      </Menu.Item>
    </Menu>
  );

  const renderSearch = () => {
    switch (true) {
      case pathname === urlUserManager:
        return <SearchInput content={placeHolderSearchUser} dispatchAction={setSearchValue} />;

      case pathname === urlRoomManager:
        return <SearchInput content={placeHolderSearchRoom} dispatchAction={setSearchValue} />;

      case pathname === urlLocationManager:
        return <SearchInput content={placeHolderSearchLocation} dispatchAction={setSearchValue} />;
      default: {
        return null;
      }
    }
  };

  return (
    <HeaderCSS.Container>
      <HeaderCSS.Content>
        {renderSearch()}
        <HeaderCSS.Dropdowns
          placement='bottomRight'
          overlay={HeaderMenuDropdownProfile}
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
        </HeaderCSS.Dropdowns>
      </HeaderCSS.Content>
    </HeaderCSS.Container>
  );
}

export default React.memo(HeaderAdmin);
