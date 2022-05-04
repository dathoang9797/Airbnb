import React from 'react';
import Banner from './Banner';
import Card from './Card';
import Feature from './Feature';

function Body() {
  return (
    <div className='d-flex flex-wrap w-100'>
      <div className='flex-1'>
        <Banner />
        <Feature />
        <div className='py-lg-11 py-7'>
          <div className='container mt-24 mb-24'>
            <div className=''>
              <div className='col-md-12 col-sm-12 col-12'>
                <div className='mb-12 text-center'>
                  <h2 className='mb-1 text-gray-900 h1'>Explore Our Listing</h2>
                  <p className='h6'>Aliquam ornare pellentesque eros nec fermentum. </p>
                </div>
              </div>
            </div>
            <div className='home__section row'>
              <Card
                src='https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg'
                title='3 Bedroom Flat in Bournemouth'
                description='Superhost with a stunning view of the beachside in Sunny Bournemouth'
                price='£130/night'
              />
              <Card
                src='https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg'
                title='Penthouse in London'
                description='Enjoy the amazing sights of London with this stunning penthouse'
                price='£350/night'
              />
              <Card
                src='https://media.nomadicmatt.com/2018/apartment.jpg'
                title='1 Bedroom apartment'
                description='Superhost with great amenities and a fabolous shopping complex nearby'
                price='£70/night'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
