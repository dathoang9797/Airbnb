import { DashboardOutlined, UsergroupAddOutlined, CarryOutOutlined } from '@ant-design/icons';
import { images } from '@Assets/Images';
import { IoLocationOutline } from 'react-icons/io5';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SiderBarCSS } from './SidebarAdmin.styles';
import { AiFillLike } from 'react-icons/ai';
import { GiTicket } from 'react-icons/gi';

function Siderbar() {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const { logo } = images;
  const { Menus, SiderBar } = SiderBarCSS;

  const onCollapse = (collapsed) => setCollapsed(collapsed);

  const items = [
    {
      label: <NavLink to={process.env.REACT_APP_LINK_ADMIN_DASH_BOARD}>DashBoard</NavLink>,
      icon: <DashboardOutlined />,
      key: process.env.REACT_APP_LINK_ADMIN_DASH_BOARD,
    },
    {
      label: (
        <NavLink to={process.env.REACT_APP_LINK_ADMIN_USER_MANAGER}>Quản lý người dùng</NavLink>
      ),
      icon: <UsergroupAddOutlined />,
      key: process.env.REACT_APP_LINK_ADMIN_USER_MANAGER,
    },
    {
      label: (
        <NavLink to={process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER}>
          Quản lý thông tin vị trí
        </NavLink>
      ),
      icon: <IoLocationOutline />,
      key: process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER,
    },
    {
      label: (
        <NavLink to={process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER}>
          Quản lý phòng cho thuê
        </NavLink>
      ),
      icon: <CarryOutOutlined />,
      key: process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER,
    },
    {
      label: (
        <NavLink to={process.env.REACT_APP_LINK_ADMIN_EVALUATE_MANAGER}>
          Quản lý đánh giá
        </NavLink>
      ),
      icon: <AiFillLike />,
      key: process.env.REACT_APP_LINK_ADMIN_EVALUATE_MANAGER,
    },
    {
      label: (
        <NavLink to={process.env.REACT_APP_LINK_ADMIN_TICKETS_MANAGER}>
          Quản lý Vé
        </NavLink>
      ),
      icon: <GiTicket />,
      key: process.env.REACT_APP_LINK_ADMIN_TICKETS_MANAGER,
    },
  ];

  return (
    <SiderBar collapsible collapsed={collapsed} onCollapse={onCollapse} id='side-bar'>
      <div>
        <a href='#a'>
          <img src={logo} alt={logo} />
        </a>
      </div>
      <Menus defaultSelectedKeys={[pathname]} mode='inline' items={items} />
    </SiderBar>
  );
}

export default Siderbar;
