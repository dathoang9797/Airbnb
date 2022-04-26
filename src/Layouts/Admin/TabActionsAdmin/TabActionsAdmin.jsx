import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import TabButtonActions from './TabButtonActions';
import Modal from '@Components/Modal';

function TabActionsAdmin(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {
    contentModal,
    selectedRowKeys,
    contentButtonAction,
    setSelectedRowKeys,
    handleDeleteAllThunk,
    handleRefreshDataThunk,
  } = props;
  const dispatch = useDispatch();

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleOk = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleDeleteAll = useCallback(async () => {
    dispatch(handleDeleteAllThunk(selectedRowKeys));
    setSelectedRowKeys([]);
  }, [dispatch, handleDeleteAllThunk, selectedRowKeys, setSelectedRowKeys]);

  const handleRefreshData = useCallback(() => {
    dispatch(handleRefreshDataThunk());
  }, [dispatch, handleRefreshDataThunk]);

  return (
    <>
      <Modal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        Component={contentModal}
      />

      <TabButtonActions
        content={contentButtonAction}
        showModal={showModal}
        handleDeleteAll={handleDeleteAll}
        handleRefreshData={handleRefreshData}
        selectedRowKeys={selectedRowKeys}
      />
    </>
  );
}

export default TabActionsAdmin;
