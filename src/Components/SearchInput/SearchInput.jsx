import { SearchInputCSS } from '@Components/SearchInput/SeachInput.styles';
import { quanLyNguoiDungAction } from '@Redux/Reducers/QuanLyNguoiDungSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

function SearchInput() {
  const dispatch = useDispatch();
  const { setDanhSachNguoiDungFilter } = quanLyNguoiDungAction;

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(setDanhSachNguoiDungFilter(e.target.value));
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
            childrenProps='Nhập vào tài khoản hoặc họ tên người dùng'
            onChange={handleChange}
          />
        </SearchInputCSS.Item>
      </SearchInputCSS.Content>
    </SearchInputCSS.Container>
  );
}

export default SearchInput;
