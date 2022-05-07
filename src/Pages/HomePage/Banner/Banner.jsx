import React from 'react';
import { BannerCSS } from './Banner.styles';

import Typed from 'react-typed';
import BannerSearch from './BannerSearch';
import BannerSelect from './BannerSelect';

function Banner() {
  const { Container, BannerContent, BannerGrid, BannerButtonSearch } = BannerCSS;

  return (
    <Container>
      <BannerContent>
        <BannerGrid>
          <div>
            <h1>
              Find Nearby
              <Typed
                strings={['Hotels', 'Provinces', 'Cities', 'Places']}
                typeSpeed={100}
                backSpeed={100}
                backDelay={3000}
                className='ml-2'
                loop
              />
            </h1>

            <h4>Explore top-rated attractions, activities and more!</h4>
            <form>
              <BannerSearch />
              <BannerSelect />
              <BannerButtonSearch>Search</BannerButtonSearch>
            </form>
          </div>
        </BannerGrid>
      </BannerContent>
    </Container>
  );
}

export default Banner;
