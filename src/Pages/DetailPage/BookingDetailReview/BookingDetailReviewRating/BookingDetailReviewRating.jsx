import React from 'react';
import { BookingDetailReviewRatingCSS } from './BookingDetailReviewRating.styles';
import moment from 'moment';

function BookingDetailReviewRating(props) {
  const { Container, Content, ImageUser, Item, Paragraph } = BookingDetailReviewRatingCSS;
  const { danhSachDanhGia } = props;
  const formatDay = 'DD/MM/YYYY';

  const renderUserReview = () => {
    return danhSachDanhGia?.slice(0, 8).map((item, index) => {
      return (
        <Item key={item._id}>
          <ImageUser>
            <img src='https://dummyimage.com/80x80' alt='user' />
            <div>
              <h1>Some Body</h1>
              <p>{moment(item.created_at).format(formatDay)}</p>
            </div>
          </ImageUser>
          <Paragraph>{item.content}</Paragraph>
        </Item>
      );
    });
  };

  return (
    <Container>
      <Content>{renderUserReview()}</Content>
    </Container>
  );
}

export default BookingDetailReviewRating;
