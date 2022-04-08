import { theme } from '@Assets/Styles/Themes';
import HeaderAdmin from '@Layouts/Admin/HeaderAdmin';
import SidebarAdmin from '@Layouts/Admin/SidebarAdmin';
import { localService } from '@Services/LocalStorageService';
import { showWarning } from '@Utils/Alert/PopUp';
import { Layout } from 'antd';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';

function AdminTemplate({ Component, ...restRoute }) {
  const userInfo = localService.getUserInfo();
  const { pathname } = useLocation();
  const urlAdminUser = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER;
  console.log({ pathname });
  useEffect(() => window.scrollTo(0, 0));

  useEffect(() => {
    const antLayout = document.querySelector('#admin-template');
    if (pathname !== urlAdminUser) {
      antLayout.style.minWidth = '0';
      return;
    }
    antLayout.style.minWidth = '720px';
  }, [pathname, urlAdminUser]);

  useEffect(() => {
    const handleScroll = (e) => {
      const horizontal = e.currentTarget.scrollX;
      const antLayoutSiderTrigger = document.querySelector('.ant-layout-sider-trigger');
      const sideBar = document.querySelector('#side-bar');
      if (pathname === urlAdminUser) {
        if (!horizontal) {
          antLayoutSiderTrigger.style.opacity = 1;
          antLayoutSiderTrigger.style.visibility = 'visible';
          sideBar.style.overflow = '';
          return;
        }
        antLayoutSiderTrigger.style.opacity = 0;
        antLayoutSiderTrigger.style.visibility = 'hidden';
        sideBar.style.overflow = 'hidden';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, urlAdminUser]);

  if (_.isEmpty(userInfo)) {
    return <Redirect to={'/'} />;
  }

  if (userInfo.type !== process.env.REACT_APP_NGUOI_DUNG_ADMIN) {
    showWarning('Bạn không có quyền truy cập vào trang này');
    return <Redirect to='/sign-in' />;
    //return <Redirect to={process.env.REACT_APP_LINK_HOME} />;
  }

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => (
        <ThemeProvider theme={theme}>
          <Layout className='min-h-screen'>
            <SidebarAdmin />
            <Layout id='admin-template'>
              <HeaderAdmin />
              <Component {...propsRoute} />
            </Layout>
          </Layout>
        </ThemeProvider>
      )}
    />
  );
}

export default AdminTemplate;
