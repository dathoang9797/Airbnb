import { Modal } from 'antd';
import React from 'react';

function TabModalActions(props) {
  const { handleCancel, handleOk, isModalVisible, Component } = props;

  return (
    <Modal
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      destroyOnClose
    >
      <Component handleOk={handleOk} />
    </Modal>
  );
}

export default React.memo(TabModalActions);
