import React from 'react';
import BookingDetailReviewPoint from '@Pages/DetailPage/BookingDetailReview/BookingDetailReviewPoint';
import BookingDetailReviewRating from '@Pages/DetailPage/BookingDetailReview/BookingDetailReviewRating';
import BookingDetailReviewTitle from '@Pages/DetailPage/BookingDetailReview/BookingDetailReviewTitle';
import { BookingDetailReviewModalCSS } from './BookingDetailReviewModal.styles';

function BookingDetailReviewModal(props) {
  const { Container, ContentLeft, ContentRight } = BookingDetailReviewModalCSS;
  const { danhSachDanhGia } = props;

  return (
    <Container>
      <ContentLeft>
        <BookingDetailReviewTitle />
        <BookingDetailReviewPoint />
      </ContentLeft>
      <ContentRight>
        <BookingDetailReviewRating danhSachDanhGia={danhSachDanhGia} />
      </ContentRight>
    </Container>
  );
}

export default BookingDetailReviewModal;
