import UserTemplate from '@Templates/UserTemplate';
import React, { lazy } from 'react';
import { nanoid } from '@reduxjs/toolkit';

const SignInPage = lazy(() => import('@Pages/SignInPage'));
const SignUpPage = lazy(() => import('@Pages/SignUpPage'));

export const routerUserTemplate = [
  { path: process.env.REACT_APP_LINK_SIGN_IN, componentPage: SignInPage },
  { path: process.env.REACT_APP_LINK_SIGN_UP, componentPage: SignUpPage },
];

const renderUserTemplate = (() => {
  const idUserTemplate = nanoid(); //Need Declare same id to react can't switch case properly in react-router
  return routerUserTemplate.map(({ componentPage, path }) => (
    <UserTemplate key={idUserTemplate} Component={componentPage} path={path} exact />
  ));
})();

export const routerTemplates = [...renderUserTemplate];
