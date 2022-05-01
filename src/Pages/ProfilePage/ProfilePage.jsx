import { images } from '@Assets/Images';
import UploadImageProfile from '@Components/UploadImageProfile';
import ModalHoc from '@HOC/ModalHoc';
import { localService } from '@Services/LocalStorageService';
import React, { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { ProfilePageCSS } from './ProfilePage.styles';
import ProfileUpdate from './ProfileUpdate';

function ProfilePage(props) {
  const { showModal, handlePropsContentModal, handleContentModal } = props;
  const userInfo = localService.getUserInfo();
  const { avatar, token, name, email, address, birthday, gender, phone, _id } = userInfo;
  const fieldProfileUpdate = { name, email, address, birthday, gender, phone, _id };
  const { account } = images;
  const [imgRoom, setImgRoom] = useState('' || avatar);

  console.log({props})

  const handleShowModal = () => {
    handleContentModal(ProfileUpdate);
    handlePropsContentModal({ fieldProfileUpdate });
    showModal();
  };

  const {
    Container,
    ContentLeft,
    CardImage,
    CardBody,
    CardTitle,
    CardIconShield,
    CardText,
    CardButton,
    CardConfirm,
    CardConfirmTitle,
    CardConfirmText,
    ContentRight,
    CardTitleUploadImage,
    CardTextUnderline,
  } = ProfilePageCSS;

  return (
    <Container>
      <ContentLeft>
        <CardImage>
          <img src={imgRoom || account} alt={imgRoom || account} />
        </CardImage>
        <UploadImageProfile setImgRoom={setImgRoom} token={token} userInfo={userInfo} >
          <CardTitleUploadImage>Cập nhật ảnh</CardTitleUploadImage>
        </UploadImageProfile>
        <CardBody>
          <CardIconShield />
          <CardTitle>Xác minh danh tính</CardTitle>
          <CardText>Xác thực danh tính của bạn với huy hiệu xác minh danh tính</CardText>
          <CardButton type='button'>Nhận huy hiệu</CardButton>
          <CardConfirm>
            <CardConfirmTitle>{email} Đã xác nhận</CardConfirmTitle>
            <div>
              <BsCheckLg />
              <CardConfirmText>Địa chỉ mail</CardConfirmText>
            </div>
          </CardConfirm>
        </CardBody>
      </ContentLeft>
      <ContentRight>
        <CardTitle>Xin chào, tôi là {name}</CardTitle>
        <CardText>Bắt đầu tham gia vào 2021</CardText>
        <CardTextUnderline onClick={handleShowModal}>Chỉnh sửa hồ sơ</CardTextUnderline>
        <CardTitle>
          <i className='fa fa-star'></i>0 đánh giá
        </CardTitle>
        <CardTextUnderline>Đánh giá của bạn</CardTextUnderline>
      </ContentRight>
    </Container>
  );
}

export default ModalHoc(ProfilePage);
