import React from 'react';
import { Modal as ModalAnt } from 'antd';

function Modal(props) {
  const { handleCancel, handleOk, isModalVisible, Component } = props;

  return (
    <ModalAnt
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      destroyOnClose
    >
      <Component handleOk={handleOk} />
    </ModalAnt>
  );
}

export default React.memo(Modal);
