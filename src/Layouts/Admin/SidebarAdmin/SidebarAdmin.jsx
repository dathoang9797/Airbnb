import { CarryOutOutlined, DashboardOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import ButtonScrollTop from '@Components/ButtonScrollTop';
import React, { useState, useEffect } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { GiTicket } from 'react-icons/gi';
import { IoLocationOutline } from 'react-icons/io5';
import { NavLink, useLocation } from 'react-router-dom';
import { SiderBarCSS } from './SidebarAdmin.styles';
import { VectorSVG } from '@Assets/Svgs';

function Siderbar() {
  const [collapsed, setCollapsed] = useState(false);
  const [widthSidebar, setWidthSideBar] = useState(230);
  const [widthCollapsed, setWidthCollapsed] = useState(60);
  const { pathname } = useLocation();
  const { LogoSVG } = VectorSVG;
  const { Menus, SiderBar } = SiderBarCSS;

  const onCollapse = (collapsed) => setCollapsed(collapsed);

  useEffect(() => {
    const handleResizeScreenX = () => {
      if (window.innerWidth <= 992) {
        setWidthSideBar(200);
        setWidthCollapsed(40);
        return;
      } else {
        setWidthSideBar(230);
        setWidthCollapsed(60);
      }
    };
    window.addEventListener('resize', handleResizeScreenX);
    return () => window.removeEventListener('resize', handleResizeScreenX);
  });

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

  return (
    <>
      <SiderBar
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        id='side-bar'
        width={widthSidebar}
        collapsedWidth={widthCollapsed}
      >
        <div>
          <a href='#a'>
            <LogoSVG />
          </a>
        </div>
        <Menus defaultSelectedKeys={[pathname]} mode='inline' items={items} />
      </SiderBar>
      <ButtonScrollTop className='fade-in' />
    </>
  );
}

export default React.memo(Siderbar);
