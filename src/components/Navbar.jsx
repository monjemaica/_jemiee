import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import '../styles.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className={"navbar-logo"}>
                        <i className="fab fa-typo3"></i>
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        
                        {/* <Link to='#section_projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link> */}
                        <a href='#section_projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link to='/exp' className='nav-links' onClick={closeMobileMenu}>
                            Experience
                        </Link>
                    </li>
                </ul>

                {button && <Button buttonStyle="btn--outline"> Resume</Button>}

            </nav>
        </>
    );
}

export default Navbar;