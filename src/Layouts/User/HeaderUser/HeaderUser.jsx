import React, { useState, useLayoutEffect } from 'react';
import { HeaderCSS } from '@Layouts/User/HeaderUser/HeaderUser.styles';
import { images } from '@Assets/Images';

function HeaderUser() {
  const { hamburger, logo, searchIcon, globe, chevronDown, account } = images;
  const [state, setState] = useState(false);
  const {
    HeaderContainer,
    HeaderLogo,
    HeaderNav,
    HeaderSearch,
    HeaderSearchIcon,
    HeaderNavA,
    HeaderNavButton,
  } = HeaderCSS;

  useLayoutEffect(() => {
    const changeClassOnScroll = () => {
      const scrollValue = document.documentElement.scrollTop;
      setState(scrollValue > 80);
    };
    window.addEventListener('scroll', changeClassOnScroll);
    return () => window.removeEventListener('scroll', changeClassOnScroll);
  }, []);

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
    <HeaderContainer className={state ? 'active' : ''}>
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

export default HeaderUser;
