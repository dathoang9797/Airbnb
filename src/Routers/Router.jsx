import { nanoid } from '@reduxjs/toolkit';
import AdminTemplate from '@Templates/AdminTemplate';
import HomeTemplate from '@Templates/HomeTemplate';
import UserTemplate from '@Templates/UserTemplate/UserTemplate';
import React, { lazy } from 'react';

const SignInPage = lazy(() => import('@Pages/SignInPage'));
const SignUpPage = lazy(() => import('@Pages/SignUpPage'));
const DetailPage = lazy(() => import('@Pages/DetailPage'));
const RoomPage = lazy(() => import('@Pages/RoomPage'));
const NotFoundPage = lazy(() => import('@Pages/NotFoundPage'));
const DashBoardPage = lazy(() => import('@Pages/AdminPage/DashBoardPage'));
const LocationManagerPage = lazy(() => import('@Pages/AdminPage/LocationManagerPage'));
const UserManagerPage = lazy(() => import('@Pages/AdminPage/UserManagerPage'));
const UserManagerEditPage = lazy(() =>
  import('@Pages/AdminPage/UserManagerPage/UserManagerEditPage')
);
const UserManagerProfilePage = lazy(() =>
  import('@Pages/AdminPage/UserManagerPage/UserManagerProfilePage')
);
const RoomManagerPage = lazy(() => import('@Pages/AdminPage/RoomManagerPage'));
const RoomManagerEditPage = lazy(() =>
  import('@Pages/AdminPage/RoomManagerPage/RoomManagerEditPage')
);
const RoomManagerProfilePage = lazy(() =>
  import('@Pages/AdminPage/RoomManagerPage/RoomManagerProfilePage/RoomManagerProfilePage')
);

export const routerUserTemplate = [
  { path: process.env.REACT_APP_LINK_SIGN_IN, componentPage: SignInPage },
  { path: process.env.REACT_APP_LINK_SIGN_UP, componentPage: SignUpPage },
];

export const routerHomeTemplate = [
  { path: process.env.REACT_APP_LINK_DETAIL, componentPage: DetailPage },
  { path: process.env.REACT_APP_LINK_ROOM, componentPage: RoomPage },
  { path: process.env.REACT_APP_LINK_NOT_FOUND, componentPage: NotFoundPage },
];

export const routerAdminTemplate = [
  {
    path: [process.env.REACT_APP_LINK_ADMIN, process.env.REACT_APP_LINK_ADMIN_DASH_BOARD],
    componentPage: DashBoardPage,
  },
  { path: process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER, componentPage: RoomManagerPage },
  { path: process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER_EDIT, componentPage: RoomManagerEditPage },
  {
    path: process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER_PROFILE,
    componentPage: RoomManagerProfilePage,
  },
  { path: process.env.REACT_APP_LINK_ADMIN_LOCATION_MANAGER, componentPage: LocationManagerPage },
  { path: process.env.REACT_APP_LINK_ADMIN_USER_MANAGER, componentPage: UserManagerPage },
  { path: process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_EDIT, componentPage: UserManagerEditPage },
  {
    path: process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_PROFILE,
    componentPage: UserManagerProfilePage,
  },
];

const renderUserTemplate = (() => {
  const idUserTemplate = nanoid(); //Need Declare same id to react can't switch case properly in react-router
  return routerUserTemplate.map(({ componentPage, path }) => (
    <UserTemplate key={idUserTemplate} Component={componentPage} path={path} exact />
  ));
})();

const renderHomeTemplate = (() => {
  const idHomeTemplate = nanoid();
  return routerHomeTemplate.map(({ componentPage, path }) => (
    <HomeTemplate key={idHomeTemplate} Component={componentPage} path={path} exact />
  ));
})();

const renderAdminTemplate = (() => {
  const idAdminTemplate = nanoid();
  return routerAdminTemplate.map(({ componentPage, path }) => (
    <AdminTemplate key={idAdminTemplate} Component={componentPage} path={path} exact />
  ));
})();

export const routerTemplates = [
  ...renderAdminTemplate,
  ...renderUserTemplate,
  ...renderHomeTemplate,
];
