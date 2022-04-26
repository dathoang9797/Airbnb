import React from 'react';
import { BookingDetailPriceCSS } from './BookingDetailPrice.styles';
import BookingDetailPriceBill from './BookingDetailPriceBill';
import BookingDetailPriceHeader from './BookingDetailPriceHeader';
import BookingDetailPriceDate from './BookingDetailPriceDate';

const BookingDetailPrice = (props) => {
  const { Container, Booking, BookingContent } = BookingDetailPriceCSS;
  const { price, roomId } = props;

  return (
    <Container>
      <Booking>
        <BookingContent>
          <BookingDetailPriceHeader price={price} />
          <BookingDetailPriceDate roomId={roomId} price={price} />
          <BookingDetailPriceBill price={price}/>
        </BookingContent>
      </Booking>
    </Container>
  );
};

export default BookingDetailPrice;
