import * as AntIcon from '@ant-design/icons';
import UserManagerAdd from './UserManagerAdd';
import { UserStyle } from './UserManagerModal.styles';
import { Modal } from 'antd';
import React from 'react';

function UserModal({ handleCancel, handleOk, isModalVisible, showModal }) {
  const { UserButton, UserContentButton, UserModalContainer } = UserStyle;
  const { PlusOutlined } = AntIcon;
  return (
    <UserModalContainer>
      <UserContentButton>
        <UserButton onClick={showModal}>
          Thêm quản trị viên <PlusOutlined />
        </UserButton>
      </UserContentButton>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose
      >
        <UserManagerAdd handleOk={handleOk} />
      </Modal>
    </UserModalContainer>
  );
}

export default React.memo(UserModal);
