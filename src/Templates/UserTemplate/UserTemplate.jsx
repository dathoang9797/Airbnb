import FooterUser from '@Layouts/User/FooterUser';
import HeaderUser from '@Layouts/User/HeaderUser';
import React, { useLayoutEffect } from 'react';
import { Route } from 'react-router-dom';

const UserTemplate = ({ Component, ...restRoute }) => {
  useLayoutEffect(() => window.scrollTo(0, 0));

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
