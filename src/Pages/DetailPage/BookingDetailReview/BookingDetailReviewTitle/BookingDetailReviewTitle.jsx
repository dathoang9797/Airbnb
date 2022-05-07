import React from 'react';
import { BookingDetailReviewTitleCSS } from './BookingDetailReviewTitle.styles';
import { AiFillStar } from 'react-icons/ai';

function BookingDetailReviewTitle() {
  const { Container } = BookingDetailReviewTitleCSS;
  return (
    <Container>
      <span>
        <AiFillStar />
      </span>
      <span>
        <h2>
          <span aria-hidden='true'>4,73 · 260 đánh giá</span>
        </h2>
      </span>
    </Container>
  );
}

export default React.memo(BookingDetailReviewTitle);
