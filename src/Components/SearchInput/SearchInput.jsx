import { searchSelector } from '@/Redux/Selector/SearchSelect';
import { SearchInputCSS } from '@Components/SearchInput/SeachInput.styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';

function SearchInput({ content, dispatchAction }) {
  const dispatch = useDispatch();
  const { selectSearchState } = searchSelector;
  const searchValue = useSelector(selectSearchState);
  const { Container, Content, Input, Item } = SearchInputCSS;

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(dispatchAction(value));
  };

  return (
    <Container>
      <Content>
        <Item>
          <SearchOutlined />
          <Input
            type='text'
            placeholder=' '
            name='search'
            childrenProps={content}
            onChange={handleChange}
            value={searchValue}
          />
        </Item>
      </Content>
    </Container>
  );
}

export default SearchInput;
