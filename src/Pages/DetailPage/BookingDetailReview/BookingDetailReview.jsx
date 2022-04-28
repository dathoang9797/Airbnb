import React from 'react';
import { BookingDetailReviewCSS } from './BookingDetailReview.styles';
import BookingDetailReviewRating from './BookingDetailReviewRating';
import BookingDetailReviewPoint from './BookingDetailReviewPoint';
import BookingDetailReviewTitle from './BookingDetailReviewTitle';
import BookingDetailReviewModal from './BookingDetailReviewModal';
import ModalHoc from '@HOC/ModalHoc';

function BookingDetailReview(props) {
  const { Container, Content, ButtonClose, ButtonOpen } = BookingDetailReviewCSS;
  const {
    showModal,
    handlePropsModal,
    handlePropsContentModal,
    handleContentModal,
    danhSachDanhGia,
  } = props;

  const closeIcon = (
    <ButtonClose>
      <svg
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        role='presentation'
        focusable='false'
      >
        <path d='m6 6 20 20' />
        <path d='m26 6-20 20' />
      </svg>
    </ButtonClose>
  );

  const handleShowModal = () => {
    handleContentModal(BookingDetailReviewModal);
    handlePropsContentModal({ danhSachDanhGia });
    handlePropsModal({ wrapClassName: 'wrap-modal-review', closeIcon });
    showModal();
  };

  return (
    <Container>
      <Content>
        <BookingDetailReviewTitle />
        <BookingDetailReviewPoint />
        <BookingDetailReviewRating danhSachDanhGia={danhSachDanhGia} />
        {danhSachDanhGia.length > 10 && (
          <ButtonOpen onClick={handleShowModal}>
            Hiển thị tất cả {danhSachDanhGia.length} đánh giá
          </ButtonOpen>
        )}
      </Content>
    </Container>
  );
}

export default ModalHoc(BookingDetailReview);
