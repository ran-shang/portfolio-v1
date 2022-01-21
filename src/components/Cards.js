import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import cover from '../images/profileImg.jpg'
import cover1 from '../images/gallery_cover_00_00.jpg'
import cover2 from '../images/projects_cover.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>An overview of my work:</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    <CardItem 
                         src={cover}
                         text='My name is Ran Shang and I came from Shanxi, China. 
                         I am currently pursuing a Bachelor Degree in Computer Science at Concordia University, Montreal.'
                         label='Me'
                         path='/'
                        />
                        <CardItem 
                         src={cover2}
                         text='See what academic accomplishments have I achieved so far by taking a look at my projects'
                         label='Projects'
                         path='/projects'
                        />
                        <CardItem 
                         src={cover1}
                         text='Explore my gallery and see where I would like to spend my spare time in'
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

