import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import '../styles.css';
import { MouseContext } from '../context/MouseContextProvider';

const Navbar = () => {
    const { cursorChangeHandler } = useContext(MouseContext);

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
                <div className="navbar-container" onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}>

                    <Link to="/" className={"navbar-logo"}>
                        <i className="fab fa-typo3"></i>
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleClick} onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'} onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}>
                    <li className="nav-item" onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                        <a href='#section_about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </a>
                    </li>
                    <li className="nav-item" onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                        <a href='#section_projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </a>
                    </li>
                    <li className="nav-item" onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                        <a href='#section_experience' className='nav-links' onClick={closeMobileMenu}>
                            Experience
                        </a>
                    </li>
                </ul>

                {button && <Button buttonStyle="btn--outline"> Resume</Button>}

            </nav>
        </>
    );
}

export default Navbar;