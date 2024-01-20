import React from 'react'
import CardItem from './CardItem'
import CardItem2 from './CardItem2'
import './Cards.css'
import cover from "../images/new_avator.JPG";
import cover1 from '../images/theSea.jpg'
import cover2 from '../images/code.jpg'


function Cards() {
    return (
        <div className='cards' id='cardSection'>
            <h1>An overview of my work:</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    
                        <CardItem2 
                         src={cover}
                         text='My name is Ran Shang. 
                         Click here to learn more about me.'
                         label='Me'
                         path='meSection'
                        />

                        <CardItem 
                         src={cover2}
                         text='Click here to take a look at my projects.'
                         label='Projects'
                         path='/projects'
                        />
                        <CardItem 
                         src={cover1}
                         text='Click here to explore my artworks.'
                         label='Gallery'
                         path='/gallery'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards

