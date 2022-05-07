import { PlusOutlined } from '@ant-design/icons';
import { ButtonCSS } from '@Components/Button';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { TabActionAdminCSS } from './TabActionAdmin.styles';

function TabActionsAdmin(props) {
  const {
    selectedRowKeys,
    contentButtonAction,
    setSelectedRowKeys,
    handleDeleteAllThunk,
    handleRefreshDataThunk,
    showModal,
  } = props;
  const { Add, Primary } = ButtonCSS;
  const hasSelected = !selectedRowKeys.length;
  const { Container } = TabActionAdminCSS;
  const dispatch = useDispatch();

  const handleDeleteAll = useCallback(async () => {
    dispatch(handleDeleteAllThunk(selectedRowKeys));
    setSelectedRowKeys([]);
  }, [dispatch, handleDeleteAllThunk, selectedRowKeys, setSelectedRowKeys]);

  const handleRefreshData = useCallback(() => {
    Promise.all(handleRefreshDataThunk.map((thunk) => dispatch(thunk())));
  }, [dispatch, handleRefreshDataThunk]);

  return (
    <Container>
      <Add
        onClick={() => {
          showModal();
        }}
      >
        {contentButtonAction} <PlusOutlined />
      </Add>
      <Primary disabled={hasSelected} onClick={handleDeleteAll} className='mr-4'>
        Delete All
      </Primary>
      <Primary onClick={handleRefreshData}>Refresh Data</Primary>
    </Container>
  );
}

export default TabActionsAdmin;
