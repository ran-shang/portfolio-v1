
import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import {Footer} from '../Footer';
import MeSection from '../MeSection';


function Home(){
    return (
        <>
           <HeroSection /> 
           <MeSection />
           <Cards />
           <Footer />
        </>
    );
}

export default Home;