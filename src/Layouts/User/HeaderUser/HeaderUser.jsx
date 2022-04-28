import React, { useState, useLayoutEffect } from 'react';
import { HeaderCSS } from '@Layouts/User/HeaderUser/HeaderUser.styles';
import { images } from '@Assets/Images';

function HeaderUser() {
  const { hamburger, logo, searchIcon, globe, chevronDown, account } = images;
  const [state, setState] = useState(false);
  const { Container, Logo, Nav, Search, SearchIcon, NavA, NavButton } = HeaderCSS;

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
    <Container className={state ? 'active' : ''}>
      <Logo>
        <img src={logo} alt='Logo' />
      </Logo>
      <Search>
        <button>Selected map area</button>
        <span />
        <button>1 Sep - 3 Sep</button>
        <span />
        <button>
          1 guest
          <SearchIcon>
            <img src={searchIcon} alt='Search Icon' />
          </SearchIcon>
        </button>
      </Search>
      <Nav>
        <NavA>Become a host</NavA>
        <NavButton className='__nav__button-language'>
          <img src={globe} alt='Globe' />
          <img src={chevronDown} alt='Chevron down' />
        </NavButton>
        <NavButton className='__nav__button-account'>
          <img src={hamburger} alt='Hamburger' />
          <img src={account} alt='Account' />
        </NavButton>
      </Nav>
    </Container>
  );
}

export default HeaderUser;
