import React, { useState } from 'react';
import { BookingDetailReviewCSS } from './BookingDetailReview.styles';
import BookingDetailReviewRating from './BookingDetailReviewRating';
import BookingDetailReviewPoint from './BookingDetailReviewPoint';
import BookingDetailReviewTitle from './BookingDetailReviewTitle';
import BookingDetailReviewModal from './BookingDetailReviewModal';
import { Modal } from 'antd';

function BookingDetailReview(props) {
  const { Container, Content, ButtonClose, ButtonOpen } = BookingDetailReviewCSS;
  const { danhSachDanhGia } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <Content>
        <BookingDetailReviewTitle />
        <BookingDetailReviewPoint />
        <BookingDetailReviewRating danhSachDanhGia={danhSachDanhGia} />
        {danhSachDanhGia.length > 10 && (
          <ButtonOpen onClick={showModal}>
            Hiển thị tất cả {danhSachDanhGia.length} đánh giá
          </ButtonOpen>
        )}
        <Modal
          wrapClassName='wrap-modal-review'
          visible={isModalVisible}
          onCancel={handleCancel}
          onOk={handleOk}
          footer={null}
          closeIcon={
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
          }
        >
          <BookingDetailReviewModal danhSachDanhGia={danhSachDanhGia} />
        </Modal>
      </Content>
    </Container>
  );
}

export default BookingDetailReview;
