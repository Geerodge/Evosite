import React from 'react';

// CSS imports
import './imports.scss';

// Components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ImageAside from './components/ImageAside/ImageAside';
import CardList from './components/CardList/CardList';
import Footer from './components/Footer/Footer';


function Layout() {
  return (
    <section className="layout">
      <Header />
      <Hero />
      <ImageAside />
      <CardList />
      <Footer />
    </section>
  );
}

export default Layout;