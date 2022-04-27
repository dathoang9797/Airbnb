import { DashboardOutlined, UsergroupAddOutlined, CarryOutOutlined } from '@ant-design/icons';
import { images } from '@Assets/Images';
import { IoLocationOutline } from 'react-icons/io5';
import React, { useState, useLayoutEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SiderBarCSS } from './SidebarAdmin.styles';
import { AiFillLike } from 'react-icons/ai';
import { GiTicket } from 'react-icons/gi';
import ButtonScrollTop from '@Components/ButtonScrollTop';

function Siderbar() {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const { logo } = images;
  const { Menus, SiderBar } = SiderBarCSS;
  const countRef = useRef(null);
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
        <NavLink to={process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER}>Quản lý phòng cho thuê</NavLink>
      ),
      icon: <CarryOutOutlined />,
      key: process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER,
    },
    {
      label: (
        <NavLink to={process.env.REACT_APP_LINK_ADMIN_EVALUATE_MANAGER}>Quản lý đánh giá</NavLink>
      ),
      icon: <AiFillLike />,
      key: process.env.REACT_APP_LINK_ADMIN_EVALUATE_MANAGER,
    },
    {
      label: <NavLink to={process.env.REACT_APP_LINK_ADMIN_TICKETS_MANAGER}>Quản lý Vé</NavLink>,
      icon: <GiTicket />,
      key: process.env.REACT_APP_LINK_ADMIN_TICKETS_MANAGER,
    },
  ];

  useLayoutEffect(() => {
    const siderCollapsedDom = document.querySelector('.ant-layout-sider-collapsed');
    const buttonScrollTopDom = document.querySelector('#scroll-top');
    if (countRef.current) {
      if (!siderCollapsedDom) {
        buttonScrollTopDom.style.opacity = '0';
        countRef.current += 1;
        return;
      }
    }
    buttonScrollTopDom.style.opacity = '1';
    countRef.current += 1;
  });

  return (
    <>
      {' '}
      <SiderBar collapsible collapsed={collapsed} onCollapse={onCollapse} id='side-bar'>
        <div>
          <a href='#a'>
            <img src={logo} alt={logo} />
          </a>
        </div>
        <Menus defaultSelectedKeys={[pathname]} mode='inline' items={items} />
      </SiderBar>
      <ButtonScrollTop />
    </>
  );
}

export default Siderbar;
