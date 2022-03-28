import Footer from '@Layouts/Footer';
// import Header from '@Layouts/Header';
// import HomeCarousel from '@Pages/HomePage/HomeCarousel';
import React from 'react';
import { Route } from 'react-router-dom';

const UserTemplate = ({ Component, ...restRoute }: PropsTemplate) => {
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => (
        <>
          {/* <Header /> */}
          {/* <HomeCarousel /> */}
          <Component {...propsRoute} />
          {/* <Footer /> */}
        </>
      )}
    />
  );
};

export default UserTemplate;
