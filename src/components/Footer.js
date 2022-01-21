import React from 'react'
import {Button} from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Leave me a message from here!
                </p>
                <p className='footer-subscription-text'>
                    I am open to...
                </p>
                <div className='input-areas'>
                    <form>
                        
                        <textarea className='footer-input' rows='4' cols='50' placeholder='Say hi ~'></textarea>
                        <Button buttonStyle='btn--outline'>Contact Me</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wraper'>
                    <div className='footer-link-items'>
                        <h2>About Me</h2>
                        <Link to='/gallery'>See My Arts</Link>
                        <Link to='/projects'>See My Work</Link>
                        <Link to='/' >My Portfolio</Link>
                    </div>
                </div>
            </div>
            
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='social-icons'>
                        <Link 
                        className='social-icon-link facebook'
                        to={{pathname: 'https://www.instagram.com/keepcalm_rrrrran/'}}
                        target='_blank'
                        aria-label='Facebook'>
                        <i className='fab fa-facebook-f' /> </Link>

                        <Link 
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram' >
                        <i className='fab fa-instagram' /> </Link>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Footer
