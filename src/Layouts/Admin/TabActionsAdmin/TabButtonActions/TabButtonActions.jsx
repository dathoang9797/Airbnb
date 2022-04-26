import React from 'react';
import { ButtonCSS } from '@Components/Button';
import { PlusOutlined } from '@ant-design/icons';
import { TabButtonActionsCSS } from './TabButtonActions.styles';

function TabButtonActions(props) {
  const { Container } = TabButtonActionsCSS;
  const { Add, Primary } = ButtonCSS;
  const { content, showModal, handleDeleteAll, handleRefreshData, selectedRowKeys } = props;
  const hasSelected = !selectedRowKeys.length;

  return (
    <Container>
      <Add onClick={showModal}>
        {content} <PlusOutlined />
      </Add>
      <Primary disabled={hasSelected} onClick={handleDeleteAll} className='mr-4'>
        Delete All
      </Primary>
      <Primary onClick={handleRefreshData}>Refresh Data</Primary>
    </Container>
  );
}

export default React.memo(TabButtonActions);
