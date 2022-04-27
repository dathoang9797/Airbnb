import { theme } from '@Assets/Styles/Themes/Themes';
import HeaderAdmin from '@Layouts/Admin/HeaderAdmin';
import SidebarAdmin from '@Layouts/Admin/SidebarAdmin';
import { localService } from '@Services/LocalStorageService';
import { showWarning } from '@Utils/Common';
import { Layout } from 'antd';
import _ from 'lodash';
import React, { useEffect, useLayoutEffect } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AdminTemplateCSS } from './AdminTemplate.style';

function AdminTemplate({ Component, ...restRoute }) {
  const userInfo = localService.getUserInfo();
  const { pathname } = useLocation();
  const urlAdminUser = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER;
  const urlAdminRoom = process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER;
  const urlAdminLocation = process.env.REACT_APP_LINK_ADMIN_LOCATION_MANAGER;
  const urlSignIn = process.env.REACT_APP_LINK_SIGN_IN;
  const urlHome = process.env.REACT_APP_LINK_HOME;
  const typeAdmin = process.env.REACT_APP_NGUOI_DUNG_ADMIN;
  const { Container } = AdminTemplateCSS;

  useLayoutEffect(() => window.scrollTo(0, 0));

  useLayoutEffect(() => {
    const antLayout = document.querySelector('#admin-template');
    if (antLayout) {
      if (pathname === urlAdminUser || pathname === urlAdminRoom || pathname === urlAdminLocation) {
        antLayout.style.minWidth = '500px';
        return;
      }
      antLayout.style.minWidth = '0px';
      return;
    }
  }, [pathname, urlAdminUser, urlAdminRoom, urlAdminLocation]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const antLayoutSiderTrigger = document.querySelector('.ant-layout-sider-trigger');
      const sideBar = document.querySelector('#side-bar');
      if (antLayoutSiderTrigger && sideBar) {
        if (
          pathname === urlAdminUser ||
          pathname === urlAdminRoom ||
          pathname === urlAdminLocation
        ) {
          if (!window.scrollX) {
            antLayoutSiderTrigger.style.opacity = 1;
            antLayoutSiderTrigger.style.visibility = 'visible';
            sideBar.style.overflow = '';
            return;
          }
          antLayoutSiderTrigger.style.opacity = 0;
          antLayoutSiderTrigger.style.visibility = 'hidden';
          sideBar.style.overflow = 'hidden';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, urlAdminLocation, urlAdminRoom, urlAdminUser]);

  useEffect(() => {
    if (!_.isEmpty(userInfo) && userInfo.type !== typeAdmin) {
      showWarning('Bạn không có quyền truy cập vào trang này');
    }
  }, [typeAdmin, userInfo]);

  const handleRender = () => {
    switch (true) {
      case _.isEmpty(userInfo): {
        return <Redirect to={urlSignIn} />;
      }

      case userInfo.type !== typeAdmin: {
        return <Redirect to={urlHome} />;
      }

      default:
        return null;
    }
  };

  return (
    <>
      {handleRender() || (
        <Route
          {...restRoute}
          render={(propsRoute) => (
            <Container>
              <ThemeProvider theme={theme}>
                <Layout className='min-h-screen'>
                  <SidebarAdmin />
                  <Layout id='admin-template'>
                    <HeaderAdmin />
                    <Component {...propsRoute} />
                  </Layout>
                </Layout>
              </ThemeProvider>
            </Container>
          )}
        />
      )}
    </>
  );
}

export default AdminTemplate;
