import Footer from '@Layouts/User/FooterUser';
import Header from '@Layouts/User/HeaderUser';
import React from 'react';
import { Route } from 'react-router-dom';

const UserTemplate = ({ Component, ...restRoute }: PropsTemplate) => {
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => (
        <>
          <Header />
          {/* <HomeCarousel /> */}
          <Component {...propsRoute} />
          <Footer />
        </>
      )}
    />
  );
};

export default UserTemplate;
