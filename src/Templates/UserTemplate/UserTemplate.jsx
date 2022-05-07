import FooterUser from '@Layouts/User/FooterUser';
import HeaderUser from '@Layouts/User/HeaderUser';
import React from 'react';
import { Route } from 'react-router-dom';

const UserTemplate = ({ Component, ...restRoute }) => {
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => (
        <>
          <HeaderUser />
          <Component {...propsRoute} />
          <FooterUser />
        </>
      )}
    />
  );
};

export default UserTemplate;
