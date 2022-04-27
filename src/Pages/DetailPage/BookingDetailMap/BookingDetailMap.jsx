import React from 'react';
import { BookingDetailMapCSS } from './BookingDetailMap.styles';

function BookingDetailMap() {
  const { Container, Header, Inject } = BookingDetailMapCSS;
  return (
    <Container>
      <Header>
        <h1>Nơi bạn sẽ đến</h1>
      </Header>
      <Inject>
        <iframe
          title='demo'
          src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15678.68845226113!2d106.64092014999999!3d10.75973355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1650547430339!5m2!1svi!2s'
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
