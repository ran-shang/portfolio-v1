import React from 'react';
import {Button} from './Button';
import './HeroSection.css';



function HeroSection() {
   

    return (
        <div class='hero-container'>
            
            <h1>HI! I'M RAN!</h1>
            <p> You are welcomed to check out my work below</p>
            <div className='hero-btns'>
                <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path='overview'
                    >OVERVIEW
                    </Button>
                <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                   
                    >CONTACT ME 
                    </Button>
            </div>
        </div>
    );
}

export default HeroSection;
