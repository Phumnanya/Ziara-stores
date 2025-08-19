import React from "react";
import Navbar from './components/Navbar';
import Marq from './components/Marquee';
import Carousel from './components/Carousel';
import Press from './components/Press';
import Arrivals from './components/Arrivals';
import Trending from "./components/Trending";
import Testimonials from './components/Testimonials';
import Delivery from './components/Delivery';
import Journals from "./components/Journals";
import Subscribe from "./components/Subscribe";
import Bottom from "./components/Bottom";

function Homepage() {
    return(
        <>
            <Navbar />
            <Marq />
            <Carousel />
            <Press />
            <Arrivals />
            <Testimonials />
            <Delivery />
            <Journals />
            <Subscribe />
            <Bottom />
        </>
    )
}

export default Homepage;

/**
 *          
            
            
 */