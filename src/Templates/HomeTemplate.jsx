import Footer from '@Layouts/User/FooterUser';
import Header from '@Layouts/User/HeaderUser';
import React from 'react';
import { Route } from 'react-router-dom';

const HomeTemplate = ({ Component, ...restRoute }: PropsTemplate) => {
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => (
        <>
          <Header />
          <Component {...propsRoute} />
          <Footer />
        </>
      )}
    />
  );
};

export default HomeTemplate;
