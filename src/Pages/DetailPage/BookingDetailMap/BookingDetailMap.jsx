import React from 'react';
import { BookingDetailMapCSS } from './BookingDetailMap.styles';

function BookingDetailMap(props) {
  const { Container, Header, Inject } = BookingDetailMapCSS;
  const { coordinates } = props;
  const googleKeyAPI = process.env.REACT_APP_API_KEY_GOOGLE;

  return (
    <Container>
      <Header>
        <h1>Nơi bạn sẽ đến</h1>
      </Header>
      <Inject>
        <iframe
          title='demo'
          src={`https://www.google.com/maps/embed/v1/place?key=${googleKeyAPI}&q=+${
            coordinates.lat},+${coordinates.lng}`}
          style={{ maxWidth: 1200, width: '100%', border: 0 }}
          height={450}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </Inject>
    </Container>
  );
}

export default BookingDetailMap;
