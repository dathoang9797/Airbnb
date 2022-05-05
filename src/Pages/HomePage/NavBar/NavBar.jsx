import './NavBar.css';
import React, { useEffect, useState } from 'react';
import 'animate.css';

function NavBar() {
  const [state, setState] = useState(false);

  useEffect(() => {
    const changeClassOnSroll = () => {
      const scrollValue = document.documentElement.scrollTop;
      if (scrollValue > 80) {
        setState(true);
      } else {
        setState(false);
      }
    };
    window.addEventListener('scroll', changeClassOnSroll);
    return () => window.removeEventListener('scroll', changeClassOnSroll);
  }, []);

  return (
    <div className='nav-header nav-header-classic menu-space header-position header-white'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <nav
              className={
                state
                  ? 'active navbar navbar-expand-lg navbar-light animate__fadeInDown  animate__animated nav__header'
                  : 'navbar navbar-expand-lg navbar-light '
              }
            >
              <a className='navbar-brand '  href='#@'>
                <img src='https://easetemplate.com/html/rentkit/assets/images/logo.svg' alt='' />
              </a>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon' />
              </button>

              <div className='collapse navbar-collapse justify-between' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto ms-lg-3'>
                  <li className='nav-item dropdown '>
                    <a
                      className='nav-link dropdown-toggle text-xl'
                      href='#@'
                      id='navbarDropdown'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Home
                    </a>
                    <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                      <li>
                        <a className='dropdown-item'  href='#@'>
                          Classic
                        </a>
                      </li>
                      <li>
                        <a className='dropdown-item'  href='#@'>
                          Modern
                        </a>
                      </li>
                      <li>
                        <a className='dropdown-item'  href='#@'>
                          Hotel <span className='badge bg-primary'>New</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item dropdown '>
                    <a
                      className='nav-link dropdown-toggle text-xl'
                      href='#@'
                      id='navbarDropdown'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Blog
                    </a>
                    <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                      <li>
                        <a  href='#@' className='dropdown-item'>
                          Blog
                        </a>
                      </li>
                      <li>
                        <a  href='#@' className='dropdown-item'>
                          Author
                        </a>
                      </li>
                      <li>
                        <a  href='#@' className='dropdown-item'>
                          Category
                        </a>
                      </li>
                      <li>
                        <a  href='#@' className='dropdown-item'>
                          Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link text-xl'  href='#@'>
                      Docs
                    </a>
                  </li>
                </ul>
                <a href='./pages/add-listing.html' className='btn btn-primary d-none d-lg-block'>
                  List Your Space
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
