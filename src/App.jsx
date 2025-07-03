import React from 'react';
import Navbar from './components/Navbar';
import Marq from './components/Marquee';
import Carousel from './components/Carousel';
import Press from './components/Press';
import Shoptab from './components/ShopTab';
import Arrivals from './components/Arrivals';
import Testimonials from './components/Testimonials';
import Delivery from './components/Delivery';
import Trending from './components/Trending';

function App() {
  return (
    <>
    <Navbar />
    <Marq />
    <Carousel />
    <Press />
    <Shoptab />
    <Arrivals />
    <Testimonials />
    <Delivery />
    <Trending />
    </>
  );
}

export default App;