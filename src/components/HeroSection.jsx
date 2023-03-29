import React from 'react'
import '../App.css';
import { Button } from './Button';
import '../styles.css';

const HeroSection = () => {
    return (
        <>
            <div className="hero-container">
                <video src="/assets/videos/video-3.mp4" autoPlay loop muted />
                <span className='hero--heading small'>Hi, I'm</span>
                <span className='hero--heading big'>Jemaica Mon</span>
                <span className='hero--heading role'>Full-Stack Developer / Software Engineering</span>


                <div className={"hero-btns"}>
                    {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer <i className={`far fa-play-circle ${styles["fa-play-circle"]}`} /> </Button> */}
                </div>
            </div>
        </>
    );
}

export default HeroSection;