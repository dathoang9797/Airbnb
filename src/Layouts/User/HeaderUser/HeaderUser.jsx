import React from 'react';
import { HeaderStyle } from '@Layouts/User/HeaderUser/HeaderUser.styles';
import { images } from '@Assets/Images';

function Header() {
  const { searchIcon, logo, globe, chevronDown, hamburger, account } = images;

  const {
    HeaderContainer,
    HeaderLogo,
    HeaderNav,
    HeaderNavA,
    HeaderNavButton,
    HeaderSearch,
    HeaderSearchIcon,
  } = HeaderStyle;

  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={logo} alt='Logo' />
      </HeaderLogo>
      <HeaderSearch>
        <button>Selected map area</button>
        <span />
        <button>1 Sep - 3 Sep</button>
        <span />
        <button>
          1 guest
          <HeaderSearchIcon>
            <img src={searchIcon} alt='Search Icon' />
          </HeaderSearchIcon>
        </button>
      </HeaderSearch>
      <HeaderNav>
        <HeaderNavA>Become a host</HeaderNavA>
        <HeaderNavButton className='header__nav__button-language'>
          <img src={globe} alt='Globe' />
          <img src={chevronDown} alt='Chevron down' />
        </HeaderNavButton>
        <HeaderNavButton className='header__nav__button-account'>
          <img src={hamburger} alt='Hamburger' />
          <img src={account} alt='Account' />
        </HeaderNavButton>
      </HeaderNav>
    </HeaderContainer>
  );
}

export default Header;
