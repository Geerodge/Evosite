import React from 'react';

function Nav() {
  return (
    <section className='hero'>
      <div className='hero__content'>
        <p className='hero__pre-text'>Evosite Example Website</p>
        <h1 className='hero__heading'>Donec congue metus quis est</h1>
        <button className='hero__button btn-circle'>
          <a href='#welcome' className='hero__link'>
            <i className='hero__button-actual arrow-down'></i>
          </a>
        </button>
      </div>
    </section>
  );
}

export default Nav;