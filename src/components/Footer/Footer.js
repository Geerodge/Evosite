import React from 'react';
import { ReactComponent as Logo } from '../../img/svgs/logo.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__logo'>
          <Logo />
        </div>
        <div className='footer__contact'>
          <div className='footer__contact-inner'>
            <p>Managing Director - Joe Bloggs<br />
            <span className='bold'>Evosite Example Site</span><br />
            Viney Court, Taunton<br />
            Somerset TA1 3FB</p>
            <ul className='footer__contact-list'>
              <li className='footer__contact-list-actual'>01823 470 100</li>
              <li className='footer__contact-list-actual'>Email us</li>
              <li className='footer__contact-list-actual'>Get Directions</li>
            </ul>
          </div>
        </div>
        <div className='footer__links'>
          <ul className='footer__links-list'>
            <li className='footer__links-list-actual'>
              <a className='footer__links-link' href='/#'>Quick Link One</a>
            </li>
            <li className='footer__links-list-actual'>
              <a className='footer__links-link' href='/#'>Quick Link Two</a>
            </li>
            <li className='footer__links-list-actual'>
              <a className='footer__links-link' href='/#'>Quick Link Three</a>
            </li>
            <li className='footer__links-list-actual'>
              <a className='footer__links-link' href='/#'>Quick Link Four</a>
            </li>
            <li className='footer__links-list-actual'>
              <a className='footer__links-link' href='/#'>Quick Link Five</a>
            </li>
            <li className='footer__links-list-actual'>
              <a className='footer__links-link' href='/#'>Quick Link Six</a>
            </li>
            <li className='footer__links-list-actual'>
              <a className='footer__links-link' href='/#'>Quick Link Seven</a>
            </li>
            <li className='footer__links-list-actual'>
              <a className='footer__links-link' href='/#'>Quick Link Eight</a>
            </li>
            <li className='footer__links-list-actual'>
              <a className='footer__links-link' href='/#'>Quick Link Nine</a>
            </li>
          </ul>
        </div>
        <div className='footer__copyright'>
          <p className='footer__copyright-actual'>© 2021 Evosite Example Site -  Registered Company Number 01234567</p>
          <ul className='footer__info-list'>
            <li className='footer__info-list-actual'>
              <a className='footer__info-list-link' href='/'>Sitemap</a>
            </li>
            <li className='footer__info-list-actual'>
              <a className='footer__info-list-link' href='/'>Terms of Use</a>
            </li> 
            <li className='footer__info-list-actual'>
              <a className='footer__info-list-link' href='/'>Cookie Usage</a>
            </li>
            <li className='footer__info-list-actual'>
              <a className='footer__info-list-link' href='/'>Privacy Policy</a>
            </li>
            <li className='footer__info-list-actual'>
              <a className='footer__info-list-link' href='/'>High Visibility Version</a>
            </li>
          </ul>
          <p className='footer__website-design'>Website Design by Evosite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;