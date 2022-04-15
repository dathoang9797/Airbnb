import * as AntIcon from '@ant-design/icons';
import { images } from '@Assets/Images';
import { IoLocationOutline } from 'react-icons/io5';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SiderBarCSS } from './SidebarAdmin.styles';

export default function Siderbar() {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const { logo } = images;

  const onCollapse = (collapsed: boolean) => setCollapsed(collapsed);

  return (
    <>
      <SiderBarCSS.SiderBar collapsible collapsed={collapsed} onCollapse={onCollapse} id='side-bar'>
        <div>
          <a href='#a'>
            <img src={logo} alt={logo} />
          </a>
        </div>
        <SiderBarCSS.Menus defaultSelectedKeys={[pathname]} mode='inline'>
          <SiderBarCSS.MenuItem
            key={process.env.REACT_APP_LINK_ADMIN_DASH_BOARD}
            icon={<AntIcon.DashboardOutlined />}
          >
            <NavLink to={process.env.REACT_APP_LINK_ADMIN_DASH_BOARD}>DashBoard</NavLink>
          </SiderBarCSS.MenuItem>
          <SiderBarCSS.MenuItem
            key={process.env.REACT_APP_LINK_ADMIN_USER_MANAGER}
            icon={<AntIcon.UsergroupAddOutlined />}
          >
            <NavLink to={process.env.REACT_APP_LINK_ADMIN_USER_MANAGER}>Quản lý người dùng</NavLink>
          </SiderBarCSS.MenuItem>
          <SiderBarCSS.MenuItem
            key={process.env.REACT_APP_LINK_ADMIN_LOCATION_MANAGER}
            icon={<IoLocationOutline />}
          >
            <NavLink to={process.env.REACT_APP_LINK_ADMIN_LOCATION_MANAGER}>
              Quản lý thông tin vị trí
            </NavLink>
          </SiderBarCSS.MenuItem>
          <SiderBarCSS.MenuItem
            key={process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER}
            icon={<AntIcon.CarryOutOutlined />}
          >
            <NavLink to={process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER}>
              Quản lý thông tin phòng
            </NavLink>
          </SiderBarCSS.MenuItem>
        </SiderBarCSS.Menus>
      </SiderBarCSS.SiderBar>
    </>
  );
}
