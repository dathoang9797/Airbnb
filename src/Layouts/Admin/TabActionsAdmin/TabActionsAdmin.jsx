import React, { useCallback, useState, Fragment } from 'react';
import { sweetAlert } from '@Utils/Libs';
import { useDispatch } from 'react-redux';
import TabButtonActions from './TabButtonActions';
import TabModalActions from './TabModalActions';

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
  const { sweetAlertDelete, sweetAlertSuccess } = sweetAlert;
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
    const result = await sweetAlertDelete();
    if (result.isConfirmed) {
      const result = await dispatch(handleDeleteAllThunk(selectedRowKeys));
      if (result.error) return;
      setSelectedRowKeys([]);
      sweetAlertSuccess();
    }
  }, [
    dispatch,
    handleDeleteAllThunk,
    selectedRowKeys,
    setSelectedRowKeys,
    sweetAlertDelete,
    sweetAlertSuccess,
  ]);

  const handleRefreshData = useCallback(() => {
    dispatch(handleRefreshDataThunk());
  }, [dispatch, handleRefreshDataThunk]);

  return (
    <Fragment>
      <TabModalActions
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
    </Fragment>
  );
}

export default TabActionsAdmin;
