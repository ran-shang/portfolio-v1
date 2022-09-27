import React from 'react'
import {Link} from 'react-scroll'

function CardItem2(props) {
  return (
        <>
          <li className='cards__item'>
              <Link to={props.path} smooth={true} offset={-80} className='cards__item__link'>
                  <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img 
                    src={props.src} 
                    alt='Gallery Cover' 
                    className='cards__item__img'/>
                  </figure>

                  <div className='cards__item__info'>
                      <h5 className='cards__item__text'>
                        {props.text}
                      </h5>
                  </div>
                </Link>
              </li>  
        </>
    )
}

export default CardItem2