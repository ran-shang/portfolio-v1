import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {Button} from './Button.js';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 760){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    
    return (
        <>
          <nav className="navbar">
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    RAN 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            My Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                            My Gallery
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <LinkS to='contactSection' smooth= {true} className='nav-links-mobile' onClick={closeMobileMenu}>
                            Contact Me
                        </LinkS>
                    </li>
                </ul>
                {button && <Link to='/' className='btn-mobile'><Button buttonStyle='btn--outline'>ME</Button></Link>}
            </div>

          </nav>  
        </>
    )
}

export default Navbar
