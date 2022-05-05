import React from 'react';
import { BookingDetailMapCSS } from './BookingDetailMap.styles';

function BookingDetailMap({ place }) {
  const { Container, Header, Inject } = BookingDetailMapCSS;
  const { lat, lng, address } = place;
  const googleKeyAPI = process.env.REACT_APP_API_KEY_GOOGLE;
  const src = `https://www.google.com/maps/embed/v1/place?key=${googleKeyAPI}&zoom=18&center=${lat},${lng}
  &q=${encodeURIComponent(address)}`;

  return !address.length ? null : (
    <Container>
      <Header>
        <h1>Nơi bạn sẽ đến</h1>
      </Header>
      <Inject>
        <iframe
          title='room'
          style={{ border: 0 }}
          loading='lazy'
          allowFullScreen
          referrerPolicy='no-referrer-when-downgrade'
          src={src}
        />
      </Inject>
    </Container>
  );
}

export default BookingDetailMap;
