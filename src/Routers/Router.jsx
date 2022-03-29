import UserTemplate from '@Templates/UserTemplate';
import HomeTemplate from '@Templates/HomeTemplate';
import React, { lazy } from 'react';
import { nanoid } from '@reduxjs/toolkit';

const SignInPage = lazy(() => import('@Pages/SignInPage'));
const SignUpPage = lazy(() => import('@Pages/SignUpPage'));
const DetailPage = lazy(() => import('@Pages/DetailPage/'));
const RoomPage = lazy(() => import('@Pages/RoomPage/'));

export const routerUserTemplate = [
  { path: process.env.REACT_APP_LINK_SIGN_IN, componentPage: SignInPage },
  { path: process.env.REACT_APP_LINK_SIGN_UP, componentPage: SignUpPage },
];

export const routerHomeTemplate = [
  { path: process.env.REACT_APP_LINK_DETAIL, componentPage: DetailPage },
  { path: process.env.REACT_APP_LINK_ROOM, componentPage: RoomPage },
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

export const routerTemplates = [...renderUserTemplate, ...renderHomeTemplate];
