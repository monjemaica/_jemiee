import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import '../styles.css';
import { MouseContext } from '../context/MouseContextProvider';

const Navbar = () => {
    const { cursorChangeHandler } = useContext(MouseContext);

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    useEffect(() => {
    
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container" onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}>

                    <a href="/" className={"navbar-logo"}>
                    <i className="fa-solid fa-code"></i>
                    </a>
                </div>
                <div className="menu-icon" onClick={handleClick} onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'} onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}>
                    <li className="nav-item" onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                        {/* <a href='#section_about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </a> */}
                        <Link to="section_about" className={"nav-links"} onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                        {/* <a href='#section_projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </a> */}
                        <Link to="section_projects" className={"nav-links"} onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                        {/* <a href='#section_experience' className='nav-links' onClick={closeMobileMenu}>
                            Experience
                        </a> */}
                        <Link to="section_experience" className={"nav-links"} onClick={closeMobileMenu}>
                            Experience
                        </Link>
                    </li>
                </ul>

                {/* {button && <Button buttonStyle="btn--outline" download="test.png"> Resume</Button>} */}
                <a href='/assets/resume/Jemaica Mae Mon - Resume.pdf' className="btn btn--outline btn--medium" download="Jemaica Mae Mon - Resume.pdf" onMouseEnter={() => cursorChangeHandler("btn-hovered")}
                    onMouseLeave={() => cursorChangeHandler("")} > Resume</a>


            </nav>
        </>
    );
}

export default Navbar;