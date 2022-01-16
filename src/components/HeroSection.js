import React from 'react';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div class='hero-container'>
            
            <h1>ADVENTURE AWAITS</h1>
            <p> What are u waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >GET STARTED
                    </Button>
                <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    >WATCH TRAILER 
                    </Button>
            </div>
        </div>
    );
}

export default HeroSection;
