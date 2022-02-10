import React from 'react';
import { ReactComponent as Logo } from '../../img/svgs/logo.svg';
import { ReactComponent as Phone } from '../../img/svgs/phone.svg';
import { ReactComponent as Facebook } from '../../img/svgs/facebook.svg';
import { ReactComponent as Twitter } from '../../img/svgs/twitter.svg';
import { ReactComponent as Search } from '../../img/svgs/search.svg';

function Header() {
  return (
    <section className='header'>
      <div className='header__logo'>
        <Logo className='header__logo-actual mobile-hide' />
      </div>
      <div className='header__sub-nav'>
        <button className='header__button-cta btn-default'>Join Us</button>
        <div className="header__icons">
          <button className='header__button-cta btn-circle header__phone'>
            <Phone className="header__phone-actual" />
            <span className='mobile-hide'>Contact Us</span>
          </button>
          <Facebook className='header__icons-actual' />
          <Twitter className='header__icons-actual' />
          <Search className='header__icons-actual' />
        </div>
      </div>
      <nav className='header__nav'>
        <div className='header__nav-desktop mobile-hide'>
          <a href='/#' className='header__nav-desktop-link'>Home</a>
          <a href='/#' className='header__nav-desktop-link'>Parents</a>
          <a href='/#' className='header__nav-desktop-link'>About Us</a>
          <a href='/#' className='header__nav-desktop-link'>News &#38; Events</a>
          <a href='/#' className='header__nav-desktop-link'>Key Documents</a>
          <a href='/#' className='header__nav-desktop-link'>Vacancies</a>
          <a href='/#' className='header__nav-desktop-link'>Curriculum</a>
          <a href='/#' className='header__nav-desktop-link'>Contact</a>
        </div>
        <div className='header__nav-mobile desktop-hide'>
          <a href='/#' className='header__nav-mobile-logo'>
            <Logo className='header__nav-mobile-logo-actual' />
          </a>
          <a href='/#' className='header__nav-mobile-burger'>
            <svg xmlns='http://www.w3.org/2000/svg' width='50' height='32' viewBox='0 0 50 32' fill='none'>
              <rect width='50' height='4' fill='white' />
              <rect y='13' width='50' height='4' fill='white' />
              <rect y='26' width='50' height='4' fill='white' />
            </svg>
          </a>
        </div>
      </nav>
    </section>
  );
}

export default Header;