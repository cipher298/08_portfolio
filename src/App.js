import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Info from './components/Info';

const App = () => {
  return (
    <div className="overflow-hidden bg-no-repeat bg-cover bg-site">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Works />
      <Skills />
      <Contact />
      <Info />
    </div>
  );
};

export default App;
