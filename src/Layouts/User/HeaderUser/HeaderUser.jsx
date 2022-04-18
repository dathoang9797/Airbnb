import React, { useState } from 'react';
import { HeaderCSS } from '@Layouts/User/HeaderUser/HeaderUser.styles';
import { images } from '@Assets/Images';

function HeaderUser() {
  const { hamburger, logo, searchIcon, globe, chevronDown, account } = images;
  const [state, setState] = useState(false);
  const changeClassOnSroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 80) {
      setState(true);
    } else {
      setState(false);
    }
  };
  window.addEventListener('scroll', changeClassOnSroll);
  return (
    <HeaderCSS.Container className={state ? 'active' : ''}>
      <HeaderCSS.Logo>
        <img src={logo} alt='Logo' />
      </HeaderCSS.Logo>
      <HeaderCSS.Search>
        <button>Selected map area</button>
        <span />
        <button>1 Sep - 3 Sep</button>
        <span />
        <button>
          1 guest
          <HeaderCSS.SearchIcon>
            <img src={searchIcon} alt='Search Icon' />
          </HeaderCSS.SearchIcon>
        </button>
      </HeaderCSS.Search>
      <HeaderCSS.Nav>
        <HeaderCSS.NavA>Become a host</HeaderCSS.NavA>
        <HeaderCSS.NavButton className='header__nav__button-language'>
          <img src={globe} alt='Globe' />
          <img src={chevronDown} alt='Chevron down' />
        </HeaderCSS.NavButton>
        <HeaderCSS.NavButton className='header__nav__button-account'>
          <img src={hamburger} alt='Hamburger' />
          <img src={account} alt='Account' />
        </HeaderCSS.NavButton>
      </HeaderCSS.Nav>
    </HeaderCSS.Container>
  );
}

export default React.memo(HeaderUser);
