import * as AntIcon from '@ant-design/icons';
import { ButtonCSS } from '@Components/Button';
import { Modal as ModalAnt } from 'antd';
import React from 'react';
import { ModalCSS } from './Modal.style';

function Modal(props) {
  console.log('modal');
  const { PlusOutlined } = AntIcon;
  const {
    handleCancel,
    handleOk,
    isModalVisible,
    showModal,
    Component,
    content,
    selectedRowKeys,
    handleDeleteAll,
    handleRefreshData,
  } = props;
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <ModalCSS.Container>
      <ModalCSS.ContentButton>
        <ButtonCSS.Add onClick={showModal}>
          {content} <PlusOutlined />
        </ButtonCSS.Add>
        <ButtonCSS.Primary disabled={!hasSelected} onClick={handleDeleteAll} className='mr-4'>
          Delete All
        </ButtonCSS.Primary>
        <ButtonCSS.Primary onClick={handleRefreshData}>Refresh Data</ButtonCSS.Primary>
      </ModalCSS.ContentButton>
      <ModalAnt
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose
      >
        <Component handleOk={handleOk} />
      </ModalAnt>
    </ModalCSS.Container>
  );
}

export default React.memo(Modal);
