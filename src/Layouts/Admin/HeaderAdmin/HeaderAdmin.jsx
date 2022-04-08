import { HeaderCSS } from '@Layouts/Admin/HeaderAdmin/HeaderAdmin.styles';
import React from 'react';
import { localService } from '@Services/LocalStorageService';
import SearchInput from '@Components/SearchInput';
import { useLocation, useHistory } from 'react-router-dom';
import { images } from '@Assets/Images';

function HeaderAdmin() {
  const { pathname } = useLocation();
  const history = useHistory();
  const urlProfile = process.env.REACT_APP_LINK_PROFILE;
  const urlSignIn = process.env.REACT_APP_LINK_SIGN_IN;
  const urlUserManager = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER;
  const { account } = images;

  const HeaderMenuDropdownProfile = (
    <HeaderCSS.Menus>
      <HeaderCSS.MenuItem className='relative' key={1}>
        <button
          onClick={() => {
            history.push(urlProfile);
          }}
        >
          <svg
            className='w-4 h-4 mr-3'
            aria-hidden='true'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
          </svg>
          Profile
        </button>
      </HeaderCSS.MenuItem>
      <HeaderCSS.MenuItem key={2}>
        <div>
          <button>
            <svg
              className='w-4 h-4 mr-3'
              aria-hidden='true'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
              <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
            <span>Settings</span>
          </button>
        </div>
      </HeaderCSS.MenuItem>
      <HeaderCSS.MenuItem key={3}>
        <div>
          <button
            onClick={() => {
              localService.removeUserInfo();
              history.push(urlSignIn);
              window.location.reload();
            }}
          >
            <svg
              className='w-4 h-4 mr-3'
              aria-hidden='true'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1' />
            </svg>
            Logout
          </button>
        </div>
      </HeaderCSS.MenuItem>
    </HeaderCSS.Menus>
  );

  return (
    <HeaderCSS.Container>
      <HeaderCSS.Content>
        {urlUserManager === pathname ? <SearchInput /> : null}
        <HeaderCSS.Dropdowns
          overlay={HeaderMenuDropdownProfile}
          placement='bottomLeft'
          arrow={{ pointAtCenter: true }}
        >
          <button
            className='align-middle rounded-full focus:shadow-outline-purple focus:outline-none'
            aria-label='Account'
            aria-haspopup='true'
          >
            <img
              className='object-cover w-8 h-8 rounded-full'
              src={account}
              alt={account}
              aria-hidden='true'
            />
          </button>
        </HeaderCSS.Dropdowns>
      </HeaderCSS.Content>
    </HeaderCSS.Container>
  );
}

export default HeaderAdmin;
