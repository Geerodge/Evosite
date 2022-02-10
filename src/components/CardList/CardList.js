import React from 'react';

function cardList() {
  return (
    <section className='card-list'>
      <div className='card-list__container'>
        <h2 className='card-list__title'>Latest News</h2>
        <div className='card-list__carousel'>
          <button className='card-list__carousel-btn btn-circle'>
            <a href='/#' className='card-list__carousel-btn-link'>
              <i className='card-list__carousel-btn-actual arrow-right'></i>
            </a>
          </button>
          <button className='card-list__carousel-btn btn-circle'>
            <a href='/#' className='card-list__carousel-btn-link'>
              <i className='card-list__carousel-btn-actual arrow-left'></i>
            </a>
          </button>
        </div>
        <div className='card-list__card-container'>
          <div className='card-list__card'>
            <div className='card-list__card-inner'>
              <h3 className='card-list__card-title'>Featured News / Category</h3>
              <div className='card-list__card-content'>
                <h4 className='card-list__card-date'>March 20th 20XX</h4>
                <p>This is an example of a really long heading that needs to span over multiple lines.</p>
              </div>
            </div>
          </div>
          <div className='card-list__card'>
            <div className='card-list__card-inner'>
              <h3 className='card-list__card-title'>News / Category</h3>
              <div className='card-list__card-content'>
                <h4 className='card-list__card-date'>March 20th 20XX</h4>
                <p>This is a short heading that only spans one line</p>
                <a href='/#' className='card-list__card-link'>Read article</a>
              </div>
            </div>
          </div>
          <div className='card-list__card'>
            <div className='card-list__card-inner'>
              <div className='card-list__card-content'>
                <h4 className='card-list__card-date'>March 20th 20XX</h4>
                <p>This is a short heading that only spans one line</p>
              </div>
            </div>
          </div>
        </div>
        <button className='card-list__button btn-default'>View all news</button>
      </div>
    </section>
  );
}


export default cardList;



