<<<<<<< HEAD:src/Layouts/User/HeaderUser/HeaderUser.jsx
import React from 'react';
import { HeaderCSS } from '@Layouts/User/HeaderUser/HeaderUser.styles';
import { images } from '@Assets/Images';

 

function Header() {
  const [state, setState] = useState(false);


  const { searchIcon, logo, globe, chevronDown, hamburger, account } = images;

  const {
    HeaderContainer,
    HeaderLogo,
    HeaderNav,
    HeaderNavA,
    HeaderNavButton,
    HeaderSearch,
    HeaderSearchIcon,
  } = HeaderCSS;


  const changeClassOnSroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 80) {
      setState(true);
    } else {
      setState(false);
    }
  };
  window.addEventListener("scroll", changeClassOnSroll);
  return (
    <HeaderContainer className={state ? "active" : ""}>
      <HeaderLogo>
        <img src={logo} alt="Logo" />
      </HeaderLogo>
      <HeaderSearch>
        <button>Selected map area</button>
        <span />
        <button>1 Sep - 3 Sep</button>
        <span />
        <button>
          1 guest
          <HeaderSearchIcon>
            <img src={searchIcon} alt="Search Icon" />
          </HeaderSearchIcon>
        </button>
      </HeaderSearch>
      <HeaderNav>
        <HeaderNavA>Become a host</HeaderNavA>
        <HeaderNavButton className="header__nav__button-language">
          <img src={globe} alt="Globe" />
          <img src={chevronDown} alt="Chevron down" />
        </HeaderNavButton>
        <HeaderNavButton className="header__nav__button-account">
          <img src={hamburger} alt="Hamburger" />
          <img src={account} alt="Account" />
        </HeaderNavButton>
      </HeaderNav>
    </HeaderContainer>
  );
}

export default React.memo(HeaderUser);
