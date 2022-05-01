import React from 'react';
import { BookingDetailReviewCSS } from './BookingDetailReview.styles';
import BookingDetailReviewRating from './BookingDetailReviewRating';
import BookingDetailReviewPoint from './BookingDetailReviewPoint';
import BookingDetailReviewTitle from './BookingDetailReviewTitle';
import BookingDetailReviewModal from './BookingDetailReviewModal';
import ModalHoc from '@HOC/ModalHoc';
import { CloseOutlined } from '@ant-design/icons';

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
      <CloseOutlined />
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
