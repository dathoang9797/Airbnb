import React from 'react';
import { BookingDetailPriceCSS } from './BookingDetailPrice.styles';
import BookingDetailPriceBill from './BookingDetailPriceBill';
import BookingDetailPriceHeader from './BookingDetailPriceHeader';
import BookingDetailPriceDateModal from './BookingDetailPriceDateModal';
import BookingDetailPricePopup from './BookingDetailPricePopup';

const BookingDetailPrice = (props) => {
  const { Container, Booking, BookingContent } = BookingDetailPriceCSS;
  const { price, roomId } = props;

  return (
    <Container>
      <Booking>
        <BookingContent>
          <BookingDetailPriceHeader price={price} />
          <BookingDetailPriceDateModal roomId={roomId} price={price} />
          <BookingDetailPricePopup />
          <BookingDetailPriceBill price={price} />
        </BookingContent>
      </Booking>
    </Container>
  );
};

export default BookingDetailPrice;
