import React from 'react';
import ImgAside from '../../img/imageaside.png';

function ImageAside() {
  return (
    <section id='welcome' className='image-aside'>
      <div className='image-aside__image'>
        <img 
          className='image-aside__image-actual'
          src={ImgAside}
          alt="alt text" />
      </div>
      <div className='image-aside__container'>
        <div className='image-aside__content'>
          <p className='image-aside__pre-title'>Welcome to</p>
          <h2 className='image-aside__title'>The example Evosite website</h2>
          <p>Donec congue metus quis est commodo, eget condimentum turpis rhoncus. Fusce dictum nibh nec nisi lacinia tincidunt et quis ex. Nunc turpis enim, interdum vitae neque vitae, sollicitudin tempus purus. Praesent sed leo in arcu tincidunt vestibulum.</p>
          <p className='image-aside__author'><span className='bold'>Joe Bloggs</span> - Managing Director</p>
          <button className='image-aside__button btn-default'>Read more</button>
        </div>
      </div>
    </section>
  );
}

export default ImageAside;