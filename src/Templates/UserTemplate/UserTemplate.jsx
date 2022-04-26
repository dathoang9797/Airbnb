import FooterUser from '@Layouts/User/FooterUser';
import HeaderUser from '@Layouts/User/HeaderUser';
import React from 'react';
import { Route, useLocation } from 'react-router-dom';

const UserTemplate = ({ Component, ...restRoute }) => {
  const urlSignIn = process.env.REACT_APP_LINK_SIGN_IN;
  const urlSignUp = process.env.REACT_APP_LINK_SIGN_UP;
  const { pathname } = useLocation();

  const handleRender = (propsRoute) => {
    switch (true) {
      case pathname === urlSignIn || pathname === urlSignUp: {
        return <Component {...propsRoute} />;
      }

      default: {
        return (
          <>
            <HeaderUser />
            <Component {...propsRoute} />
            <FooterUser />
          </>
        );
      }
    }
  };

  return <Route {...restRoute} render={(propsRoute) => handleRender(propsRoute)} />;
};

export default UserTemplate;
