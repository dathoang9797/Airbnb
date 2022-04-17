import { searchSelector } from '@/Redux/Selector/SearchSelect';
import { SearchInputCSS } from '@Components/SearchInput/SeachInput.styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function SearchInput({ content, dispatchAction }) {
  const dispatch = useDispatch();
  const { selectSearchState } = searchSelector;
  const searchValue = useSelector(selectSearchState);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(dispatchAction(value));
  };

  return (
    <SearchInputCSS.Container>
      <SearchInputCSS.Content>
        <SearchInputCSS.Item>
          <svg className='w-4 h-4' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            />
          </svg>
          <SearchInputCSS.Input
            type='text'
            placeholder=' '
            name='search'
            childrenProps={content}
            onChange={handleChange}
            value={searchValue}
          />
        </SearchInputCSS.Item>
      </SearchInputCSS.Content>
    </SearchInputCSS.Container>
  );
}

export default SearchInput;
